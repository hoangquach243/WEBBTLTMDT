import React from 'react';
import classNames from 'classnames/bind';
import styles from './ShippingPolicy.module.scss';
import Header from '../../../Layouts/Header/Header';
import Footer from '../../../Layouts/Footer/Footer';

const cx = classNames.bind(styles);

function ShippingPolicy() {
    return (
        <div className={cx('wrapper')}>
            <header>
                <Header />
            </header>
            <main className={cx('content')}>
                <div className={cx('container')}>
                    <h1 className={cx('title')}>Chính sách vận chuyển</h1>

                    <div className={cx('section')}>
                        <h2>1. Phạm vi áp dụng</h2>
                        <p>
                            Chính sách vận chuyển này áp dụng cho tất cả các đơn hàng được đặt trực tiếp trên website
                            chính thức của Mao Cloth hoặc qua các kênh bán hàng chính thức của chúng tôi.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>2. Thời gian xử lý đơn hàng</h2>
                        <ul>
                            <li>Đơn hàng sẽ được xử lý trong vòng 24 giờ làm việc kể từ khi đơn hàng được xác nhận.</li>
                            <li>
                                Vào các dịp cao điểm (Black Friday, Giáng sinh, Tết...), thời gian xử lý đơn hàng có thể
                                kéo dài hơn, tối đa không quá 48 giờ làm việc.
                            </li>
                            <li>Đơn hàng đặt sau 15h00 sẽ được xử lý vào ngày làm việc tiếp theo.</li>
                            <li>Đơn hàng đặt vào ngày nghỉ, ngày lễ sẽ được xử lý vào ngày làm việc kế tiếp.</li>
                        </ul>
                    </div>

                    <div className={cx('section')}>
                        <h2>3. Thời gian giao hàng</h2>
                        <p>Thời gian giao hàng được tính từ khi đơn hàng được bàn giao cho đơn vị vận chuyển:</p>
                        <table className={cx('shipping-table')}>
                            <thead>
                                <tr>
                                    <th>Khu vực</th>
                                    <th>Thời gian giao hàng</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nội thành Hà Nội, TP.HCM</td>
                                    <td>1-2 ngày làm việc</td>
                                </tr>
                                <tr>
                                    <td>Các tỉnh thành khác</td>
                                    <td>3-5 ngày làm việc</td>
                                </tr>
                                <tr>
                                    <td>Khu vực miền núi, hải đảo</td>
                                    <td>5-7 ngày làm việc</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className={cx('note')}>
                            <strong>Lưu ý:</strong> Thời gian giao hàng có thể bị ảnh hưởng bởi các yếu tố khách quan
                            như thời tiết, thiên tai, dịch bệnh hoặc các sự kiện bất khả kháng khác.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>4. Phí vận chuyển</h2>
                        <h3>4.1. Biểu phí vận chuyển tiêu chuẩn:</h3>
                        <table className={cx('shipping-table')}>
                            <thead>
                                <tr>
                                    <th>Khu vực</th>
                                    <th>Phí vận chuyển</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Nội thành Hà Nội, TP.HCM</td>
                                    <td>20.000đ</td>
                                </tr>
                                <tr>
                                    <td>Các tỉnh thành khác</td>
                                    <td>30.000đ</td>
                                </tr>
                                <tr>
                                    <td>Khu vực miền núi, hải đảo</td>
                                    <td>40.000đ - 60.000đ (tùy khu vực)</td>
                                </tr>
                            </tbody>
                        </table>

                        <h3>4.2. Miễn phí vận chuyển:</h3>
                        <ul>
                            <li>
                                Miễn phí vận chuyển cho đơn hàng từ 500.000đ trở lên (áp dụng cho khu vực nội thành Hà
                                Nội, TP.HCM).
                            </li>
                            <li>
                                Miễn phí vận chuyển cho đơn hàng từ 1.000.000đ trở lên (áp dụng toàn quốc, trừ khu vực
                                miền núi và hải đảo).
                            </li>
                        </ul>

                        <h3>4.3. Phí vận chuyển đặc biệt:</h3>
                        <ul>
                            <li>
                                Đối với sản phẩm cồng kềnh, nặng (trên 5kg): phụ thu thêm 10.000đ - 30.000đ tùy trọng
                                lượng và kích thước.
                            </li>
                            <li>
                                Giao hàng hỏa tốc (trong ngày): áp dụng cho khu vực nội thành Hà Nội, TP.HCM với phí từ
                                50.000đ - 100.000đ.
                            </li>
                        </ul>
                    </div>

                    <div className={cx('section')}>
                        <h2>5. Đơn vị vận chuyển</h2>
                        <p>Mao Cloth hợp tác với các đơn vị vận chuyển uy tín như:</p>
                        <ul>
                            <li>Giao hàng nhanh (GHN)</li>
                            <li>Giao hàng tiết kiệm (GHTK)</li>
                            <li>Viettel Post</li>
                            <li>J&T Express</li>
                            <li>Ninja Van</li>
                        </ul>
                        <p>
                            Chúng tôi sẽ lựa chọn đơn vị vận chuyển phù hợp nhất dựa trên địa chỉ giao hàng và loại sản
                            phẩm để đảm bảo đơn hàng được giao đến khách hàng nhanh chóng và an toàn nhất.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>6. Quy trình giao nhận</h2>
                        <ol>
                            <li>
                                Khách hàng sẽ nhận được tin nhắn/email thông báo khi đơn hàng được xác nhận và khi đơn
                                hàng được giao cho đơn vị vận chuyển.
                            </li>
                            <li>Đơn vị vận chuyển sẽ liên hệ trước khi giao hàng.</li>
                            <li>
                                Khách hàng cần kiểm tra kỹ thông tin người nhận, số điện thoại và địa chỉ để đảm bảo
                                nhận hàng thuận tiện.
                            </li>
                            <li>
                                Khi nhận hàng, khách hàng vui lòng kiểm tra tình trạng bên ngoài của gói hàng trước khi
                                ký nhận.
                            </li>
                            <li>Khách hàng có quyền từ chối nhận hàng nếu phát hiện gói hàng bị hư hỏng bên ngoài.</li>
                        </ol>
                    </div>

                    <div className={cx('section')}>
                        <h2>7. Chính sách giao hàng không thành công</h2>
                        <ul>
                            <li>
                                Trường hợp không liên lạc được với người nhận: Đơn vị vận chuyển sẽ cố gắng liên lạc 3
                                lần trong 3 ngày liên tiếp.
                            </li>
                            <li>
                                Trường hợp người nhận không có ở địa chỉ giao hàng: Đơn vị vận chuyển sẽ thực hiện tối
                                đa 3 lần giao hàng.
                            </li>
                            <li>Sau 3 lần giao hàng không thành công, đơn hàng sẽ được chuyển về kho của Mao Cloth.</li>
                            <li>
                                Khách hàng cần liên hệ lại với Mao Cloth trong vòng 7 ngày kể từ lần giao hàng cuối cùng
                                để sắp xếp giao hàng lại (có thể phát sinh thêm phí vận chuyển).
                            </li>
                            <li>Sau 15 ngày không có phản hồi, đơn hàng sẽ bị hủy và không được hoàn tiền.</li>
                        </ul>
                    </div>

                    <div className={cx('section')}>
                        <h2>8. Theo dõi đơn hàng</h2>
                        <p>Khách hàng có thể theo dõi tình trạng đơn hàng thông qua:</p>
                        <ul>
                            <li>Tài khoản Mao Cloth của khách hàng (mục "Đơn hàng của tôi")</li>
                            <li>Email xác nhận đơn hàng (có chứa mã vận đơn và đường link theo dõi)</li>
                            <li>Liên hệ trực tiếp với bộ phận CSKH qua hotline 1900 1234</li>
                        </ul>
                    </div>

                    <div className={cx('contact')}>
                        <p>
                            Mọi thắc mắc về vận chuyển và giao nhận, vui lòng liên hệ:
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

export default ShippingPolicy;
