import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './CategoryCard.module.scss';

const cx = classNames.bind(styles);

function CategoryCard({ category, image, displayName, type }) {
    // Tạo URL với tham số phù hợp
    const createUrl = () => {
        if (type) {
            return `/category?category=${category}&type=${type}`;
        }
        return `/category?category=${category}`;
    };

    return (
        <Link to={createUrl()} className={cx('category-card')}>
            <div className={cx('image-container')}>
                <img src={image} alt={displayName} />
            </div>
            <h3 className={cx('category-name')}>{displayName}</h3>
        </Link>
    );
}

export default CategoryCard;
