import React from 'react';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';
import { useEffect } from 'react';

import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { addProduct } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

function HomePage({ dataProducts, checkPrice, checkType2, checkType3 }) {
    const dispatch = useDispatch();

    const handleAddProduct = (data) => {
        dispatch(addProduct(data));
        toast.success('Thêm Vào Giỏ Hàng Thành Công !!!');
    };

    useEffect(() => {
    document.title = 'Products';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = "Trang sản phẩm";
}, []);

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Apex Fashion",
        "url": "https://apex-fashion.vn",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://apex-fashion.vn/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    return (
        <>
        <Helmet>
                <title>Products</title>
                <meta name="description" content="Trang sản phẩm" />
                <meta name="keywords" content="thời trang, nước hoa, mỹ phẩm, phụ kiện, mua sắm" />
        </Helmet>
        <div className={cx('wrapper')}>
            <ToastContainer />
            <div className={cx('inner')}>
                {dataProducts
                    .filter((item) => checkType2 === '' || item.checkType === checkType2)
                    .filter((item) => checkType3 === '' || item.checkType === checkType3)
                    .sort(checkPrice === '1' ? (a, b) => b.priceNew - a.priceNew : (a, b) => a.priceNew - b.priceNew)
                    .map((item) => (
                        <div key={item.id} className={cx('form-slide-products')}>
                            <div className={cx('social-icon')}>
                                <button onClick={() => handleAddProduct(item)}>
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </button>
                            </div>
                            <Link style={{ textDecoration: 'none' }} key={item.id} to={`/prodetail/${item.id}`}>
                                <img
                                    src={`${item.img}`}
                                    alt=""
                                    style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                                />
                            </Link>
                            <div className={cx('main-slide-products')}>
                                <h1>{item.nameProducts}</h1>
                                <div className={cx('price-slide-products')}>
                                    <span id={cx('price-new')}>{item.priceNew.toLocaleString()} VNĐ</span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
        <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </>
    );
}

export default HomePage;
