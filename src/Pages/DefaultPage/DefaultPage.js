import React from 'react';
import classNames from 'classnames/bind';
import styles from './DefaultPage.module.scss';
import Header from '../../Layouts/Header/Header';
import Footer from '../../Layouts/Footer/Footer';
import Banner from '../Layouts/Banner/Banner';
import SlideBar from '../Layouts/SlideBar/Slidebar';
import HomePage from '../Layouts/HomePage/HomePage';
import request from '../../config/Connect';
import { Helmet } from 'react-helmet';

import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function DefaultPage({products}) {
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "itemListElement": products?.map((product, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "url": `/prodetail/${product.id}`
        })) || []
    };

    const [valueType, setValueType] = useState('');
    const [checkPrice, setCheckPrice] = useState('0');
    const [dataProducts, setDataProducts] = useState([]);
    const [checkType2, setCheckType2] = useState('');
    const [checkType3, setCheckType3] = useState('');

    const perPage = 6;
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request.get('/api/products');
                const totalItems = response.data.length;
                const calculatedTotalPages = Math.ceil(totalItems / perPage);

                setDataProducts(response.data.filter((item) => valueType === '' || item.checkProducts === valueType));

                setTotalPages(calculatedTotalPages);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [valueType]);

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

    function checkProducts(data) {
        return data.checkProducts === valueType;
    }

    return (
        <><Helmet>
                <title>Products</title>
                <meta name="description" content="Trang sản phẩm." />
                <meta name="keywords" content="sản phẩm, products" />
            </Helmet>
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
                            dataProducts={dataProducts}
                            setCheckPrice={setCheckPrice}
                            valueType={valueType}
                            setCheckType2={setCheckType2}
                            setCheckType3={setCheckType3}
                        />
                    </div>

                    <div>
                        <HomePage
                            dataProducts={dataProducts}
                            checkProducts={checkProducts}
                            valueType={valueType}
                            totalPages={totalPages}
                            checkPrice={checkPrice}
                            checkType2={checkType2}
                            checkType3={checkType3}
                        />
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
        <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
        </>
    );
}

export default DefaultPage;
