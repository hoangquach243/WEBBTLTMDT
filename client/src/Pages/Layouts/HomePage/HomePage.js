import React from 'react';
import classNames from 'classnames/bind';
import styles from './HomePage.module.scss';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { addProduct } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

function HomePage({ dataProducts }) {
    const dispatch = useDispatch();

    const handleAddProduct = (data) => {
        dispatch(addProduct(data));
        toast.success('Thêm Vào Giỏ Hàng Thành Công !!!');
    };

    // Hàm xử lý đường dẫn hình ảnh
    const getImageUrl = (imgPath) => {
        if (!imgPath) return '';

        // Nếu là URL đầy đủ hoặc đã có tiền tố http
        if (imgPath.startsWith('http')) {
            return imgPath;
        }

        // Nếu là đường dẫn tương đối
        return `http://localhost:5001/${imgPath}`;
    };

    return (
        <div className={cx('wrapper')}>
            <ToastContainer />
            {dataProducts.length === 0 ? (
                <div className={cx('no-products')}>Không tìm thấy sản phẩm nào phù hợp</div>
            ) : (
                <div className={cx('inner')}>
                    {dataProducts.map((item) => (
                        <div key={item.id} className={cx('form-slide-products')}>
                            <div className={cx('social-icon')}>
                                <button onClick={() => handleAddProduct(item)}>
                                    <FontAwesomeIcon icon={faCartPlus} />
                                </button>
                            </div>
                            <Link className={cx('product-image-link')} key={item.id} to={`/prodetail/${item.id}`}>
                                <img
                                    src={getImageUrl(item.img)}
                                    alt={item.nameProducts}
                                    className={cx('product-image')}
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
            )}
        </div>
    );
}

export default HomePage;
