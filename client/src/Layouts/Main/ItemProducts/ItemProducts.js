import React from 'react';
import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ItemProducts.module.scss';

import img1 from './img/items1.jpg';
import img2 from './img/items2.jpg';
import img3 from './img/items3.jpg';
import img4 from './img/items4.jpeg';

const cx = classNames.bind(styles);

const defaultProducts = [
    { img: img1, name: 'Son' },
    { img: img2, name: 'Giày' },
    { img: img3, name: 'Nến Thơm' },
    { img: img4, name: 'Nước Hoa' },
];

const VISIBLE_COUNT = 4;

function ItemProducts({ dataProducts }) {
    const isDynamic = Array.isArray(dataProducts) && dataProducts.length > 0;

    const productsToShow = isDynamic
        ? dataProducts.map((item) => ({
              _id: item._id,
              img: `http://localhost:5000/${item.img}`,
              name: item.nameProducts,
          }))
        : defaultProducts.map((item, index) => ({
              _id: index,
              img: item.img,
              name: item.name,
          }));

    const [currentIndex, setCurrentIndex] = useState(0);
    const totalPages = Math.ceil(productsToShow.length / VISIBLE_COUNT) || 1;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1 < totalPages ? prev + 1 : 0));
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : totalPages - 1));
    };
    let val = 100;
    if (productsToShow.length > 4) {
        val = 80;
    } else {
        val = 100;
    }
    return (
        <div className={cx('wrapper')}>
            <button className={cx('arrow', 'left')} onClick={handlePrev}>
                &#8592;
            </button>

            <div className={cx('slider')}>
                <div
                    className={cx('slider-inner')}
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                        width: `${(val / VISIBLE_COUNT) * productsToShow.length}%`,
                    }}
                >
                    {productsToShow.map((product) => (
                        <div key={product._id} className={cx('row-product')}>
                            <img id={cx('img-item')} src={product.img} alt={product.name} />
                            <span>{product.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <button className={cx('arrow', 'right')} onClick={handleNext}>
                &#8594;
            </button>
        </div>
    );
}

export default ItemProducts;
