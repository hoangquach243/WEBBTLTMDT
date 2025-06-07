import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Categories.module.scss';
import CategoryCard from '../CategoryCard/CategoryCard';
import request from '../../config/Connect';

const cx = classNames.bind(styles);

function Categories() {
    const [categories, setCategories] = useState([]);
    const [productTypes, setProductTypes] = useState({});
    const [loading, setLoading] = useState(true);
    const [showTypes, setShowTypes] = useState(false);

    // Hình ảnh cho từng danh mục - sử dụng hình ảnh từ server
    const categoryImages = {
        fashionMen: '1749265090997.webp', // Áo thun nam
        fashionWomen: '1749269537292.webp', // Áo sơ mi nữ
        nuocHoa: 'https://via.placeholder.com/300x200?text=Nước+Hoa',
        nenThom: 'https://via.placeholder.com/300x200?text=Nến+Thơm',
        son: 'https://via.placeholder.com/300x200?text=Son',
        giay: '1749279853259.webp', // Giày nữ
        shirt: '1749278101736.webp', // Quần jeans
        trousers: '1749265090997.webp', // Áo thun
        dress: '1749279256044.webp', // Váy bò
    };

    // Tên hiển thị cho từng danh mục
    const getCategoryDisplayName = (categoryCode) => {
        const categoryMap = {
            nuocHoa: 'Nước Hoa',
            nenThom: 'Nến Thơm',
            son: 'Son',
            fashionMen: 'Thời Trang Nam',
            fashionWomen: 'Thời Trang Nữ',
            giay: 'Giày',
            shirt: 'Quần',
            trousers: 'Áo',
            dress: 'Váy',
        };

        return categoryMap[categoryCode] || categoryCode;
    };

    // Lấy danh sách danh mục từ API
    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            try {
                const response = await request.get('/api/categories');
                setCategories(response.data);

                // Lấy loại sản phẩm cho mỗi danh mục
                const typesObj = {};
                for (const category of response.data) {
                    try {
                        const typesResponse = await request.get('/api/product-types', {
                            params: { category },
                        });
                        if (typesResponse.data && typesResponse.data.length > 0) {
                            typesObj[category] = typesResponse.data;
                        }
                    } catch (error) {
                        console.error(`Lỗi khi lấy loại sản phẩm cho ${category}:`, error);
                    }
                }
                setProductTypes(typesObj);
            } catch (error) {
                console.error('Lỗi khi lấy danh mục:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    if (loading) {
        return <div className={cx('loading')}>Đang tải danh mục...</div>;
    }

    const toggleShowTypes = () => {
        setShowTypes(!showTypes);
    };

    return (
        <div className={cx('categories-container')}>
            <div className={cx('header-section')}>
                <h2 className={cx('section-title')}>Danh Mục Sản Phẩm</h2>
                <button className={cx('toggle-button')} onClick={toggleShowTypes}>
                    {showTypes ? 'Hiển thị danh mục' : 'Hiển thị loại sản phẩm'}
                </button>
            </div>

            {!showTypes ? (
                // Hiển thị danh mục
                <div className={cx('categories-grid')}>
                    {categories.map((category) => (
                        <CategoryCard
                            key={category}
                            category={category}
                            image={
                                categoryImages[category]?.startsWith('http')
                                    ? categoryImages[category]
                                    : `http://localhost:5001/${
                                          categoryImages[category] ||
                                          'https://via.placeholder.com/300x200?text=Danh+mục'
                                      }`
                            }
                            displayName={getCategoryDisplayName(category)}
                        />
                    ))}
                </div>
            ) : (
                // Hiển thị loại sản phẩm
                <div>
                    {Object.keys(productTypes).map((category) => (
                        <div key={category} className={cx('category-types')}>
                            <h3 className={cx('category-title')}>{getCategoryDisplayName(category)}</h3>
                            <div className={cx('types-grid')}>
                                {productTypes[category].map((type) => (
                                    <CategoryCard
                                        key={`${category}-${type}`}
                                        category={category}
                                        type={type}
                                        image={
                                            categoryImages[type]?.startsWith('http')
                                                ? categoryImages[type]
                                                : `http://localhost:5001/${
                                                      categoryImages[type] ||
                                                      'https://via.placeholder.com/300x200?text=Loại+sản+phẩm'
                                                  }`
                                        }
                                        displayName={getCategoryDisplayName(type)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Categories;
