import React from 'react';
import classNames from 'classnames/bind';
import styles from './ProductDetail.module.scss';

import Header from '../../Layouts/Header/Header';
import Footer from '../../Layouts/Footer/Footer';

import request from '../../config/Connect'; // Giữ nguyên import request của bạn

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../redux/actions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = classNames.bind(styles);

// Dữ liệu sản phẩm mẫu đã bị xóa hoàn toàn.
// const mockProduct = {
//     _id: '1',
//     nameProducts: 'Sản phẩm mẫu siêu hot 2024',
//     author: 'Thương hiệu ABC',
//     priceNew: 199000,
//     quantityPro: 10,
//     des: 'Đây là mô tả chi tiết của sản phẩm mẫu. Sản phẩm có chất lượng vượt trội, thiết kế hiện đại, và được sản xuất từ những vật liệu cao cấp nhất, mang lại trải nghiệm tuyệt vời cho người dùng. Phù hợp với mọi đối tượng và nhu cầu sử dụng hàng ngày.',
//     img: 'https://images.unsplash.com/photo-1542291026-7eec264c67f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// };

function ProductDetail() {
    // Khởi tạo dataProducts là undefined để thể hiện rằng dữ liệu chưa được tải
    const [dataProducts, setDataProducts] = useState();
    // Khởi tạo dataComments là một mảng rỗng
    const [dataComments, setDataComments] = useState([]);
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [value, setValue] = useState(0); // value vẫn dùng cho average rating
    const [dataOrder, setDataOrder] = useState([]); // Giữ nguyên state này nếu bạn cần dùng sau này
    const dispatch = useDispatch();

    const idProduct = window.location.pathname.slice(11, 999);
    const token = document.cookie;

    const handleAddProduct = () => {
        // Kiểm tra dataProducts trước khi thêm vào giỏ hàng
        if (!dataProducts || Object.keys(dataProducts).length === 0) {
            toast.error('Không tìm thấy thông tin sản phẩm để thêm vào giỏ hàng.', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            return;
        }
        dispatch(addProduct(dataProducts));
        toast.success('Thêm Vào Giỏ Hàng Thành Công !!!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    useEffect(() => {
        // Fetch comments data
        request
            .get('/api/comment', { params: { id: idProduct } })
            .then((res) => {
                setDataComments(res.data);
            })
            .catch((error) => {
                console.error('Error fetching comments:', error);
                // Xử lý lỗi nếu cần: ví dụ, setDataComments([]) nếu không có dữ liệu
            });
    }, [idProduct]); // idProduct là dependency vì comments phụ thuộc vào nó

    useEffect(() => {
        // Fetch product data
        request
            .get(`/api/getproduct`, {
                params: { id: idProduct },
            })
            .then((res) => {
                setDataProducts(res.data);
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
                setDataProducts(null); // Đặt null để báo hiệu không tìm thấy sản phẩm
                // Xử lý lỗi nếu cần: ví dụ, hiển thị thông báo lỗi hoặc chuyển hướng
            });
    }, [idProduct]); // idProduct là dependency vì sản phẩm phụ thuộc vào nó

    useEffect(() => {
        if (!token) {
            // Không làm gì nếu không có token
            return;
        }
        // Fetch order data
        request
            .get('/api/dataorder')
            .then((res) => {
                setDataOrder(res.data);
            })
            .catch((error) => {
                console.error('Error fetching order data:', error);
                // Xử lý lỗi nếu cần
            });
    }, [token]); // token là dependency vì dữ liệu order phụ thuộc vào nó

    useEffect(() => {
        if (dataComments.length > 0) {
            const sumRating = dataComments.map((item) => item.rating).reduce((a, b) => a + b, 0);
            const avgRating = sumRating / dataComments.length;
            setValue(avgRating);
        } else {
            setValue(0); // Đặt lại về 0 nếu không có bình luận
        }
    }, [dataComments]);

    const handlePostComments = async (e) => {
        if (!token) {
            toast.error('Vui Lòng Đăng Nhập Để Sử Dụng Tính Năng !!!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
            return;
        }
        if (e.keyCode === 13) {
            if (comment.trim() === '') {
                // Thêm kiểm tra comment không rỗng
                toast.error('Vui lòng nhập nội dung bình luận !!!', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
                return;
            }
            if (rating === 0) {
                toast.error('Vui lòng chọn số sao muốn đánh giá !!!', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
                return;
            }

            try {
                const res = await request.post('/api/postcomment', {
                    comment,
                    idProduct,
                    rating,
                });
                if (res.data) {
                    // Cập nhật lại comments sau khi post thành công bằng cách fetch lại
                    request
                        .get('/api/comment', { params: { id: idProduct } })
                        .then((resFetch) => setDataComments(resFetch.data)); // Đổi tên biến để tránh trùng lặp
                    setComment('');
                    setRating(0);
                    toast.success('Bình luận của bạn đã được thêm!', {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                } else {
                    toast.error('Gửi bình luận thất bại!', {
                        position: 'top-right',
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                }
            } catch (error) {
                console.error('Error posting comment:', error);
                toast.error('Có lỗi xảy ra khi gửi bình luận.', {
                    position: 'top-right',
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            }
        }
    };

    // Kiểm tra nếu dataProducts là null (lỗi fetch) hoặc undefined (chưa fetch xong)
    if (dataProducts === null) {
        return (
            <div className={cx('wrapper')}>
                <Header />
                <main className={cx('form-detail')}>
                    <div
                        className={cx('inner-detail')}
                        style={{ textAlign: 'center', padding: '50px', fontSize: '20px', color: 'red' }}
                    >
                        Sản phẩm không tồn tại hoặc đã xảy ra lỗi khi tải dữ liệu.
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (dataProducts === undefined) {
        // Hoặc có thể hiển thị một spinner loading
        return (
            <div className={cx('wrapper')}>
                <Header />
                <main className={cx('form-detail')}>
                    <div
                        className={cx('inner-detail')}
                        style={{ textAlign: 'center', padding: '50px', fontSize: '20px' }}
                    >
                        Đang tải thông tin sản phẩm...
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className={cx('wrapper')}>
            <ToastContainer />
            <header>
                <Header />
            </header>

            <main className={cx('form-detail')}>
                <div className={cx('inner-detail')}>
                    {/* Đổi <header> thành <div> để tránh lỗi HTML semantics, vì nó không phải là header của trang */}
                    <div className={cx('form-info-product')}>
                        <div className={cx('img-product')}>
                            {/* Đảm bảo dataProducts?.img tồn tại trước khi render */}
                            {dataProducts.img ? (
                                <img
                                    src={`http://localhost:5000/${dataProducts.img}`}
                                    alt={dataProducts.nameProducts || 'Sản phẩm'}
                                />
                            ) : (
                                <img src="https://via.placeholder.com/400x400?text=No+Image" alt="No Image" /> // Placeholder khi không có ảnh
                            )}
                        </div>

                        <div className={cx('features-caption')}>
                            <h3 style={{ color: '#000' }}>{dataProducts.nameProducts}</h3>
                            <div>
                                {value > 0 ? (
                                    <span
                                        style={{
                                            color: '#000',
                                            fontSize: '25px',
                                        }}
                                    >
                                        {value.toFixed(1)}
                                    </span>
                                ) : (
                                    <></>
                                )}
                                <FontAwesomeIcon icon={faStar} color="orange" style={{ fontSize: '25px' }} />
                            </div>
                            <p style={{ color: '#000' }}>{dataProducts.author}</p>
                            <span style={{ color: '#000' }}>
                                {dataProducts.priceNew ? dataProducts.priceNew.toLocaleString() + ' VNĐ' : 'N/A'}
                            </span>
                            <h6 style={{ color: '#000' }}>
                                {dataProducts.quantityPro > 0
                                    ? `Còn hàng : số lượng ${dataProducts.quantityPro}`
                                    : 'Hết hàng'}
                            </h6>

                            <div className={cx('btn-add-product')}>
                                {dataProducts.quantityPro > 0 ? (
                                    <button onClick={handleAddProduct}>Thêm Vào Giỏ Hàng</button>
                                ) : (
                                    <button disabled className={cx('disabled-btn')}>
                                        Hết Hàng
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('main-detail-product')}>
                    <div className={cx('header-des')}>
                        {/* Sử dụng class cx() cho nav-one và btn-active riêng biệt */}
                        <button className={cx('nav-one', 'btn-active')}>Mô Tả Sản Phẩm</button>
                    </div>

                    <div className={cx('text-des')}>
                        <p>{dataProducts.des}</p>
                    </div>
                    <div className={cx('start')}>
                        {[...Array(5)].map((star, index) => {
                            const ratingValue = index + 1;

                            return (
                                <label key={index}>
                                    <input
                                        style={{ display: 'none' }}
                                        type="radio"
                                        name="rating"
                                        value={ratingValue}
                                        onClick={() => setRating(ratingValue)}
                                    />
                                    <svg
                                        className={cx('star-icon')} // Đổi class "star" thành "star-icon" để tránh xung đột với class chung của section
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill={ratingValue <= (hover || rating) ? 'gold' : 'none'} // Fill màu cho sao được chọn/hover
                                        stroke={ratingValue <= (hover || rating) ? 'gold' : 'grey'}
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        onMouseEnter={() => setHover(ratingValue)}
                                        onMouseLeave={() => setHover(0)}
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                </label>
                            );
                        })}
                    </div>

                    <div>
                        <div className={cx('input-comment')}>
                            <img
                                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                                alt="User Avatar" // Thêm alt text
                            />
                            <input
                                placeholder="Viết Bình Luận..."
                                onChange={(e) => setComment(e.target.value)}
                                onKeyDown={handlePostComments}
                                value={comment}
                            />
                        </div>

                        <div className={cx('comments-user')}>
                            {dataComments.length > 0 ? ( // Kiểm tra dataComments có dữ liệu
                                dataComments.map((item, index) => (
                                    <div className={cx('form-comment')} key={index}>
                                        <img
                                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                                            alt="Commenter Avatar" // Thêm alt text
                                        />
                                        <div>
                                            <span>@{item.username}</span>
                                            <p>{item.comments}</p>
                                            <div className={cx('comment-rating')}>
                                                {' '}
                                                {/* Thêm div bọc rating của comment */}
                                                {[...Array(item.rating)].map((_, i) => (
                                                    <FontAwesomeIcon key={i} icon={faStar} color="gold" size="sm" />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p>Chưa có bình luận nào. Hãy là người đầu tiên!</p> // Hiển thị thông báo khi không có bình luận
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default ProductDetail;
