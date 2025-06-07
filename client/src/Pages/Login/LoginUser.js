import React from 'react';
import classNames from 'classnames/bind';
import styles from './LoginUser.module.scss';
import Header from '../../Layouts/Header/Header';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import request from '../../config/Connect';
import { toast, ToastContainer } from 'react-toastify';

import { jwtDecode } from 'jwt-decode';

const cx = classNames.bind(styles);

function LoginUser() {
    const [email, setEmail] = useState(''); // Tạo state để lưu email
    const [password, setPassword] = useState(''); // Tạo state để lưu password
    const navigate = useNavigate(); // Tạo state để lưu password

    // Hàm để lấy giá trị token từ cookie
    const getTokenFromCookie = () => {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'Token') {
                return value;
            }
        }
        return null;
    };

    const handleLoginUser = async () => {
        // Hàm xử lý đăng nhập
        var pattern = /[A-Z]/; // Kiểm tra xem chuỗi có chứa ký tự viết hoa hay không
        const test = pattern.test(email);
        if (email === '' || password === '' || test === true) {
            // Kiểm tra xem email, password
            toast.error('Vui Lòng Xem Lại Thông Tin !!!'); // Hàm toast.error hiển thị thông báo lỗi
        } else {
            try {
                // Thực hiện đăng nhập
                const res = await request.post('/api/login', {
                    // Gửi yêu cầu đăng nhập đến server
                    email, // Gửi email và password để đăng nhập
                    password,
                });

                // Đợi một chút để đảm bảo cookie đã được thiết lập
                setTimeout(() => {
                    const token = getTokenFromCookie();

                    if (token) {
                        try {
                            const decoded = jwtDecode(token);
                            if (decoded.admin === true) {
                                navigate('/admin');
                            } else if (decoded.employee === true) {
                                navigate('/admin');
                            } else {
                                navigate('/');
                            }
                        } catch (error) {
                            console.error('Lỗi giải mã token:', error);
                            toast.error('Đăng nhập thành công nhưng có lỗi xử lý. Vui lòng thử lại.');
                        }
                    } else {
                        console.error('Không tìm thấy token sau khi đăng nhập');
                        navigate('/');
                    }
                }, 300);
            } catch (error) {
                // Nếu đăng nhập thất bại
                toast.error(error.response?.data?.message || 'Đăng nhập thất bại. Vui lòng thử lại.'); // Hiển thị thông báo lỗi
            }
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
                        <span>Login</span>
                        <p>Enter Login details to get access</p>
                    </div>
                    <div className={cx('input-box')}>
                        <div className={cx('form-input')}>
                            <label>Username or Email Address</label>
                            <input placeholder="Username / Email address" onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className={cx('form-input')}>
                            <label>Password</label>
                            <input
                                placeholder="Enter Password"
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className={cx('single-input-fields')}>
                            <div>
                                <input type="checkbox" />
                                <label>Keep me logged in</label>
                            </div>

                            <div>
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </div>
                        </div>
                    </div>
                    <div className={cx('login-footer')}>
                        <p>
                            Don't have an account?{' '}
                            <Link id={cx('link')} to="/register">
                                Sign Up
                            </Link>{' '}
                            here
                        </p>
                        <button onClick={handleLoginUser}>Login</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LoginUser;
