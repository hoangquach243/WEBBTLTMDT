import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import Slide from './Slide/Slide';
import ItemProducts from './ItemProducts/ItemProducts';
import SlideProducts from './SlideProducts/SlideProducts';
import Testimonial from './Testimonial/Testimonial';
import CategoriesArea from './CategoriesArea/CategoriesArea';
import ChatBot from '../../ultils/ChatBot/ChatBot';
import { useEffect, useState } from 'react';
import request from '../../config/Connect';
const cx = classNames.bind(styles);
function Main() {
    const [dataProducts, setDataProducts] = useState([]);
    const [valueType, setValueType] = useState('');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await request.get('/api/products');
                setDataProducts(response.data.filter((item) => valueType === '' || item.checkProducts === valueType));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [valueType]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('slide')}>
                <Slide />
            </div>

            <div className={cx('item-products')}>
                <ItemProducts dataProducts={dataProducts} />
            </div>

            <div>
                <ChatBot />
            </div>

            <div>
                <SlideProducts />
            </div>

            <div>
                <Testimonial />
            </div>

            <div className={cx('categories-area')}>
                <CategoriesArea />
            </div>
        </div>
    );
}

export default Main;
