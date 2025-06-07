import React from 'react';
import classNames from 'classnames/bind';
import styles from './PurchaseGuide.module.scss';
import Header from '../../../Layouts/Header/Header';
import Footer from '../../../Layouts/Footer/Footer';

const cx = classNames.bind(styles);

function PurchaseGuide() {
    return (
        <div className={cx('wrapper')}>
            <header>
                <Header />
            </header>
            <main className={cx('content')}>
                <div className={cx('container')}>
                    <h1 className={cx('title')}>Hướng dẫn mua hàng</h1>

                    <div className={cx('section')}>
                        <h2>1. Tạo tài khoản</h2>
                        <p>
                            Để có trải nghiệm mua sắm tốt nhất tại Mao Cloth, chúng tôi khuyến khích bạn tạo tài khoản
                            trước khi mua hàng. Việc này giúp bạn theo dõi đơn hàng, lưu địa chỉ giao hàng và nhận được
                            các ưu đãi đặc biệt.
                        </p>
                        <h3>Cách tạo tài khoản:</h3>
                        <ol>
                            <li>Truy cập website Mao Cloth</li>
                            <li>Nhấp vào nút "Đăng ký" ở góc trên bên phải màn hình</li>
                            <li>Điền đầy đủ thông tin cá nhân theo yêu cầu</li>
                            <li>Nhập mật khẩu và xác nhận mật khẩu</li>
                            <li>Nhấp vào nút "Đăng ký" để hoàn tất</li>
                        </ol>
                        <p>
                            Sau khi đăng ký thành công, bạn sẽ nhận được email xác nhận. Vui lòng xác nhận email để kích
                            hoạt tài khoản.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>2. Tìm kiếm sản phẩm</h2>
                        <p>Mao Cloth cung cấp nhiều cách để bạn tìm kiếm sản phẩm phù hợp:</p>
                        <h3>2.1. Tìm kiếm trực tiếp:</h3>
                        <ul>
                            <li>Sử dụng thanh tìm kiếm ở phía trên website</li>
                            <li>Nhập từ khóa liên quan đến sản phẩm bạn muốn tìm</li>
                            <li>Nhấn Enter hoặc nhấp vào biểu tượng kính lúp</li>
                        </ul>

                        <h3>2.2. Duyệt theo danh mục:</h3>
                        <ul>
                            <li>Truy cập menu "Sản phẩm" trên thanh điều hướng</li>
                            <li>Chọn danh mục sản phẩm bạn quan tâm (Nam, Nữ, Phụ kiện...)</li>
                            <li>Duyệt qua các sản phẩm được hiển thị</li>
                        </ul>

                        <h3>2.3. Lọc sản phẩm:</h3>
                        <p>Sau khi chọn danh mục, bạn có thể lọc sản phẩm theo:</p>
                        <ul>
                            <li>Giá (từ thấp đến cao hoặc từ cao đến thấp)</li>
                            <li>Kích cỡ</li>
                            <li>Màu sắc</li>
                            <li>Thương hiệu</li>
                            <li>Mức độ phổ biến</li>
                        </ul>
                    </div>

                    <div className={cx('section')}>
                        <h2>3. Xem thông tin sản phẩm</h2>
                        <p>Khi bạn tìm thấy sản phẩm quan tâm, nhấp vào sản phẩm để xem thông tin chi tiết:</p>
                        <ul>
                            <li>Hình ảnh sản phẩm từ nhiều góc độ</li>
                            <li>Mô tả chi tiết về sản phẩm</li>
                            <li>Thông tin về chất liệu, kích thước</li>
                            <li>Giá sản phẩm</li>
                            <li>Các tùy chọn về màu sắc, kích cỡ</li>
                            <li>Đánh giá từ khách hàng khác</li>
                        </ul>

                        <h3>Bảng kích cỡ:</h3>
                        <p>
                            Chúng tôi cung cấp bảng kích cỡ chi tiết cho từng loại sản phẩm. Vui lòng tham khảo bảng
                            kích cỡ trước khi mua để chọn được size phù hợp nhất.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>4. Thêm sản phẩm vào giỏ hàng</h2>
                        <p>Sau khi xem thông tin sản phẩm và quyết định mua:</p>
                        <ol>
                            <li>Chọn màu sắc, kích cỡ phù hợp</li>
                            <li>Chọn số lượng sản phẩm</li>
                            <li>Nhấp vào nút "Thêm vào giỏ hàng"</li>
                        </ol>
                        <p>
                            Sản phẩm sẽ được thêm vào giỏ hàng của bạn. Bạn có thể tiếp tục mua sắm hoặc tiến hành thanh
                            toán.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>5. Quản lý giỏ hàng</h2>
                        <p>Để xem và quản lý giỏ hàng của bạn:</p>
                        <ol>
                            <li>Nhấp vào biểu tượng giỏ hàng ở góc trên bên phải màn hình</li>
                            <li>Xem lại các sản phẩm trong giỏ hàng</li>
                            <li>Điều chỉnh số lượng sản phẩm nếu cần</li>
                            <li>Xóa sản phẩm khỏi giỏ hàng nếu muốn</li>
                        </ol>
                        <p>Tại đây, bạn cũng có thể nhập mã giảm giá (nếu có) và xem tổng giá trị đơn hàng.</p>
                    </div>

                    <div className={cx('section')}>
                        <h2>6. Tiến hành thanh toán</h2>
                        <p>Khi bạn đã sẵn sàng mua hàng:</p>
                        <ol>
                            <li>Nhấp vào nút "Tiến hành thanh toán" trong trang giỏ hàng</li>
                            <li>Nếu bạn chưa đăng nhập, hãy đăng nhập hoặc tiếp tục với tư cách khách</li>
                            <li>Điền thông tin giao hàng (tên, địa chỉ, số điện thoại)</li>
                            <li>Chọn phương thức vận chuyển</li>
                            <li>Chọn phương thức thanh toán</li>
                            <li>Xem lại đơn hàng của bạn</li>
                            <li>Nhấp vào nút "Đặt hàng" để hoàn tất</li>
                        </ol>
                    </div>

                    <div className={cx('section')}>
                        <h2>7. Phương thức thanh toán</h2>
                        <p>Mao Cloth chấp nhận nhiều phương thức thanh toán khác nhau:</p>
                        <h3>7.1. Thanh toán khi nhận hàng (COD):</h3>
                        <p>Bạn thanh toán bằng tiền mặt cho nhân viên giao hàng khi nhận sản phẩm.</p>

                        <h3>7.2. Chuyển khoản ngân hàng:</h3>
                        <p>
                            Bạn có thể chuyển khoản trước vào tài khoản ngân hàng của chúng tôi. Thông tin tài khoản sẽ
                            được cung cấp sau khi bạn đặt hàng.
                        </p>

                        <h3>7.3. Thanh toán trực tuyến:</h3>
                        <ul>
                            <li>Thẻ tín dụng/ghi nợ (Visa, MasterCard, JCB)</li>
                            <li>Ví điện tử (MoMo, ZaloPay, VNPay)</li>
                            <li>QR Code</li>
                        </ul>
                    </div>

                    <div className={cx('section')}>
                        <h2>8. Theo dõi đơn hàng</h2>
                        <p>Sau khi đặt hàng thành công:</p>
                        <ol>
                            <li>Bạn sẽ nhận được email xác nhận đơn hàng</li>
                            <li>Đơn hàng của bạn sẽ được xử lý trong vòng 24 giờ làm việc</li>
                            <li>
                                Khi đơn hàng được giao cho đơn vị vận chuyển, bạn sẽ nhận được email thông báo kèm theo
                                mã vận đơn
                            </li>
                            <li>
                                Bạn có thể theo dõi trạng thái đơn hàng bằng cách:
                                <ul>
                                    <li>Đăng nhập vào tài khoản và xem mục "Đơn hàng của tôi"</li>
                                    <li>Sử dụng mã vận đơn để theo dõi trên website của đơn vị vận chuyển</li>
                                    <li>Liên hệ với bộ phận Chăm sóc khách hàng của chúng tôi</li>
                                </ul>
                            </li>
                        </ol>
                    </div>

                    <div className={cx('section')}>
                        <h2>9. Mẹo mua sắm hiệu quả</h2>
                        <ul>
                            <li>Đăng ký nhận thông báo về chương trình khuyến mãi và sản phẩm mới</li>
                            <li>Theo dõi fanpage của Mao Cloth để cập nhật các chương trình ưu đãi</li>
                            <li>Đọc kỹ mô tả sản phẩm và bảng kích cỡ trước khi mua</li>
                            <li>Tham khảo đánh giá từ khách hàng khác</li>
                            <li>Liên hệ với bộ phận Chăm sóc khách hàng nếu bạn có bất kỳ thắc mắc nào</li>
                        </ul>
                    </div>

                    <div className={cx('contact')}>
                        <p>
                            Nếu bạn cần hỗ trợ thêm về cách mua hàng, vui lòng liên hệ:
                            <br />
                            Hotline: 1900 1234 (8:00 - 21:00)
                            <br />
                            Email: cskh@maocloth.com
                        </p>
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default PurchaseGuide;
