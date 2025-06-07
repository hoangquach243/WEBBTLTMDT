import React from 'react';
import classNames from 'classnames/bind';
import styles from './ReturnPolicy.module.scss';
import Header from '../../../Layouts/Header/Header';
import Footer from '../../../Layouts/Footer/Footer';

const cx = classNames.bind(styles);

function ReturnPolicy() {
    return (
        <div className={cx('wrapper')}>
            <header>
                <Header />
            </header>
            <main className={cx('content')}>
                <div className={cx('container')}>
                    <h1 className={cx('title')}>Chính sách đổi trả và bảo hành</h1>

                    <div className={cx('section')}>
                        <h2>1. Chính sách đổi trả</h2>
                        <p>
                            Mao Cloth cam kết mang đến cho khách hàng sự hài lòng cao nhất với sản phẩm của chúng tôi.
                            Chúng tôi hiểu rằng đôi khi sản phẩm có thể không phù hợp với nhu cầu của bạn, vì vậy chúng
                            tôi đã xây dựng chính sách đổi trả linh hoạt như sau:
                        </p>

                        <h3>Điều kiện đổi trả:</h3>
                        <ul>
                            <li>Thời gian đổi trả: Trong vòng 07 ngày kể từ ngày nhận hàng</li>
                            <li>Sản phẩm còn nguyên tem, nhãn mác, thẻ bài đính kèm</li>
                            <li>Sản phẩm chưa qua sử dụng, giặt ủi, không có mùi lạ hoặc dấu hiệu đã qua sử dụng</li>
                            <li>Sản phẩm không bị hư hỏng, trầy xước do lỗi của người sử dụng</li>
                            <li>
                                Có đầy đủ hóa đơn, phiếu mua hàng hoặc có thể xác minh thông tin mua hàng từ hệ thống
                                của chúng tôi
                            </li>
                        </ul>

                        <h3>Các trường hợp được đổi trả:</h3>
                        <ul>
                            <li>Sản phẩm bị lỗi do nhà sản xuất</li>
                            <li>Sản phẩm không đúng kích cỡ, màu sắc như đã đặt</li>
                            <li>Sản phẩm không đúng mẫu mã, chất lượng như mô tả</li>
                            <li>Sản phẩm bị hư hỏng trong quá trình vận chuyển</li>
                        </ul>

                        <h3>Quy trình đổi trả:</h3>
                        <ol>
                            <li>
                                Liên hệ với bộ phận Chăm sóc khách hàng qua số hotline 1900 1234 hoặc email
                                cskh@maocloth.com
                            </li>
                            <li>Cung cấp thông tin đơn hàng, lý do đổi trả và hình ảnh sản phẩm (nếu cần)</li>
                            <li>Nhận hướng dẫn đóng gói và gửi sản phẩm về địa chỉ của chúng tôi</li>
                            <li>
                                Sau khi nhận được sản phẩm và kiểm tra, chúng tôi sẽ tiến hành đổi sản phẩm mới hoặc
                                hoàn tiền trong vòng 7 ngày làm việc
                            </li>
                        </ol>
                    </div>

                    <div className={cx('section')}>
                        <h2>2. Chính sách bảo hành</h2>
                        <p>
                            Mao Cloth cam kết về chất lượng sản phẩm và mang đến sự an tâm cho khách hàng thông qua
                            chính sách bảo hành sau:
                        </p>

                        <h3>Thời gian bảo hành:</h3>
                        <ul>
                            <li>Quần áo: 30 ngày kể từ ngày mua hàng</li>
                            <li>Giày dép: 60 ngày kể từ ngày mua hàng</li>
                            <li>Phụ kiện: 30 ngày kể từ ngày mua hàng</li>
                        </ul>

                        <h3>Phạm vi bảo hành:</h3>
                        <ul>
                            <li>Các lỗi về đường may, chỉ thừa</li>
                            <li>Các lỗi về nút, khóa kéo, khóa cài</li>
                            <li>
                                Các lỗi về màu sắc (bạc màu bất thường trong điều kiện sử dụng và bảo quản bình thường)
                            </li>
                            <li>Các lỗi về chất liệu (co rút, xù lông bất thường)</li>
                        </ul>

                        <h3>Các trường hợp không được bảo hành:</h3>
                        <ul>
                            <li>Sản phẩm đã hết thời gian bảo hành</li>
                            <li>Sản phẩm bị hư hỏng do sử dụng không đúng cách, không tuân theo hướng dẫn bảo quản</li>
                            <li>Sản phẩm bị hư hỏng do tác động bên ngoài như va đập, cháy, nước, hóa chất</li>
                            <li>Sản phẩm bị thay đổi, sửa chữa bởi người không được ủy quyền</li>
                            <li>Sản phẩm bị mài mòn tự nhiên trong quá trình sử dụng</li>
                        </ul>

                        <h3>Quy trình bảo hành:</h3>
                        <ol>
                            <li>
                                Liên hệ với bộ phận Chăm sóc khách hàng qua số hotline 1900 1234 hoặc email
                                cskh@maocloth.com
                            </li>
                            <li>Cung cấp thông tin đơn hàng, vấn đề cần bảo hành và hình ảnh sản phẩm</li>
                            <li>
                                Mang sản phẩm đến cửa hàng gần nhất hoặc gửi về địa chỉ của chúng tôi theo hướng dẫn
                            </li>
                            <li>Chúng tôi sẽ kiểm tra và thông báo kết quả bảo hành trong vòng 3-5 ngày làm việc</li>
                            <li>
                                Tùy thuộc vào tình trạng sản phẩm, chúng tôi sẽ sửa chữa, thay thế hoặc đổi sản phẩm mới
                            </li>
                        </ol>
                    </div>

                    <div className={cx('section')}>
                        <h2>3. Chi phí đổi trả và bảo hành</h2>
                        <ul>
                            <li>
                                Đối với sản phẩm lỗi do nhà sản xuất hoặc giao nhầm: Mao Cloth sẽ chịu toàn bộ chi phí
                                đổi trả và vận chuyển
                            </li>
                            <li>
                                Đối với sản phẩm không vừa size hoặc không ưng ý: Khách hàng chịu chi phí vận chuyển hai
                                chiều
                            </li>
                            <li>
                                Đối với sản phẩm trong thời gian bảo hành: Mao Cloth sẽ chịu chi phí sửa chữa, thay thế
                                linh kiện
                            </li>
                        </ul>
                    </div>

                    <div className={cx('section')}>
                        <h2>4. Lưu ý quan trọng</h2>
                        <ul>
                            <li>Chúng tôi khuyến khích khách hàng kiểm tra kỹ sản phẩm ngay khi nhận hàng</li>
                            <li>
                                Đối với các sản phẩm giảm giá trên 30%, chúng tôi chỉ áp dụng đổi size (nếu còn hàng) và
                                không áp dụng trả hàng hoàn tiền
                            </li>
                            <li>Mỗi đơn hàng chỉ được đổi trả 01 lần</li>
                            <li>
                                Chúng tôi có quyền từ chối đổi trả nếu sản phẩm không đáp ứng các điều kiện nêu trên
                            </li>
                        </ul>
                    </div>

                    <div className={cx('contact')}>
                        <p>
                            Mọi thắc mắc về chính sách đổi trả và bảo hành, vui lòng liên hệ:
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

export default ReturnPolicy;
