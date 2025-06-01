import React, { useMemo, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import Header from '../../Layouts/Header/Header';
import Footer from '../../Layouts/Footer/Footer';
import Banner from '../Layouts/Banner/Banner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CartUser() {
    const [cartItems, setCartItems] = useState([]);
    const [quantity, setQuantity] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const dataCart = localStorage.getItem('products');
        const parsedCart = JSON.parse(dataCart) || [];
        setCartItems(parsedCart);

        // Khởi tạo quantity dựa trên số lượng trong localStorage (nếu có)
        const initialQuantity = {};
        parsedCart.forEach((item) => {
            initialQuantity[item.id] = 1; // Mặc định 1 nếu không có số lượng trước đó
        });
        setQuantity(initialQuantity);
    }, []);

    const total = useMemo(() => {
        return cartItems.reduce((acc, item) => acc + item.priceNew * (quantity[item.id] || 1), 0);
    }, [cartItems, quantity]);

    const handleIncreaseQuantity = (id) => {
        setQuantity((prevQuantity) => ({
            ...prevQuantity,
            [id]: (prevQuantity[id] || 1) + 1,
        }));
    };

    const handleDecreaseQuantity = (id) => {
        if (quantity[id] > 1) {
            setQuantity((prevQuantity) => ({
                ...prevQuantity,
                [id]: prevQuantity[id] - 1,
            }));
        }
    };

    const handleDeleteProduct = (id) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
        localStorage.setItem('products', JSON.stringify(updatedCart));
        setQuantity((prev) => {
            const newQuantity = { ...prev };
            delete newQuantity[id];
            return newQuantity;
        });
        toast.success('Đã xóa sản phẩm khỏi giỏ hàng!', { icon: '🗑️' });
    };

    const handlePostCart = () => {
        if (cartItems.length <= 0) {
            toast.error('Giỏ hàng trống! Vui lòng thêm sản phẩm!');
        } else {
            setIsLoading(true);
            setTimeout(() => {
                setIsLoading(false);
                toast.success('Chuyển hướng đến trang thanh toán (mô phỏng)!');
                navigate('/checkout');
            }, 1000);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <ToastContainer />
            <header>
                <Header />
            </header>
            <div className={cx('banner')}>
                <Banner />
            </div>
            <main>
                <div className={cx('inner')}>
                    <h1 className={cx('title')}>Giỏ Hàng Của Bạn</h1>
                    {cartItems.length > 0 ? (
                        <>
                            <div className={cx('cart-table')}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sản Phẩm</th>
                                            <th scope="col">Giá</th>
                                            <th scope="col">Số Lượng</th>
                                            <th scope="col">Tổng</th>
                                            <th scope="col">Hành Động</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartItems.map((item) => (
                                            <tr key={item.id} className={cx('cart-row')}>
                                                <td className={cx('product-name')}>{item.nameProducts}</td>
                                                <td>{item?.priceNew?.toLocaleString('vi-VN')} VNĐ</td>
                                                <td>
                                                    <div className={cx('btn-value-products')}>
                                                        <button onClick={() => handleDecreaseQuantity(item.id)}>
                                                            -
                                                        </button>
                                                        <span>{quantity[item.id] || 1}</span>
                                                        <button onClick={() => handleIncreaseQuantity(item.id)}>
                                                            +
                                                        </button>
                                                    </div>
                                                </td>
                                                <td>
                                                    {(item.priceNew * (quantity[item.id] || 1)).toLocaleString('vi-VN')}{' '}
                                                    VNĐ
                                                </td>
                                                <td>
                                                    <button
                                                        onClick={() => handleDeleteProduct(item.id)}
                                                        className={cx('btn-delete')}
                                                    >
                                                        <FontAwesomeIcon icon={faTrashAlt} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    <tfoot>
                                        <tr className={cx('total-row')}>
                                            <td colSpan="3">Tổng Cộng</td>
                                            <td>{total.toLocaleString('vi-VN')} VNĐ</td>
                                            <td></td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className={cx('btn-cart')}>
                                <Link to="/category" className={cx('btn-continue-link')}>
                                    <button className={cx('btn-continue')}>Tiếp tục mua sắm</button>
                                </Link>
                                <button onClick={handlePostCart} className={cx('btn-checkout', { loading: isLoading })}>
                                    {isLoading ? <span className={cx('loader')}></span> : 'Tiến hành thanh toán'}
                                </button>
                            </div>
                        </>
                    ) : (
                        <p className={cx('empty-cart')}>
                            Giỏ hàng của bạn đang trống! <Link to="/category">Mua sắm ngay</Link>
                        </p>
                    )}
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default CartUser;
