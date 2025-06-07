import React from 'react';
import classNames from 'classnames/bind';
import styles from './CategoriesArea.module.scss';

import services1 from './img/services1.png';
import services2 from './img/services2.png';
import services3 from './img/services3.png';
import services4 from './img/services4.png';

const cx = classNames.bind(styles);

function CategoriesArea() {
    const services = [
        {
            img: services1,
            en: {
                title: 'Fast & Free Delivery',
                desc: 'Free delivery on all orders over $50',
            },
            vi: {
                title: 'Giao hàng nhanh & miễn phí',
                desc: 'Miễn phí giao hàng cho tất cả đơn hàng trên 1.000.000đ',
            },
        },
        {
            img: services2,
            en: {
                title: 'Secure Payment',
                desc: 'Multiple secure payment methods',
            },
            vi: {
                title: 'Thanh toán an toàn',
                desc: 'Nhiều phương thức thanh toán an toàn',
            },
        },
        {
            img: services3,
            en: {
                title: 'Money Back Guarantee',
                desc: '30-day money back guarantee',
            },
            vi: {
                title: 'Đảm bảo hoàn tiền',
                desc: 'Đảm bảo hoàn tiền trong 30 ngày',
            },
        },
        {
            img: services4,
            en: {
                title: 'Online Support',
                desc: '24/7 customer support',
            },
            vi: {
                title: 'Hỗ trợ trực tuyến',
                desc: 'Hỗ trợ khách hàng 24/7',
            },
        },
    ];

    return (
        <div className={cx('wrapper')}>
            {services.map((service, index) => (
                <div className={cx('row-1')} key={index}>
                    <img src={service.img} alt={service.en.title} />
                    <div className={cx('title-container')}>
                        <h5 className={cx('en-title')}>{service.en.title}</h5>
                        <h5 className={cx('vi-title')}>{service.vi.title}</h5>
                    </div>
                    <div className={cx('desc-container')}>
                        <p className={cx('en-desc')}>{service.en.desc}</p>
                        <p className={cx('vi-desc')}>{service.vi.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default CategoriesArea;
