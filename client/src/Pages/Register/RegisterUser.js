import React from 'react';
import classNames from 'classnames/bind';
import styles from './RegisterUser.module.scss';

import request from '../../config/Connect';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Header from '../../Layouts/Header/Header';

const cx = classNames.bind(styles);

function RegisterUser() {
    const navigate = useNavigate();
    const [fullname, setFullname] = useState(''); // Tạo state để lưu fullname
    const [email, setEmail] = useState(''); // Tạo state để lưu email
    const [phone, setPhone] = useState(''); // Tạo state để lưu phone
    const [password, setPassword] = useState(''); // Tạo state để lưu password
    const [confirmPassword, setConfirmPassword] = useState(''); // Tạo state để lưu confirmPassword
    const [loading, setLoading] = useState(false); // Trạng thái loading

    const handleRegister = async () => {
        // Hàm xử lý đăng ký
        if (loading) return; // Nếu đang loading thì không thực hiện

        try {
            setLoading(true); // Bắt đầu loading

            // Thực hiện đăng ký
            var pattern = /@/;
            const checkEmail = pattern.test(email);

            const phoneRegex = /^[0-9]{10}$/;
            const checkPhone = phoneRegex.test(phone);

            if (fullname === '' || email === '' || password === '' || confirmPassword === '') {
                // Kiểm tra xem fullname, email, password, confirmPassword
                toast.error('Vui Lòng Xem Lại Thông Tin !!!'); // Hàm toast.error hiển thị thông báo lỗi
            } else if (!checkEmail || !checkPhone) {
                // Kiểm tra xem email
                toast.error('Email Hoặc Số Điện Thoại Không Đúng Định Dạng !!!'); // Hàm toast.error hiển thị thông báo lỗi
            } else if (password !== confirmPassword) {
                // Kiểm tra xem password, confirmPassword
                toast.error('Mật Khẩu Không Trùng Khớp !!!'); // Hàm toast.error hiển thị thông báo lỗi
            } else {
                // Nếu đăng ký thành công
                const res = await request.post('/api/register', {
                    // Thực hiện đăng ký
                    fullname,
                    email,
                    password,
                    confirmPassword,
                    phone,
                }); // Gửi yêu cầu đăng ký đến server
                toast.success(res.data.message); // Hiển thị thông báo thành công

                // Chuyển hướng đến trang đăng nhập sau 2 giây
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }
        } catch (error) {
            // Nếu đăng ký thất bại
            console.error('Đăng ký thất bại:', error);
            toast.error(error.response?.data?.message || 'Đăng ký thất bại. Vui lòng thử lại.'); // Hiển thị thông báo lỗi
        } finally {
            setLoading(false); // Kết thúc loading
        }
    };

    // Xử lý sự kiện nhấn phím Enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleRegister();
        }
    };

    return (
        <>
            <ToastContainer />
            <header>
                <Header />
            </header>
            <div className={cx('wrapper')}>
                <div className={cx('inner')}>
                    <div className={cx('header-form-login')}>
                        <span>Sign Up</span>
                        <p>Create your account to get full access</p>
                    </div>
                    <div className={cx('input-box')}>
                        <div className={cx('form-input')}>
                            <label>Full Name</label>
                            <input
                                placeholder="Enter Full Name"
                                onChange={(e) => setFullname(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </div>

                        <div className={cx('form-input')}>
                            <label>Email Address</label>
                            <input
                                placeholder="Enter Email Address"
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </div>

                        <div className={cx('form-input')}>
                            <label>Phone</label>
                            <input
                                placeholder="Enter Phone"
                                onChange={(e) => setPhone(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </div>

                        <div className={cx('form-input')}>
                            <label>Password</label>

                            <input
                                placeholder="Enter Password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </div>

                        <div className={cx('form-input')}>
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                    </div>
                    <div className={cx('login-footer')}>
                        <p>
                            Already have an account?{' '}
                            <Link id={cx('link')} to="/login">
                                Login
                            </Link>{' '}
                            here
                        </p>
                        <button onClick={handleRegister} disabled={loading} className={cx(loading ? 'loading' : '')}>
                            {loading ? 'Đang xử lý...' : 'Sign Up'}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegisterUser;
