import React from 'react';
import classNames from 'classnames/bind';
import styles from './Blogger.module.scss';

import picture from './img/logo2.png';
import Header from '../../Layouts/Header/Header';
import Footer from '../../Layouts/Footer/Footer';
import Banner from '../Layouts/Banner/Banner';

const cx = classNames.bind(styles);

function Blogger() {
    const dataBlog = [
        {
            image: '',
            title: 'MAO Cloth Store',
            paragraphs: [
                'MAO Cloth Store là thương hiệu dẫn đầu trong lĩnh vực thời trang và chăm sóc cá nhân, mang đến cho khách hàng những sản phẩm tinh tế, hiện đại và đầy phong cách.',
                'Chúng tôi cam kết cung cấp các dòng sản phẩm thời trang nam nữ được chọn lọc kỹ lưỡng, đảm bảo chất lượng và tính thẩm mỹ.',
                'MAO Cloth Store không ngừng đổi mới, cập nhật xu hướng toàn cầu nhằm nâng cao trải nghiệm người dùng, từ chất lượng sản phẩm đến dịch vụ chăm sóc khách hàng tận tâm.',
            ],
        },
        {
            image: '',
            title: 'Sứ mệnh & Giá trị cốt lõi',
            paragraphs: [
                'Sứ mệnh của chúng tôi là truyền cảm hứng sống đẹp và tự tin đến từng khách hàng thông qua sản phẩm và dịch vụ đẳng cấp.',
                'Chúng tôi đề cao giá trị bền vững, sự sáng tạo và tính cá nhân hoá trong từng sản phẩm, với mong muốn đồng hành cùng khách hàng trên hành trình khẳng định phong cách riêng.',
                'Với đội ngũ tâm huyết, MAO hướng tới việc xây dựng một cộng đồng tiêu dùng thông minh, văn minh và yêu cái đẹp.',
            ],
        },
    ];

    const shortBlogs = [
        {
            title: '5 xu hướng thời trang hè 2025 bạn không thể bỏ lỡ',
            description:
                'Cùng khám phá những kiểu dáng, chất liệu và màu sắc đang làm mưa làm gió trong mùa hè năm nay.',
            image: 'https://style-republik.com/wp-content/uploads/2024/09/xu-huong-thoi-trang-xuan-he-2025.jpg',
            link: '#',
        },
        {
            title: 'Cách phối đồ công sở thanh lịch nhưng không nhàm chán',
            description: 'Gợi ý những set đồ vừa tinh tế vừa thể hiện cá tính nơi công sở, phù hợp mọi độ tuổi.',
            image: 'https://cdn4.vieclam24h.vn/do_cong_so_nu_1_861db27f84.jpeg',
            link: '#',
        },
        {
            title: 'Bí quyết chọn màu trang phục phù hợp với tone da châu Á',
            description: 'Chọn đúng phối màu trang phục không chỉ tôn da mà còn giúp bạn tự tin hơn mỗi ngày.',
            image: 'https://onoff.vn/blog/wp-content/uploads/2024/08/phoi-do-theo-mau-da-1.jpg',
            link: '#',
        },
    ];

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
                            <img src={item.image || picture} alt={item.title} className={cx('blogger-image')} />
                            <div className={cx('blogger-content')}>
                                <h2>{item.title}</h2>
                                {item.paragraphs.map((para, i) => (
                                    <p key={i}>{para}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}

                {/* Danh sách các bài blog ngắn */}
                <section className={cx('short-blog-section')}>
                    <h2 className={cx('section-title')}>Bài viết nổi bật</h2>
                    <div className={cx('short-blog-list')}>
                        {shortBlogs.map((blog, index) => (
                            <a key={index} href={blog.link} className={cx('short-blog-card')}>
                                <img src={blog.image} alt={blog.title} className={cx('short-blog-image')} />
                                <div className={cx('short-blog-content')}>
                                    <h3 className={cx('short-blog-title')}>{blog.title}</h3>
                                    <p className={cx('short-blog-description')}>{blog.description}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Blogger;
