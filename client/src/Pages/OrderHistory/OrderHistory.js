import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './OrderHistory.module.scss';

import Header from '../../Layouts/Header/Header';
import Footer from '../../Layouts/Footer/Footer';
import request from '../../config/Connect';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Layouts/Loading/Loading';

const cx = classNames.bind(styles);

function OrderHistory() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('all');
    const [selectedOrder, setSelectedOrder] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        console.log('OrderHistory component mounted');

        const token = document.cookie;
        console.log('Token:', token);

        if (!token || !token.includes('Token=')) {
            console.log('No token found, redirecting to login');
            navigate('/login');
            return;
        }

        const fetchOrders = async () => {
            try {
                console.log('Fetching orders...');
                setLoading(true);

                const response = await request.get('/api/dataorder');
                console.log('API response:', response);

                if (response.data && Array.isArray(response.data)) {
                    console.log('Orders data received:', response.data);

                    // Sắp xếp theo thời gian tạo đơn hàng, mới nhất lên đầu
                    const sortedOrders = response.data.sort(
                        (a, b) => new Date(b.createdAt || Date.now()) - new Date(a.createdAt || Date.now()),
                    );

                    setOrders(sortedOrders);
                    console.log('Orders set to state:', sortedOrders);
                } else {
                    console.error('Invalid data format:', response.data);
                    setError('Không thể tải dữ liệu đơn hàng');
                }
            } catch (error) {
                console.error('Lỗi khi tải lịch sử đơn hàng:', error);
                setError('Đã xảy ra lỗi khi tải dữ liệu đơn hàng');
            } finally {
                console.log('Setting loading to false');
                setLoading(false);
            }
        };

        fetchOrders();
    }, [navigate]);

    // Xử lý hiển thị chi tiết đơn hàng
    const handleShowDetails = (order) => {
        setSelectedOrder(order === selectedOrder ? null : order);
    };

    // Xử lý hủy đơn hàng
    const handleDeleteOrder = async (id) => {
        if (!window.confirm('Bạn có chắc chắn muốn hủy đơn hàng này không?')) {
            return;
        }

        try {
            console.log('Deleting order:', id);
            setLoading(true);

            const res = await request.post('/api/deleteorder', { id });
            console.log('Delete response:', res);

            toast.success(res.data.message || 'Đã hủy đơn hàng thành công');

            // Cập nhật lại danh sách đơn hàng sau khi xóa
            const response = await request.get('/api/dataorder');
            if (response.data && Array.isArray(response.data)) {
                const sortedOrders = response.data.sort(
                    (a, b) => new Date(b.createdAt || Date.now()) - new Date(a.createdAt || Date.now()),
                );
                setOrders(sortedOrders);
            }
        } catch (error) {
            console.error('Lỗi khi hủy đơn hàng:', error);
            toast.error('Không thể hủy đơn hàng. Vui lòng thử lại sau.');
        } finally {
            setLoading(false);
        }
    };

    // Lọc đơn hàng theo trạng thái
    const getFilteredOrders = () => {
        console.log('Filtering orders by tab:', activeTab);
        switch (activeTab) {
            case 'processing':
                return orders.filter((order) => !order.statusOrder && !order.order);
            case 'completed':
                return orders.filter((order) => order.statusOrder && !order.order);
            case 'cancelled':
                return orders.filter((order) => order.order);
            default:
                return orders;
        }
    };

    // Định dạng ngày tháng
    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';

        const options = {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };
        return new Date(dateString).toLocaleDateString('vi-VN', options);
    };

    // Tính tổng giá trị đơn hàng
    const calculateItemTotal = (price, quantity) => {
        return price * quantity;
    };

    console.log('Rendering OrderHistory component', { loading, error, orders });

    return (
        <div className={cx('wrapper')}>
            <ToastContainer />
            <Loading isLoading={loading} />

            <header>
                <Header />
            </header>

            <main className={cx('container')}>
                <div className={cx('page-header')}>
                    <h1>Lịch sử đơn hàng</h1>
                    <p>Xem và quản lý các đơn hàng của bạn</p>
                </div>

                {error ? (
                    <div className={cx('error-message')}>
                        <p>{error}</p>
                        <Link to="/" className={cx('back-home')}>
                            Quay về trang chủ
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className={cx('tabs')}>
                            <button
                                className={cx('tab', { active: activeTab === 'all' })}
                                onClick={() => setActiveTab('all')}
                            >
                                Tất cả
                            </button>
                            <button
                                className={cx('tab', { active: activeTab === 'processing' })}
                                onClick={() => setActiveTab('processing')}
                            >
                                Đang xử lý
                            </button>
                            <button
                                className={cx('tab', { active: activeTab === 'completed' })}
                                onClick={() => setActiveTab('completed')}
                            >
                                Đã hoàn thành
                            </button>
                            <button
                                className={cx('tab', { active: activeTab === 'cancelled' })}
                                onClick={() => setActiveTab('cancelled')}
                            >
                                Đã hủy
                            </button>
                        </div>

                        {getFilteredOrders().length === 0 ? (
                            <div className={cx('no-orders')}>
                                <p>Không có đơn hàng nào trong mục này</p>
                                <Link to="/" className={cx('shop-now')}>
                                    Mua sắm ngay
                                </Link>
                            </div>
                        ) : (
                            <div className={cx('orders-list')}>
                                {getFilteredOrders().map((order) => (
                                    <div key={order._id} className={cx('order-card')}>
                                        <div className={cx('order-header')}>
                                            <div className={cx('order-info')}>
                                                <span className={cx('order-id')}>
                                                    Mã đơn: {order.idCode || order._id}
                                                </span>
                                                <span className={cx('order-date')}>
                                                    Ngày đặt: {formatDate(order.createdAt)}
                                                </span>
                                            </div>
                                            <div className={cx('order-status')}>
                                                {order.order ? (
                                                    <span className={cx('status', 'cancelled')}>Đã hủy</span>
                                                ) : order.statusOrder ? (
                                                    <span className={cx('status', 'completed')}>Đã giao hàng</span>
                                                ) : (
                                                    <span className={cx('status', 'processing')}>Đang xử lý</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className={cx('order-products')}>
                                            {order.products &&
                                                Array.isArray(order.products) &&
                                                order.products.slice(0, 2).map((product, index) => (
                                                    <div key={index} className={cx('product-item')}>
                                                        <div className={cx('product-name')}>{product.nameProduct}</div>
                                                        <div className={cx('product-details')}>
                                                            <span className={cx('product-quantity')}>
                                                                x{product.quantity}
                                                            </span>
                                                            <span className={cx('product-price')}>
                                                                {product.price?.toLocaleString()} đ
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            {order.products &&
                                                Array.isArray(order.products) &&
                                                order.products.length > 2 && (
                                                    <div className={cx('more-products')}>
                                                        +{order.products.length - 2} sản phẩm khác
                                                    </div>
                                                )}
                                        </div>

                                        <div className={cx('order-footer')}>
                                            <div className={cx('order-total')}>
                                                <span>Tổng tiền:</span>
                                                <span className={cx('total-price')}>
                                                    {order.sumPrice?.toLocaleString()} đ
                                                </span>
                                            </div>

                                            <div className={cx('payment-status')}>
                                                {order.statusPayment ? (
                                                    <span className={cx('paid')}>Đã thanh toán</span>
                                                ) : (
                                                    <span className={cx('unpaid')}>Thanh toán khi nhận hàng</span>
                                                )}
                                            </div>

                                            <div className={cx('order-actions')}>
                                                {!order.statusOrder && !order.order && (
                                                    <button
                                                        onClick={() => handleDeleteOrder(order._id)}
                                                        className={cx('cancel-button')}
                                                    >
                                                        Hủy đơn hàng
                                                    </button>
                                                )}

                                                {order.statusOrder && !order.order && (
                                                    <button className={cx('review-button')}>Đánh giá</button>
                                                )}

                                                <button
                                                    className={cx('details-button')}
                                                    onClick={() => handleShowDetails(order)}
                                                >
                                                    {selectedOrder === order ? 'Ẩn chi tiết' : 'Chi tiết'}
                                                </button>
                                            </div>
                                        </div>

                                        {/* Chi tiết đơn hàng */}
                                        {selectedOrder === order && (
                                            <div className={cx('order-detail')}>
                                                <div className={cx('order-detail-header')}>
                                                    <div>
                                                        <strong>Mã đơn hàng:</strong> {order.idCode || order._id}
                                                    </div>
                                                    <div>
                                                        <strong>Ngày đặt:</strong> {formatDate(order.createdAt)}
                                                    </div>
                                                    <div>
                                                        <strong>Trạng thái:</strong>{' '}
                                                        {order.order ? (
                                                            <span className={cx('status', 'cancelled')}>Đã hủy</span>
                                                        ) : order.statusOrder ? (
                                                            <span className={cx('status', 'completed')}>
                                                                Đã giao hàng
                                                            </span>
                                                        ) : (
                                                            <span className={cx('status', 'processing')}>
                                                                Đang xử lý
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <strong>Thanh toán:</strong>{' '}
                                                        {order.statusPayment ? (
                                                            <span className={cx('paid')}>Đã thanh toán</span>
                                                        ) : (
                                                            <span className={cx('unpaid')}>
                                                                Thanh toán khi nhận hàng
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>

                                                <h5>Sản phẩm</h5>
                                                <table className={cx('product-table')}>
                                                    <thead>
                                                        <tr>
                                                            <th>Sản phẩm</th>
                                                            <th>Số lượng</th>
                                                            <th>Đơn giá</th>
                                                            <th>Thành tiền</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {order.products &&
                                                            Array.isArray(order.products) &&
                                                            order.products.map((product, index) => (
                                                                <tr key={index}>
                                                                    <td>{product.nameProduct}</td>
                                                                    <td>{product.quantity}</td>
                                                                    <td>{product.price?.toLocaleString()} đ</td>
                                                                    <td>
                                                                        {calculateItemTotal(
                                                                            product.price,
                                                                            product.quantity,
                                                                        ).toLocaleString()}{' '}
                                                                        đ
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                    </tbody>
                                                    <tfoot>
                                                        <tr>
                                                            <td colSpan="3" className={cx('total-label')}>
                                                                Tổng cộng
                                                            </td>
                                                            <td className={cx('total-value')}>
                                                                {order.sumPrice?.toLocaleString()} đ
                                                            </td>
                                                        </tr>
                                                    </tfoot>
                                                </table>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                )}
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default OrderHistory;
