import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from './img/logo2.png';
import request from '../../config/Connect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCartPlus, faSearch, faSignOutAlt, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useDebounce from '../../customHook/useDebounce';

const cx = classNames.bind(styles);

function Header() {
    const navigate = useNavigate();
    const userMenuRef = useRef(null);
    const [showUserMenu, setShowUserMenu] = useState(false);

    // Hàm để kiểm tra token có tồn tại không
    const checkToken = () => {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [name, value] = cookie.trim().split('=');
            if (name === 'Token' && value) {
                return true;
            }
        }
        return false;
    };

    const token = checkToken();
    const [showMenu, setShowMenu] = useState(false);
    const [dataSearch, setDataSearch] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [checkHeader, setCheckHeader] = useState(5);
    const [userData, setUserData] = useState(null);

    const debounce = useDebounce(searchValue, 500);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleShowUserMenu = () => {
        setShowUserMenu(!showUserMenu);
    };

    const handleLogout = async () => {
        try {
            await request.get('/api/logout');
            window.location.reload();
        } catch (error) {
            console.error('Lỗi đăng xuất:', error);
        }
    };

    // Xử lý đóng menu khi click ra ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
                setShowUserMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Lấy thông tin người dùng nếu đã đăng nhập
    useEffect(() => {
        if (token) {
            request
                .get('/api/auth')
                .then((res) => {
                    setUserData(res.data);
                })
                .catch((err) => {
                    console.error('Error fetching user data:', err);
                });
        }
    }, [token]);

    useEffect(() => {
        try {
            if (searchValue === '') {
                return;
            }
            request.get('/api/search', { params: { nameProduct: debounce } }).then((res) => setDataSearch(res.data));
        } catch (error) {
            console.log(error);
        }
    }, [debounce]);

    return (
        <div className={cx('wrapper')}>
            <Link style={{ textDecoration: 'none' }} to="/">
                <div className={cx('logo')}>
                    <img src={Logo} alt="" />
                    <h1>Mao Cloth</h1>
                </div>
            </Link>

            <div className={cx('')}>
                <div className={cx('input-search')}>
                    <input onChange={(e) => setSearchValue(e.target.value)} />
                    <FontAwesomeIcon icon={faSearch} style={{ paddingRight: '15px' }} />
                </div>
                <div className={cx('search-result')}>
                    {dataSearch.length > 0 && searchValue ? (
                        <div className={cx('result')}>
                            {dataSearch.map((item) => (
                                <Link to={`/prodetail/${item?.id}`} key={item?._id} id={cx('test')}>
                                    <div className={cx('form-result')}>
                                        <img id={cx('img-result')} src={`http://localhost:5001/${item?.img}`} alt="" />
                                        <h5>{item?.nameProducts}</h5>
                                        <span>{item?.priceNew?.toLocaleString()} đ</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
            </div>

            <div onClick={handleShowMenu} id={cx('btn-menu')}>
                <span>Menu</span>
                <FontAwesomeIcon icon={faBars} />
            </div>

            <div className={cx('controller')}>
                <ul>
                    <Link
                        style={{ textDecoration: 'none', color: '#333' }}
                        to="/category"
                        onClick={() => setCheckHeader(0)}
                    >
                        <li className={cx(checkHeader === 0 ? 'checkHeader' : '')}>Sản Phẩm</li>
                    </Link>

                    <Link
                        style={{ textDecoration: 'none', color: '#333' }}
                        to="/Aboutus"
                        onClick={() => setCheckHeader(1)}
                    >
                        <li className={cx(checkHeader === 1 ? 'checkHeader' : '')}>Thông tin </li>
                    </Link>
                    <Link
                        style={{ textDecoration: 'none', color: '#333' }}
                        to="/contact"
                        onClick={() => setCheckHeader(2)}
                    >
                        <li className={cx(checkHeader === 2 ? 'checkHeader' : '')}>Liên Hệ</li>
                    </Link>

                    {token ? (
                        <>
                            <Link to="/cart" style={{ textDecoration: 'none', color: '#333' }}>
                                <li className={cx('cart-item')}>
                                    <FontAwesomeIcon icon={faCartPlus} />
                                    <span className={cx('cart-text')}>Giỏ hàng</span>
                                </li>
                            </Link>
                            <li className={cx('user-item')} ref={userMenuRef}>
                                <div className={cx('user-button')} onClick={handleShowUserMenu}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>

                                {showUserMenu && (
                                    <div className={cx('user-dropdown')}>
                                        {userData && (
                                            <div className={cx('user-info')}>
                                                <p className={cx('user-name')}>Xin chào, {userData.fullname}</p>
                                                <p className={cx('user-email')}>{userData.email}</p>
                                            </div>
                                        )}
                                        <div className={cx('user-links')}>
                                            <Link to="/info" className={cx('user-link')}>
                                                <FontAwesomeIcon icon={faUser} />
                                                <span>Thông tin tài khoản</span>
                                            </Link>
                                            <Link to="/order-history" className={cx('user-link')}>
                                                <FontAwesomeIcon icon={faClipboardList} />
                                                <span>Lịch sử đơn hàng</span>
                                            </Link>
                                            <button onClick={handleLogout} className={cx('user-link', 'logout-btn')}>
                                                <FontAwesomeIcon icon={faSignOutAlt} />
                                                <span>Đăng xuất</span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </li>
                        </>
                    ) : (
                        <>
                            <Link style={{ textDecoration: 'none', color: '#333' }} to="/login">
                                <li>Đăng Nhập</li>
                            </Link>
                            <Link style={{ textDecoration: 'none', color: '#333' }} to="/register">
                                <li>Đăng Ký</li>
                            </Link>
                        </>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Header;
