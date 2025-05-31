import React from 'react';
import classNames from 'classnames/bind';
import styles from './Blogger.module.scss';

import picture from './img/logo.png';
import Header from '../../Layouts/Header/Header';
import Footer from '../../Layouts/Footer/Footer';
import Banner from '../Layouts/Banner/Banner';
import { useEffect, useState } from 'react';
import request from '../../config/Connect';

const cx = classNames.bind(styles);

function Blogger() {
    const [dataBlog, setDataBlog] = useState([]);

    useEffect(() => {
        request.get('/api/getblog').then((res) => setDataBlog(res.data));
    }, []);

    return (
        <div className={cx('wrapper')}>
            <header>
                <Header />
            </header>

            <div>
                <Banner />
            </div>

            <main className={cx('inner')}>
                {dataBlog.map((item, index) => (
                    <div key={index} className={cx('form-blogger', { reverse: index % 2 !== 0 })}>
                        <div className={cx('blogger-card')}>
                            <img
                                src={item.image || picture}
                                alt={item.title || 'Blogger Image'}
                                className={cx('blogger-image')}
                            />
                            <div className={cx('blogger-content')}>
                                <h2>Công Ty TNHH ABC</h2>
                                <p>
                                    Công ty ABC tự hào là địa chỉ mua sắm đáng tin cậy dành cho những tín đồ yêu thích
                                    thời trang và làm đẹp. Với sứ mệnh mang đến phong cách sống hiện đại, tinh tế, ABC
                                    chuyên cung cấp các sản phẩm quần áo nam nữ thời trang, son môi cao cấp, nến thơm
                                    thư giãn và giày dép phong cách.
                                </p>
                                <p>
                                    Chúng tôi không chỉ chú trọng vào chất lượng sản phẩm mà còn luôn cập nhật những xu
                                    hướng mới nhất, giúp khách hàng thể hiện phong cách cá nhân một cách tự tin và nổi
                                    bật. Mỗi sản phẩm tại ABC đều được chọn lọc kỹ lưỡng, đảm bảo sự hài lòng từ kiểu
                                    dáng, chất lượng đến giá thành hợp lý.
                                </p>
                                <p>
                                    Chúng tôi cam kết mang đến cho bạn những sản phẩm chất lượng nhất, dịch vụ tận tâm
                                    và trải nghiệm mua sắm tuyệt vời nhất. Hãy đến với ABC để khám phá thế giới thời
                                    trang và làm đẹp đầy màu sắc!
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Blogger;
