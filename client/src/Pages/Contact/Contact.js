import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import Header from '../../Layouts/Header/Header';
import Footer from '../../Layouts/Footer/Footer';
import Banner from '../Layouts/Banner/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import request from '../../config/Connect';

const cx = classNames.bind(styles);

function Contact() {
    const [message, setMessage] = useState('');
    const [email, setEmail] = useState('');

    const handleSendMessage = async () => {
        if (!email || !message) {
            toast.error('Vui lòng nhập đầy đủ thông tin');
            return;
        }
        try {
            const res = await request.post('/api/sendmessage', { message, email });
            toast.success(res.data.message || 'Gửi thông tin thành công!');
        } catch (error) {
            toast.error('Đã xảy ra lỗi, vui lòng thử lại');
            console.log(error);
        }
    };

    return (
        <div className={cx('wrapper')}>
            <ToastContainer />
            <header>
                <Header />
            </header>

            <Banner />

            <main className={cx('inner')}>
                <div className={cx('contact-container')}>
                    <div className={cx('form-section')}>
                        <h2 className={cx('form-title')}>Liên hệ với chúng tôi</h2>
                        <p className={cx('form-subtitle')}>
                            Mọi ý kiến đóng góp của bạn sẽ giúp chúng tôi phục vụ tốt hơn.
                        </p>

                        <div className={cx('form-group')}>
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Nhập email của bạn"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className={cx('form-group')}>
                            <label htmlFor="message">Nội dung</label>
                            <textarea
                                id="message"
                                placeholder="Bạn muốn gửi điều gì đến chúng tôi?"
                                rows="5"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>

                        <button className={cx('submit-button')} onClick={handleSendMessage}>
                            Gửi thông tin
                        </button>
                    </div>

                    <div className={cx('info-section')}>
                        <h3>Thông tin liên hệ</h3>
                        <ul className={cx('info-list')}>
                            <li>
                                <FontAwesomeIcon icon={faHome} className={cx('icon')} />
                                <span>Mao Cloth, 123 Nguyễn Huệ, Q.1, TP.HCM</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faPhone} className={cx('icon')} />
                                <span>085.367.2403</span>
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} className={cx('icon')} />
                                <span>contact@gmail.com</span>
                            </li>
                        </ul>
                        <div className={cx('map-frame')}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4889260329673!2d106.70042301526025!3d10.776891992321342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3f737fd13d%3A0x808cf227d72e1c7c!2zQ8O0bmcgdHkgVE5ISCBNQU8gQ2xvdGg!5e0!3m2!1svi!2s!4v1623664322763!5m2!1svi!2s"
                                width="100%"
                                height="200"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map"
                            ></iframe>
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

export default Contact;
