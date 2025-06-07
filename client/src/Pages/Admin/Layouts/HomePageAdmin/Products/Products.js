import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Products.module.scss';
import { ModalAddProduct, ModalDeleteProduct, ModalEditProduct } from '../../../Modal/Modal';
import request from '../../../../../config/Connect';

const cx = classNames.bind(styles);

function Products({
    dataProducts,
    show,
    setShow,
    handleShowModalAddProduct,
    showModalDelete,
    setShowModalDelete,
    handleShowModalDeleteProduct,
    idProduct,
    handleShowModalEditProduct,
    showModalEdit,
    setShowModalEdit,
    setValueType,
    valueType,
}) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    // Lấy danh sách các danh mục sản phẩm từ database
    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            try {
                const response = await request.get('/api/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Lỗi khi lấy danh mục:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    // Hàm chuyển đổi tên danh mục thành tên hiển thị
    const getCategoryDisplayName = (categoryCode) => {
        const categoryMap = {
            nuocHoa: 'Nước Hoa',
            nenThom: 'Nến Thơm',
            giay: 'Giày',
            son: 'Son',
            fashionMen: 'Thời Trang Nam',
            fashionWomen: 'Thời Trang Nữ',
            áo: 'Áo',
            quần: 'Quần',
            váy: 'Váy',
        };

        return categoryMap[categoryCode] || categoryCode;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-product')}>
                <h1>Sản Phẩm</h1>
                <button onClick={handleShowModalAddProduct} type="button" className="btn btn-primary">
                    Thêm Sản Phẩm
                </button>
            </div>
            <div>
                <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => setValueType(e.target.value)}
                    value={valueType}
                    disabled={loading}
                >
                    <option value="">Lọc Sản Phẩm</option>
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {getCategoryDisplayName(category)}
                        </option>
                    ))}
                </select>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th style={{ color: '#fff' }} scope="col">
                            ID
                        </th>
                        <th style={{ color: '#fff' }} scope="col">
                            Tên Sản Phẩm
                        </th>
                        <th style={{ color: '#fff' }} scope="col">
                            Ảnh Sản Phẩm
                        </th>
                        <th style={{ color: '#fff' }} scope="col">
                            Giá
                        </th>
                        <th style={{ color: '#fff' }} scope="col">
                            Danh mục
                        </th>
                        <th style={{ color: '#fff' }} scope="col">
                            Hành Động
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {dataProducts
                        .filter((item) => valueType === '' || item.checkProducts === valueType)
                        .map((item) => (
                            <tr key={item._id}>
                                <th style={{ color: '#fff' }} scope="row">
                                    {item.id}
                                </th>
                                <td style={{ color: '#fff' }}>{item.nameProducts}</td>
                                <td style={{ color: '#fff' }}>
                                    <img style={{ width: '120px' }} src={`http://localhost:5001/${item.img}`} alt="." />
                                </td>
                                <td style={{ color: '#fff' }}>$ {item.priceNew.toLocaleString()}</td>
                                <td style={{ color: '#fff' }}>{getCategoryDisplayName(item.checkProducts)}</td>
                                <td style={{ color: '#fff' }}>
                                    <button
                                        onClick={() => handleShowModalEditProduct(item.id)}
                                        type="button"
                                        className="btn btn-warning"
                                    >
                                        Sửa Sản Phẩm
                                    </button>
                                    <button
                                        onClick={() => handleShowModalDeleteProduct(item.id)}
                                        type="button"
                                        className="btn btn-danger"
                                        style={{ marginLeft: '10px' }}
                                    >
                                        Xóa Sản Phẩm
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
            <ModalAddProduct show={show} setShow={setShow} />
            <ModalDeleteProduct
                showModalDelete={showModalDelete}
                setShowModalDelete={setShowModalDelete}
                idProduct={idProduct}
            />
            <ModalEditProduct showModalEdit={showModalEdit} setShowModalEdit={setShowModalEdit} idProduct={idProduct} />
        </div>
    );
}

export default Products;
