import React from 'react';
import classNames from 'classnames/bind';
import styles from './TermsOfUse.module.scss';
import Header from '../../../Layouts/Header/Header';
import Footer from '../../../Layouts/Footer/Footer';

const cx = classNames.bind(styles);

function TermsOfUse() {
    return (
        <div className={cx('wrapper')}>
            <header>
                <Header />
            </header>
            <main className={cx('content')}>
                <div className={cx('container')}>
                    <h1 className={cx('title')}>Điều khoản sử dụng</h1>

                    <div className={cx('section')}>
                        <h2>1. Giới thiệu</h2>
                        <p>
                            Chào mừng bạn đến với Mao Cloth. Khi bạn truy cập và sử dụng website của chúng tôi, bạn đồng
                            ý tuân thủ các điều khoản và điều kiện được nêu trong tài liệu này.
                        </p>
                        <p>
                            Vui lòng đọc kỹ các điều khoản sử dụng này trước khi truy cập hoặc sử dụng website của chúng
                            tôi. Bằng việc truy cập hoặc sử dụng website, bạn đồng ý bị ràng buộc bởi các điều khoản
                            này. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, bạn không được phép
                            truy cập website hoặc sử dụng dịch vụ của chúng tôi.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>2. Tài khoản người dùng</h2>
                        <h3>2.1. Đăng ký tài khoản</h3>
                        <p>
                            Để sử dụng một số tính năng của website, bạn có thể cần phải đăng ký tài khoản và cung cấp
                            thông tin cá nhân chính xác, đầy đủ và cập nhật. Bạn chịu trách nhiệm duy trì tính bảo mật
                            của tài khoản và mật khẩu của mình.
                        </p>

                        <h3>2.2. Trách nhiệm của người dùng</h3>
                        <p>
                            Bạn đồng ý chịu trách nhiệm cho tất cả các hoạt động diễn ra dưới tài khoản của mình. Mao
                            Cloth không chịu trách nhiệm cho bất kỳ tổn thất hoặc thiệt hại nào phát sinh từ việc bạn
                            không tuân thủ nghĩa vụ bảo mật này.
                        </p>
                        <p>
                            Bạn phải thông báo ngay cho chúng tôi về bất kỳ hành vi sử dụng trái phép tài khoản của bạn
                            hoặc bất kỳ vi phạm bảo mật nào khác.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>3. Mua hàng và thanh toán</h2>
                        <h3>3.1. Đặt hàng</h3>
                        <p>
                            Khi đặt hàng trên website của chúng tôi, bạn đang đưa ra lời đề nghị mua sản phẩm. Đơn hàng
                            của bạn chỉ được xác nhận khi chúng tôi gửi email xác nhận đơn hàng.
                        </p>
                        <p>
                            Chúng tôi có quyền từ chối hoặc hủy đơn hàng của bạn vào bất kỳ lúc nào vì bất kỳ lý do gì,
                            bao gồm nhưng không giới hạn ở: sản phẩm không có sẵn, lỗi trong mô tả hoặc giá cả sản phẩm,
                            hoặc nghi ngờ gian lận.
                        </p>

                        <h3>3.2. Giá cả và thanh toán</h3>
                        <p>
                            Tất cả giá sản phẩm được hiển thị trên website đã bao gồm thuế VAT (nếu có). Phí vận chuyển
                            sẽ được tính riêng và hiển thị rõ trong quá trình thanh toán.
                        </p>
                        <p>
                            Chúng tôi cố gắng đảm bảo rằng tất cả thông tin và giá cả trên website là chính xác, nhưng
                            có thể có lỗi. Nếu chúng tôi phát hiện lỗi về giá của sản phẩm bạn đã đặt, chúng tôi sẽ
                            thông báo cho bạn và cung cấp tùy chọn xác nhận đơn hàng với giá đúng hoặc hủy đơn hàng.
                        </p>

                        <h3>3.3. Phương thức thanh toán</h3>
                        <p>
                            Chúng tôi chấp nhận các phương thức thanh toán được liệt kê trên website. Bằng việc cung cấp
                            thông tin thanh toán, bạn xác nhận rằng bạn được ủy quyền sử dụng phương thức thanh toán đã
                            chọn.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>4. Sản phẩm và dịch vụ</h2>
                        <h3>4.1. Thông tin sản phẩm</h3>
                        <p>
                            Chúng tôi cố gắng mô tả sản phẩm của mình một cách chính xác nhất có thể. Tuy nhiên, chúng
                            tôi không đảm bảo rằng mô tả sản phẩm hoặc nội dung khác của website là chính xác, đầy đủ,
                            đáng tin cậy, cập nhật hoặc không có lỗi.
                        </p>
                        <p>
                            Màu sắc thực tế của sản phẩm có thể khác với màu hiển thị trên màn hình của bạn do cài đặt
                            màn hình và độ phân giải.
                        </p>

                        <h3>4.2. Tình trạng hàng</h3>
                        <p>
                            Tất cả các sản phẩm đều tùy thuộc vào tình trạng còn hàng. Chúng tôi sẽ thông báo cho bạn
                            càng sớm càng tốt nếu sản phẩm bạn đặt không có sẵn và có thể đề xuất sản phẩm thay thế hoặc
                            hoàn tiền.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>5. Quyền sở hữu trí tuệ</h2>
                        <p>
                            Website và tất cả nội dung, tính năng và chức năng của nó (bao gồm nhưng không giới hạn ở
                            tất cả thông tin, phần mềm, văn bản, hình ảnh, âm thanh, video, biểu tượng, logo) đều thuộc
                            sở hữu của Mao Cloth hoặc các bên cấp phép của chúng tôi và được bảo vệ bởi luật sở hữu trí
                            tuệ.
                        </p>
                        <p>
                            Bạn không được sao chép, phân phối, sửa đổi, hiển thị công khai, thực hiện công khai, tái
                            xuất bản, tải xuống, lưu trữ hoặc truyền bất kỳ nội dung nào trên website của chúng tôi,
                            ngoại trừ việc xem website trong quá trình sử dụng bình thường.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>6. Hành vi bị cấm</h2>
                        <p>
                            Bạn chỉ có thể sử dụng website cho các mục đích hợp pháp và theo các điều khoản này. Bạn
                            đồng ý không sử dụng website:
                        </p>
                        <ul>
                            <li>Theo bất kỳ cách nào vi phạm luật pháp hiện hành</li>
                            <li>Để lừa đảo hoặc lừa dối chúng tôi hoặc bất kỳ người nào khác</li>
                            <li>Để gửi hoặc tải lên bất kỳ nội dung bất hợp pháp hoặc không phù hợp</li>
                            <li>Để truyền virus hoặc mã độc hại</li>
                            <li>Để thu thập hoặc theo dõi thông tin cá nhân của người khác</li>
                            <li>Để can thiệp vào hoạt động bình thường của website</li>
                        </ul>
                    </div>

                    <div className={cx('section')}>
                        <h2>7. Giới hạn trách nhiệm</h2>
                        <p>
                            Trong phạm vi tối đa được pháp luật cho phép, Mao Cloth và các đối tác, nhân viên, giám đốc,
                            đại lý và nhà cung cấp của chúng tôi sẽ không chịu trách nhiệm đối với bất kỳ thiệt hại nào
                            phát sinh từ việc sử dụng hoặc không thể sử dụng website hoặc các dịch vụ của chúng tôi.
                        </p>
                        <p>
                            Chúng tôi không đảm bảo rằng website sẽ an toàn, không có lỗi hoặc virus. Bạn chịu trách
                            nhiệm cấu hình công nghệ thông tin, chương trình máy tính và nền tảng của mình để truy cập
                            website.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>8. Bồi thường</h2>
                        <p>
                            Bạn đồng ý bảo vệ, bồi thường và giữ cho Mao Cloth và các công ty liên kết, đối tác, nhân
                            viên, đại lý và nhà cung cấp của chúng tôi không bị tổn hại từ bất kỳ khiếu nại, trách
                            nhiệm, thiệt hại, tổn thất và chi phí nào phát sinh từ việc bạn vi phạm các điều khoản này
                            hoặc vi phạm quyền của bên thứ ba.
                        </p>
                    </div>

                    <div className={cx('section')}>
                        <h2>9. Thay đổi điều khoản</h2>
                        <p>
                            Chúng tôi có thể sửa đổi các điều khoản này tại bất kỳ thời điểm nào bằng cách đăng các điều
                            khoản sửa đổi trên website. Việc bạn tiếp tục sử dụng website sau khi đăng các thay đổi đồng
                            nghĩa với việc bạn chấp nhận các điều khoản mới.
                        </p>
                        <p>Bạn nên kiểm tra trang này thường xuyên để cập nhật về bất kỳ thay đổi nào.</p>
                    </div>

                    <div className={cx('section')}>
                        <h2>10. Luật áp dụng và giải quyết tranh chấp</h2>
                        <p>
                            Các điều khoản này sẽ được điều chỉnh và giải thích theo luật pháp Việt Nam. Bất kỳ tranh
                            chấp nào phát sinh liên quan đến các điều khoản này hoặc việc sử dụng website của bạn sẽ
                            được giải quyết thông qua thương lượng thiện chí. Nếu không thể giải quyết được thông qua
                            thương lượng, tranh chấp sẽ được đưa ra giải quyết tại tòa án có thẩm quyền tại Việt Nam.
                        </p>
                    </div>

                    <div className={cx('contact')}>
                        <p>
                            Nếu bạn có bất kỳ câu hỏi nào về Điều khoản sử dụng của chúng tôi, vui lòng liên hệ:
                            <br />
                            Hotline: 1900 1234 (8:00 - 21:00)
                            <br />
                            Email: legal@maocloth.com
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

export default TermsOfUse;
