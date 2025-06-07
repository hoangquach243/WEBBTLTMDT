import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Slidebar.module.scss';
import request from '../../../config/Connect';

const cx = classNames.bind(styles);

function SlideBar({ setValueType, setCheckPrice, valueType, setCheckType2 }) {
    const [categories, setCategories] = useState([]);
    const [productTypes, setProductTypes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedType, setSelectedType] = useState('');

    // Danh mục sản phẩm mẫu - chỉ giữ lại thời trang nam và thời trang nữ
    const sampleCategories = ['fashionMen', 'fashionWomen'];

    // Loại sản phẩm mẫu theo danh mục
    const sampleProductTypes = {
        fashionMen: ['trousers', 'shirt', 'giay'],
        fashionWomen: ['trousers', 'shirt', 'dress', 'giay'],
    };

    // Lấy danh sách danh mục sản phẩm
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await request.get('/api/categories');
                if (response.data && response.data.length > 0) {
                    // Lọc chỉ giữ lại thời trang nam và thời trang nữ
                    const filteredCategories = response.data.filter(
                        (category) => category === 'fashionMen' || category === 'fashionWomen',
                    );
                    setCategories(filteredCategories);
                } else {
                    // Sử dụng dữ liệu mẫu nếu API không trả về dữ liệu
                    setCategories(sampleCategories);
                }
            } catch (error) {
                console.error('Lỗi khi lấy danh mục:', error);
                // Sử dụng dữ liệu mẫu nếu API gặp lỗi
                setCategories(sampleCategories);
            }
        };

        fetchCategories();
    }, []);

    // Lấy danh sách loại sản phẩm khi chọn danh mục
    useEffect(() => {
        const fetchProductTypes = async () => {
            if (valueType) {
                setLoading(true);
                try {
                    const response = await request.get('/api/product-types', {
                        params: { category: valueType },
                    });
                    if (response.data && response.data.length > 0) {
                        setProductTypes(response.data);
                    } else {
                        // Sử dụng dữ liệu mẫu nếu API không trả về dữ liệu
                        setProductTypes(sampleProductTypes[valueType] || []);
                    }
                } catch (error) {
                    console.error('Lỗi khi lấy loại sản phẩm:', error);
                    // Sử dụng dữ liệu mẫu nếu API gặp lỗi
                    setProductTypes(sampleProductTypes[valueType] || []);
                } finally {
                    setLoading(false);
                }
            } else {
                setProductTypes([]);
            }
        };

        fetchProductTypes();
    }, [valueType]);

    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setValueType(newCategory);
        setSelectedType('');
        setCheckType2('');
    };

    const handleTypeChange = (e) => {
        const newType = e.target.value;
        setSelectedType(newType);
        setCheckType2(newType);
    };

    // Hàm chuyển đổi tên danh mục thành tên hiển thị
    const getCategoryDisplayName = (categoryCode) => {
        const categoryMap = {
            fashionMen: 'Thời Trang Nam',
            fashionWomen: 'Thời Trang Nữ',
            shirt: 'Quần',
            trousers: 'Áo',
            dress: 'Váy',
            giay: 'Giày',
        };

        return categoryMap[categoryCode] || categoryCode;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('select-option')}>
                <div>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={handleCategoryChange}
                        value={valueType}
                    >
                        <option value="">Lọc Theo Danh Mục</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {getCategoryDisplayName(category)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {productTypes.length > 0 && (
                <div className={cx('select-option')}>
                    <div>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            onChange={handleTypeChange}
                            value={selectedType}
                            disabled={loading}
                        >
                            <option value="">Lọc Theo Loại Sản Phẩm</option>
                            {productTypes.map((type) => (
                                <option key={type} value={type}>
                                    {getCategoryDisplayName(type)}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            )}

            <div className={cx('select-option')}>
                <div>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => setCheckPrice(e.target.value)}
                    >
                        <option value="">Lọc Theo Giá</option>
                        <option value="1">Giá từ cao đến thấp</option>
                        <option value="2">Giá từ thấp đến cao</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default SlideBar;
