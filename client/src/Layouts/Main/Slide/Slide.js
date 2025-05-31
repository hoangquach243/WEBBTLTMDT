import React from 'react';
import 'react-slideshow-image/dist/styles.css';

import classNames from 'classnames/bind';
import styles from './Slide.module.scss';

import Slider from 'react-slick';

import imgBanner from './img/imgBanner4.png';
import imgBanner4 from './img/imgBanner5.png';
import imgBanner5 from './img/imgBanner6.png';
const cx = classNames.bind(styles);

function SlideWeb() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
    };

    return (
        <div className={cx('slide-container')}>
            <Slider {...settings}>
                <div>
                    <img id={cx('test')} src={imgBanner} />
                </div>
                <div>
                    <img id={cx('test')} src={imgBanner4} />
                </div>
                <div>
                    <img id={cx('test')} src={imgBanner5} />
                </div>
            </Slider>
        </div>
    );
}

export default SlideWeb;
