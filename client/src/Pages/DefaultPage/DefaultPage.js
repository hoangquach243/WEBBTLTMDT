import React from 'react';
import classNames from 'classnames/bind';
import styles from './DefaultPage.module.scss';
import Header from '../../Layouts/Header/Header';
import Footer from '../../Layouts/Footer/Footer';
import Banner from '../Layouts/Banner/Banner';
import SlideBar from '../Layouts/SlideBar/Slidebar';
import HomePage from '../Layouts/HomePage/HomePage';
import request from '../../config/Connect';

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const cx = classNames.bind(styles);

function DefaultPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [valueType, setValueType] = useState(queryParams.get('category') || '');
    const [checkType2, setCheckType2] = useState(queryParams.get('type') || '');
    const [checkPrice, setCheckPrice] = useState('');
    const [dataProducts, setDataProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const perPage = 6;

    // Cập nhật URL khi các tham số lọc thay đổi
    useEffect(() => {
        const params = new URLSearchParams();
        if (valueType) params.set('category', valueType);
        if (checkType2) params.set('type', checkType2);

        const newUrl = `${window.location.pathname}${params.toString() ? `?${params.toString()}` : ''}`;
        window.history.replaceState({}, '', newUrl);
    }, [valueType, checkType2]);

    // Fetch sản phẩm khi các tham số lọc thay đổi
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                console.log('Fetching products with params:', {
                    category: valueType,
                    type: checkType2,
                    priceSort: checkPrice,
                });
                const response = await request.get('/api/products', {
                    params: {
                        category: valueType,
                        type: checkType2,
                        priceSort: checkPrice,
                    },
                });

                setDataProducts(response.data);
                const totalItems = response.data.length;
                const calculatedTotalPages = Math.ceil(totalItems / perPage);
                setTotalPages(calculatedTotalPages);
            } catch (error) {
                console.error('Error fetching data:', error);
                // Trong trường hợp lỗi, hiển thị mảng rỗng
                setDataProducts([]);
                setTotalPages(0);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [valueType, checkType2, checkPrice]);

    return (
        <div className={cx('wrapper')}>
            <header>
                <Header />
            </header>

            <div className={cx('banner')}>
                <Banner />
            </div>

            <main className={cx('main-category')}>
                <div className={cx('container')}>
                    <div>
                        <SlideBar
                            setValueType={setValueType}
                            setCheckPrice={setCheckPrice}
                            valueType={valueType}
                            setCheckType2={setCheckType2}
                        />
                    </div>

                    <div>
                        {loading ? (
                            <div className={cx('loading')}>Đang tải sản phẩm...</div>
                        ) : (
                            <HomePage
                                dataProducts={dataProducts}
                                totalPages={totalPages}
                                checkPrice={checkPrice}
                                checkType2={checkType2}
                            />
                        )}
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default DefaultPage;
