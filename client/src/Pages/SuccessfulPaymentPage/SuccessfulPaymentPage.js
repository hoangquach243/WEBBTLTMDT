import React from 'react';
import classNames from 'classnames/bind';
import styles from './SuccessfulPaymentPage.module.scss';

import Header from '../../Layouts/Header/Header';
import Footer from '../../Layouts/Footer/Footer';
import request from '../../config/Connect';

import imgCheck from './img/imgCheck.png';
import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function SuccessfulPaymentPage() {
    const [orderData, setOrderData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        const token = document.cookie;
        if (token && token.includes('Token=')) {
            try {
                const tokenValue = token.split('Token=')[1].split(';')[0].trim();
                const decoded = jwtDecode(tokenValue);
                setUserInfo(decoded);
            } catch (error) {
                console.error('Lỗi khi giải mã token:', error);
                setError('Không thể xác thực thông tin người dùng');
            }
        }

        const fetchOrderData = async () => {
            try {
                setLoading(true);
                const response = await request.get('/api/successPayment');
                console.log('API response:', response.data); // Log để debug

                if (response.data && response.data.length > 0 && response.data[0][0]) {
                    setOrderData(response.data[0][0]);
                } else {
                    setError('Không tìm thấy thông tin đơn hàng');
                }
            } catch (error) {
                console.error('Lỗi khi lấy thông tin đơn hàng:', error);
                setError('Không thể lấy thông tin đơn hàng');
            } finally {
                setLoading(false);
            }
        };

        fetchOrderData();
    }, []);

    // Tính tổng giá trị đơn hàng cho một sản phẩm
    const calculateItemTotal = (price, quantity) => {
        return price * quantity;
    };

    return (
        <div className={cx('wrapper')}>
            <header>
                <Header />
            </header>

            <main className={cx('inner')}>
                <div className={cx('form-thanks-order')}>
                    <header className={cx('header')}>
                        <img src={imgCheck} alt="Đặt hàng thành công" />

                        {loading ? (
                            <h3>Đang tải thông tin đơn hàng...</h3>
                        ) : error ? (
                            <div className={cx('error-message')}>
                                <h3>Có lỗi xảy ra</h3>
                                <p>{error}</p>
                                <Link to="/" className={cx('back-home')}>
                                    Quay về trang chủ
                                </Link>
                            </div>
                        ) : (
                            <>
                                <h3>Cảm ơn bạn đã đặt hàng!</h3>
                                <p>
                                    Xin chào {userInfo?.email || 'Quý khách'}, chúng tôi xin chân thành cảm ơn vì đã tin
                                    tưởng và lựa chọn sản phẩm của chúng tôi. Đơn hàng của bạn đã được tiếp nhận và đang
                                    được xử lý. Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
                                </p>
                            </>
                        )}
                    </header>

                    {!loading && !error && orderData && (
                        <main>
                            <div>
                                <div className={cx('order-info')}>
                                    <p>
                                        Mã đơn hàng: <strong>{orderData.idCode || orderData._id}</strong>
                                    </p>
                                    <p>
                                        Ngày đặt hàng:{' '}
                                        <strong>{new Date(orderData.createdAt).toLocaleString('vi-VN')}</strong>
                                    </p>
                                </div>

                                <table className={cx('table table-hover')}>
                                    <thead>
                                        <tr>
                                            <th scope="col">Sản phẩm</th>
                                            <th scope="col">Số lượng</th>
                                            <th scope="col">Đơn giá</th>
                                            <th scope="col">Thành tiền</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {orderData.products &&
                                            orderData.products.map((item, index) => (
                                                <tr key={`${item.nameProduct}-${index}`}>
                                                    <td>{item.nameProduct}</td>
                                                    <td>{item.quantity}</td>
                                                    <td>{item.price?.toLocaleString()} đ</td>
                                                    <td>
                                                        {calculateItemTotal(item.price, item.quantity).toLocaleString()}{' '}
                                                        đ
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>

                                    <tfoot>
                                        <tr className={cx('total-row')}>
                                            <td colSpan="3">Tổng cộng</td>
                                            <td className={cx('total-price')}>
                                                {orderData.sumPrice?.toLocaleString()} đ
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan="4" className={cx('payment-status')}>
                                                Trạng thái thanh toán:{' '}
                                                {orderData.statusPayment ? (
                                                    <span className={cx('paid')}>Đã thanh toán</span>
                                                ) : (
                                                    <span className={cx('unpaid')}>Thanh toán khi nhận hàng</span>
                                                )}
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>

                                <div className={cx('actions')}>
                                    <Link to="/" className={cx('continue-shopping')}>
                                        Tiếp tục mua sắm
                                    </Link>
                                    <Link to="/order-history" className={cx('view-orders')}>
                                        Xem lịch sử đơn hàng
                                    </Link>
                                </div>
                            </div>
                        </main>
                    )}
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default SuccessfulPaymentPage;
