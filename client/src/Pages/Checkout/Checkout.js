import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Checkout.module.scss';
import Header from '../../Layouts/Header/Header';
import Footer from '../../Layouts/Footer/Footer';
import Banner from '../Layouts/Banner/Banner';
import request from '../../config/Connect';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Layouts/Loading/Loading';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone, faEnvelope, faMapMarkerAlt, faCity } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Checkout() {
    const [dataCart, setDataCart] = useState({});
    const [checkBox, setCheckBox] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [country, setCountry] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');

    const navigate = useNavigate();

    const dataAddress = { firstName, lastName, phoneNumber, email, country, addressLine1, city };

    useEffect(() => {
        request
            .get('/api/getcart')
            .then((res) => {
                if (res.data && res.data.length > 0) {
                    setDataCart(res.data[0]);
                } else {
                    setDataCart({});
                }
            })
            .catch(() => toast.error('Không thể tải giỏ hàng!'));
    }, []);

    const handlePaymentMomo = async () => {
        const pattern = /@/;
        const checkEmail = pattern.test(email);
        const phoneRegex = /^[0-9]{10}$/;
        const checkPhone = phoneRegex.test(phoneNumber);

        if (
            !checkBox ||
            !firstName ||
            !lastName ||
            !phoneNumber ||
            !email ||
            !country ||
            !addressLine1 ||
            !city ||
            !zip
        ) {
            toast.error('Vui lòng điền đầy đủ thông tin và chấp nhận điều khoản!');
        } else if (!checkEmail || !checkPhone) {
            toast.error('Email hoặc số điện thoại không đúng định dạng!');
        } else if (!dataCart?.products?.length) {
            toast.error('Giỏ hàng trống! Vui lòng quay lại trang mua hàng!');
        } else {
            try {
                setIsLoading(true);
                const res = await request.post('/api/paymentmomo', { dataAddress });
                setIsLoading(false);
                toast.success(res.data.message);
                window.open(res.data);
                navigate('/thanks');
            } catch (error) {
                setIsLoading(false);
                toast.error(error.response?.data?.message || 'Có lỗi xảy ra khi thanh toán!');
            }
        }
    };

    const handlePayment = async () => {
        const pattern = /@/;
        const checkEmail = pattern.test(email);
        const phoneRegex = /^[0-9]{10}$/;
        const checkPhone = phoneRegex.test(phoneNumber);

        if (
            !checkBox ||
            !firstName ||
            !lastName ||
            !phoneNumber ||
            !email ||
            !country ||
            !addressLine1 ||
            !city ||
            !zip
        ) {
            toast.error('Vui lòng điền đầy đủ thông tin và chấp nhận điều khoản!');
        } else if (!checkEmail || !checkPhone) {
            toast.error('Email hoặc số điện thoại không đúng định dạng!');
        } else if (!dataCart?.products?.length) {
            toast.error('Giỏ hàng trống! Vui lòng quay lại trang mua hàng!');
        } else {
            try {
                setIsLoading(true);
                const res = await request.post('/api/payment', { dataAddress });
                setIsLoading(false);
                toast.success('Đặt hàng thành công!');
                navigate('/thanks');
            } catch (error) {
                setIsLoading(false);
                toast.error(error.response?.data?.message || 'Có lỗi xảy ra khi thanh toán!');
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <ToastContainer />
            <header>
                <Header />
            </header>
            <Loading isLoading={isLoading} />
            <div className={cx('banner')}>
                <Banner />
            </div>
            <main className={cx('inner')}>
                <div className={cx('inner-checkout')}>
                    <div className={cx('column-billing')}>
                        <h1 id={cx('title-billing')}>Thông Tin Thanh Toán</h1>
                        <div className={cx('input-name')}>
                            <div className={cx('input-group')}>
                                <label>
                                    <FontAwesomeIcon icon={faUser} className={cx('input-icon')} />
                                    Tên
                                </label>
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    placeholder="Tên của bạn"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className={cx('input-group')}>
                                <label>
                                    <FontAwesomeIcon icon={faUser} className={cx('input-icon')} />
                                    Họ
                                </label>
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    placeholder="Họ của bạn"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={cx('input-name')}>
                            <div className={cx('input-group')}>
                                <label>
                                    <FontAwesomeIcon icon={faPhone} className={cx('input-icon')} />
                                    Số điện thoại
                                </label>
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    placeholder="Số điện thoại"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </div>
                            <div className={cx('input-group')}>
                                <label>
                                    <FontAwesomeIcon icon={faEnvelope} className={cx('input-icon')} />
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className={cx('form-control')}
                                    placeholder="Email của bạn"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className={cx('input-group')}>
                            <label>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className={cx('input-icon')} />
                                Tỉnh/Thành phố
                            </label>
                            <input
                                type="text"
                                className={cx('form-control')}
                                placeholder="Tỉnh/Thành phố"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </div>
                        <div className={cx('input-group')}>
                            <label>
                                <FontAwesomeIcon icon={faMapMarkerAlt} className={cx('input-icon')} />
                                Địa chỉ nhận hàng
                            </label>
                            <input
                                type="text"
                                className={cx('form-control')}
                                placeholder="Địa chỉ nhận hàng"
                                value={addressLine1}
                                onChange={(e) => setAddressLine1(e.target.value)}
                            />
                        </div>
                        <div className={cx('input-name')}>
                            <div className={cx('input-group')}>
                                <label>
                                    <FontAwesomeIcon icon={faCity} className={cx('input-icon')} />
                                    Quận/Huyện
                                </label>
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    placeholder="Quận/Huyện"
                                    value={city}
                                    onChange={(e) => setCity(e.target.value)}
                                />
                            </div>
                            <div className={cx('input-group')}>
                                <label>
                                    <FontAwesomeIcon icon={faCity} className={cx('input-icon')} />
                                    Xã/Phường
                                </label>
                                <input
                                    type="text"
                                    className={cx('form-control')}
                                    placeholder="Xã/Phường/Thị trấn"
                                    value={zip}
                                    onChange={(e) => setZip(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={cx('form-order')}>
                        <div className={cx('inner-order')}>
                            <h1 id={cx('title-order')}>Đơn Hàng Của Bạn</h1>
                            {dataCart?.products?.length > 0 ? (
                                <div className={cx('order-table')}>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Sản Phẩm</th>
                                                <th scope="col">Số Lượng</th>
                                                <th scope="col">Tổng</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataCart.products.map((item) => (
                                                <tr key={item?._id}>
                                                    <td>{item?.nameProduct}</td>
                                                    <td>x {item?.quantity}</td>
                                                    <td>{item.price?.toLocaleString('vi-VN')} VNĐ</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr className={cx('total-row')}>
                                                <td colSpan="2">Tổng Cộng</td>
                                                <td>{dataCart?.sumPrice?.toLocaleString('vi-VN')} VNĐ</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            ) : (
                                <p className={cx('empty-cart')}>Giỏ hàng của bạn đang trống!</p>
                            )}
                            <div className={cx('form-pay')}>
                                <div className={cx('checkbox-terms')}>
                                    <input
                                        type="checkbox"
                                        checked={checkBox}
                                        onChange={(e) => setCheckBox(e.target.checked)}
                                    />
                                    <label>
                                        Tôi đồng ý với <Link to="/terms">điều khoản dịch vụ</Link>
                                    </label>
                                </div>
                                <div className={cx('payment-momo')}>
                                    <button onClick={handlePaymentMomo}>
                                        <img
                                            src="https://cdn.haitrieu.com/wp-content/uploads/2022/10/Icon-VNPAY-QR.png"
                                            alt="VNPAY Icon"
                                        />
                                        <span>Thanh Toán Qua VNPAY</span>
                                    </button>
                                </div>
                                <div className={cx('continue')}>
                                    <button onClick={handlePayment}>
                                        <span>Thanh Toán Khi Nhận Hàng</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Checkout;
