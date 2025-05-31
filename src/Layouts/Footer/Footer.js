import React from 'react';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <main className={cx('form-list-footer')}>
                    <div className={cx('column-footer')}>
                        <h4>Shop Men</h4>
                        <ul>
                            <li>Clothing Fashion</li>
                            <li>Winter</li>
                            <li>Sumer</li>
                            <li>Formal</li>
                            <li>Casual</li>
                        </ul>
                    </div>
                    <div className={cx('column-footer')}>
                        <h4>Shop Women</h4>
                        <ul>
                            <li>Clothing Fashion</li>
                            <li>Winter</li>
                            <li>Sumer</li>
                            <li>Formal</li>
                            <li>Casual</li>
                        </ul>
                    </div>
                    <div className={cx('column-footer')}>
                        <h4>Other Collection</h4>
                        <ul>
                            <li>Nước hoa</li>
                            <li>Nến thơm</li>
                            <li>Son</li>
                        </ul>
                    </div>

                    <div className={cx('column-footer')}>
                        <h4>Quick Links</h4>
                        <ul>
                            <li>Facebook</li>
                            <li>Instagram</li>
                            <li>X</li>
                            <li>Zalo</li>
                        </ul>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Footer;
