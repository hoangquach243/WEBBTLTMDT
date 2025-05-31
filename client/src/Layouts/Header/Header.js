import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Logo from './img/logo2.png';
import request from '../../config/Connect';
import { Link } from 'react-router-dom';
import useDebounce from '../../customHook/useDebounce';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faBars, faCartShopping, faSearch, faXmark, faAngleDown } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    const token = document.cookie;

    const [showMenu, setShowMenu] = useState(false);
    const [dataSearch, setDataSearch] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [activeMenu, setActiveMenu] = useState('/');
    const [showSearch, setShowSearch] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const debounce = useDebounce(searchValue, 500);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleShowSearch = () => {
        setShowSearch(!showSearch);
    };

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

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Set active menu based on current path
        setActiveMenu(window.location.pathname);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={cx('wrapper', { scrolled })}>
            <div className={cx('header-container')}>
                <div className={cx('mobile-toggle')} onClick={handleShowMenu}>
                    <FontAwesomeIcon icon={showMenu ? faXmark : faBars} />
                </div>

                <Link to="/" className={cx('logo')}>
                    <img src={Logo} alt="Mao Cloth Logo" />
                    <h1>Mao Cloth</h1>
                </Link>

                <nav className={cx('navigation', { 'show-menu': showMenu })}>
                    <ul>
                        <li className={cx({ active: activeMenu === '/' })}>
                            <Link to="/">Trang Chủ</Link>
                        </li>
                        <li className={cx({ active: activeMenu === '/category' })}>
                            <Link to="/category">Sản Phẩm</Link>
                            <FontAwesomeIcon icon={faAngleDown} className={cx('dropdown-icon')} />
                            <div className={cx('dropdown-menu')}>
                                <Link to="/category?type=men">Nam</Link>
                                <Link to="/category?type=women">Nữ</Link>
                                <Link to="/category?type=accessories">Phụ kiện</Link>
                            </div>
                        </li>
                        <li className={cx({ active: activeMenu === '/aboutus' })}>
                            <Link to="/aboutus">Giới Thiệu</Link>
                        </li>
                        <li className={cx({ active: activeMenu === '/contact' })}>
                            <Link to="/contact">Liên Hệ</Link>
                        </li>
                    </ul>
                </nav>

                <div className={cx('header-actions')}>
                    <div className={cx('search-container')}>
                        <button className={cx('action-btn')} onClick={handleShowSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                        </button>

                        <div className={cx('search-panel', { active: showSearch })}>
                            <div className={cx('search-input')}>
                                <input
                                    type="text"
                                    placeholder="Tìm kiếm sản phẩm..."
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                />
                                <button>
                                    <FontAwesomeIcon icon={faSearch} />
                                </button>
                                <button className={cx('close-search')} onClick={handleShowSearch}>
                                    <FontAwesomeIcon icon={faXmark} />
                                </button>
                            </div>

                            {dataSearch.length > 0 && searchValue && (
                                <div className={cx('search-results')}>
                                    {dataSearch.map((item) => (
                                        <Link
                                            to={`/prodetail/${item?.id}`}
                                            key={item?._id}
                                            className={cx('search-item')}
                                        >
                                            <div className={cx('search-item-image')}>
                                                <img
                                                    src={`http://localhost:5001/${item?.img}`}
                                                    alt={item?.nameProducts}
                                                />
                                            </div>
                                            <div className={cx('search-item-info')}>
                                                <h5>{item?.nameProducts}</h5>
                                                <span>{item?.priceNew?.toLocaleString()} đ</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    <Link to="/wishlist" className={cx('action-btn')}>
                        <FontAwesomeIcon icon={faHeart} />
                    </Link>

                    <Link to="/cart" className={cx('action-btn', 'cart-btn')}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <span className={cx('cart-count')}>0</span>
                    </Link>

                    {token ? (
                        <Link to="/info" className={cx('action-btn')}>
                            <FontAwesomeIcon icon={faUser} />
                        </Link>
                    ) : (
                        <div className={cx('auth-buttons')}>
                            <Link to="/login" className={cx('login-btn')}>
                                Đăng Nhập
                            </Link>
                            <Link to="/register" className={cx('register-btn')}>
                                Đăng Ký
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Header;
