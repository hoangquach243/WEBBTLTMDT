import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTiktok, faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
    faEnvelope,
    faLocationDot,
    faPhone,
    faClock,
    faShieldHalved,
    faTruck,
    faFileLines,
    faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

import BCTLogo from './img/bct.png';
import SSLLogo from './img/ssl.png';
import PaymentLogo from './img/payment.png';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('footer-content')}>
                    {/* Thông tin pháp lý */}
                    <div className={cx('footer-column')}>
                        <h3 className={cx('footer-title')}>Mao Cloth</h3>
                        <ul className={cx('footer-info')}>
                            <li>Công ty TNHH Thời Trang Mao Cloth</li>
                            <li>Mã số thuế: 0123456789</li>
                            <li>Số ĐKKD: 0123456789 do Sở KH&ĐT TP.HCM cấp ngày 01/01/2023</li>
                            <li>Đã thông báo với Bộ Công Thương</li>
                        </ul>
                        <div className={cx('footer-certificates')}>
                            <img src={BCTLogo} alt="Bộ Công Thương" />
                            <img src={SSLLogo} alt="SSL Certificate" />
                        </div>
                    </div>

                    {/* Thông tin liên hệ */}
                    <div className={cx('footer-column')}>
                        <h3 className={cx('footer-title')}>Thông tin liên hệ</h3>
                        <ul className={cx('footer-contact')}>
                            <li>
                                <FontAwesomeIcon icon={faPhone} />
                                <span>Hotline: 1900 1234 (8:00 - 21:00)</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <span>Email: cskh@maocloth.com</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faLocationDot} />
                                <span>227 Nguyễn Văn Cừ, Phường 4, Quận 5, TP.HCM</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faClock} />
                                <span>Giờ làm việc: 8:00 - 21:00 (Tất cả các ngày)</span>
                            </li>
                        </ul>
                    </div>

                    {/* Chính sách quan trọng */}
                    <div className={cx('footer-column')}>
                        <h3 className={cx('footer-title')}>Chính sách</h3>
                        <ul className={cx('footer-links')}>
                            <li>
                                <FontAwesomeIcon icon={faShieldHalved} />
                                <Link to="/chinh-sach-doi-tra">Chính sách đổi trả và bảo hành</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faTruck} />
                                <Link to="/chinh-sach-van-chuyen">Chính sách vận chuyển</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faFileLines} />
                                <Link to="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faFileLines} />
                                <Link to="/dieu-khoan-su-dung">Điều khoản sử dụng</Link>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCircleQuestion} />
                                <Link to="/huong-dan-mua-hang">Hướng dẫn mua hàng</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Liên kết hữu ích */}
                    <div className={cx('footer-column')}>
                        <h3 className={cx('footer-title')}>Liên kết hữu ích</h3>
                        <ul className={cx('footer-links')}>
                            <li>
                                <Link to="/sitemap">Sơ đồ trang web</Link>
                            </li>
                            <li>
                                <Link to="/blog">Blog thời trang</Link>
                            </li>
                            <li>
                                <Link to="/huong-dan-chon-size">Hướng dẫn chọn size</Link>
                            </li>
                            <li>
                                <Link to="/faq">Câu hỏi thường gặp</Link>
                            </li>
                        </ul>

                        <h3 className={cx('footer-title', 'social-title')}>Kết nối với chúng tôi</h3>
                        <div className={cx('footer-social')}>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTiktok} />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={cx('footer-bottom')}>
                    <div className={cx('payment-methods')}>
                        <p>Phương thức thanh toán</p>
                        <img src={PaymentLogo} alt="Phương thức thanh toán" />
                    </div>
                    <div className={cx('copyright')}>
                        <p>&copy; {new Date().getFullYear()} Mao Cloth. Tất cả các quyền được bảo lưu.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
