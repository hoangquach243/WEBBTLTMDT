import React from 'react';
import classNames from 'classnames/bind';
import styles from './PrivacyPolicy.module.scss';
import Header from '../../../Layouts/Header/Header';
import Footer from '../../../Layouts/Footer/Footer';

const cx = classNames.bind(styles);

function PrivacyPolicy() {
    return (
        <div className={cx('wrapper')}>
            <header>
                <Header />
            </header>
            <main className={cx('content')}>
                <div className={cx('container')}>
                    <h1 className={cx('title')}>Chính sách bảo mật</h1>

                    <div className={cx('section')}>
                        <h2>1. Giới thiệu</h2>
                        <p>
                            Mao Cloth cam kết bảo vệ quyền riêng tư và thông tin cá nhân của khách hàng. Chính sách bảo
                            mật này mô tả cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin cá nhân của bạn
                            khi bạn truy cập website của chúng tôi hoặc sử dụng dịch vụ của chúng tôi.
                        </p>
                        <p>
                            Bằng việc sử dụng website và dịch vụ của chúng tôi, bạn đồng ý với các điều khoản của Chính
                            sách bảo mật này.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>2. Thông tin chúng tôi thu thập</h2>
                        <h3>2.1. Thông tin cá nhân:</h3>
                        <ul>
                            <li>Họ và tên</li>
                            <li>Địa chỉ email</li>
                            <li>Số điện thoại</li>
                            <li>Địa chỉ giao hàng/thanh toán</li>
                            <li>Ngày sinh (nếu bạn cung cấp)</li>
                            <li>Thông tin thanh toán (như thông tin thẻ tín dụng, thông tin tài khoản ngân hàng)</li>
                        </ul>

                        <h3>2.2. Thông tin không cá nhân:</h3>
                        <ul>
                            <li>Địa chỉ IP</li>
                            <li>Dữ liệu trình duyệt</li>
                            <li>Thông tin thiết bị</li>
                            <li>Cookie và công nghệ theo dõi tương tự</li>
                            <li>Dữ liệu về cách bạn tương tác với website của chúng tôi</li>
                        </ul>
                    </div>

                    <div className={cx('section')}>
                        <h2>3. Cách chúng tôi thu thập thông tin</h2>
                        <ul>
                            <li>Khi bạn tạo tài khoản trên website của chúng tôi</li>
                            <li>Khi bạn mua sản phẩm hoặc sử dụng dịch vụ của chúng tôi</li>
                            <li>Khi bạn đăng ký nhận bản tin hoặc tham gia chương trình khuyến mãi</li>
                            <li>Khi bạn liên hệ với bộ phận chăm sóc khách hàng của chúng tôi</li>
                            <li>
                                Thông qua cookie và các công nghệ theo dõi khác khi bạn truy cập website của chúng tôi
                            </li>
                            <li>
                                Từ các nguồn bên thứ ba như mạng xã hội khi bạn kết nối tài khoản của bạn với chúng tôi
                            </li>
                        </ul>
                    </div>

                    <div className={cx('section')}>
                        <h2>4. Mục đích sử dụng thông tin</h2>
                        <p>Chúng tôi sử dụng thông tin của bạn cho các mục đích sau:</p>
                        <ul>
                            <li>Xử lý và giao các đơn hàng của bạn</li>
                            <li>Quản lý tài khoản của bạn trên website của chúng tôi</li>
                            <li>Cung cấp dịch vụ chăm sóc khách hàng</li>
                            <li>Gửi thông báo về đơn hàng và tài khoản của bạn</li>
                            <li>Cải thiện sản phẩm và dịch vụ của chúng tôi</li>
                            <li>Phân tích dữ liệu và nghiên cứu thị trường</li>
                            <li>Gửi thông tin tiếp thị và quảng cáo (nếu bạn đồng ý)</li>
                            <li>Ngăn chặn gian lận và bảo vệ an ninh website</li>
                            <li>Tuân thủ các nghĩa vụ pháp lý</li>
                        </ul>
                    </div>

                    <div className={cx('section')}>
                        <h2>5. Chia sẻ thông tin</h2>
                        <p>Chúng tôi có thể chia sẻ thông tin của bạn với:</p>
                        <ul>
                            <li>Các đối tác vận chuyển để giao hàng đến bạn</li>
                            <li>Các đối tác thanh toán để xử lý giao dịch của bạn</li>
                            <li>Các nhà cung cấp dịch vụ IT, lưu trữ dữ liệu và phân tích</li>
                            <li>Các đối tác tiếp thị (nếu bạn đồng ý)</li>
                            <li>Cơ quan chính phủ khi có yêu cầu pháp lý</li>
                        </ul>
                        <p>
                            Chúng tôi không bán, cho thuê hoặc trao đổi thông tin cá nhân của bạn với bên thứ ba cho mục
                            đích tiếp thị mà không có sự đồng ý rõ ràng của bạn.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>6. Bảo mật thông tin</h2>
                        <p>
                            Chúng tôi áp dụng các biện pháp bảo mật thích hợp để bảo vệ thông tin cá nhân của bạn khỏi
                            mất mát, truy cập trái phép, tiết lộ, thay đổi hoặc phá hủy. Các biện pháp này bao gồm:
                        </p>
                        <ul>
                            <li>Sử dụng công nghệ mã hóa SSL để bảo vệ thông tin thanh toán</li>
                            <li>Hạn chế quyền truy cập vào thông tin cá nhân</li>
                            <li>Duy trì các biện pháp bảo mật vật lý, điện tử và quy trình</li>
                            <li>Thường xuyên đánh giá và cập nhật các biện pháp bảo mật</li>
                        </ul>
                        <p>
                            Tuy nhiên, không có phương pháp truyền dẫn qua internet hoặc lưu trữ điện tử nào là 100% an
                            toàn. Do đó, chúng tôi không thể đảm bảo an ninh tuyệt đối cho thông tin của bạn.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>7. Cookie và công nghệ theo dõi</h2>
                        <p>
                            Website của chúng tôi sử dụng cookie và các công nghệ tương tự để cải thiện trải nghiệm của
                            bạn, phân tích cách bạn sử dụng website và cá nhân hóa nội dung.
                        </p>
                        <p>
                            Bạn có thể quản lý cài đặt cookie thông qua trình duyệt của bạn. Tuy nhiên, việc vô hiệu hóa
                            cookie có thể ảnh hưởng đến chức năng của website.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>8. Quyền của bạn</h2>
                        <p>Đối với thông tin cá nhân của bạn, bạn có quyền:</p>
                        <ul>
                            <li>Truy cập và nhận bản sao thông tin cá nhân của bạn</li>
                            <li>Yêu cầu chỉnh sửa thông tin không chính xác</li>
                            <li>Yêu cầu xóa thông tin cá nhân trong một số trường hợp</li>
                            <li>Hạn chế hoặc phản đối việc xử lý thông tin của bạn</li>
                            <li>Rút lại sự đồng ý cho việc xử lý thông tin (nếu áp dụng)</li>
                            <li>Yêu cầu chuyển thông tin của bạn đến một tổ chức khác</li>
                        </ul>
                        <p>
                            Để thực hiện các quyền này, vui lòng liên hệ với chúng tôi theo thông tin ở cuối chính sách
                            này.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>9. Thời gian lưu trữ thông tin</h2>
                        <p>
                            Chúng tôi sẽ lưu trữ thông tin cá nhân của bạn trong thời gian cần thiết để thực hiện các
                            mục đích nêu trong chính sách này, trừ khi pháp luật yêu cầu hoặc cho phép thời gian lưu trữ
                            lâu hơn.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>10. Thay đổi chính sách bảo mật</h2>
                        <p>
                            Chúng tôi có thể cập nhật Chính sách bảo mật này theo thời gian để phản ánh những thay đổi
                            trong hoạt động của chúng tôi hoặc để tuân thủ các yêu cầu pháp lý. Chúng tôi sẽ thông báo
                            cho bạn về những thay đổi quan trọng bằng cách đăng thông báo trên website của chúng tôi
                            hoặc gửi email cho bạn.
                        </p>
                    </div>

                    <div className={cx('contact')}>
                        <p>
                            Nếu bạn có bất kỳ câu hỏi hoặc quan ngại nào về Chính sách bảo mật của chúng tôi, vui lòng
                            liên hệ:
                            <br />
                            Hotline: 1900 1234 (8:00 - 21:00)
                            <br />
                            Email: privacy@maocloth.com
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

export default PrivacyPolicy;
