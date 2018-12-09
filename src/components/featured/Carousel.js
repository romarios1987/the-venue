import React from 'react';
import Slider from "react-slick";
import slide_one from '../../resources/images/slide_1.jpg';
import slide_two from '../../resources/images/slide_2.jpg';
import slide_three from '../../resources/images/slide_3.jpg';

const Carousel = () => {

    const settings = {
        dots: true,
        fade: true,
        autoplay: true,
        speed: 2000
    };

    return (
        <div
            className="carousel_wrapper"
            style={{
                background: 'red',
                height: `${window.innerHeight}px`,
                overflow: 'hidden'
            }}>

            <Slider {...settings}>
                <div>
                    <div className="carousel_image"
                         style={{
                             background: `url(${slide_one})`, height: `${window.innerHeight}px`
                         }}>
                    </div>
                </div>
                <div>
                    <div className="carousel_image"
                         style={{
                             background: `url(${slide_two})`, height: `${window.innerHeight}px`
                         }}>
                    </div>
                </div>
                <div>
                    <div className="carousel_image"
                         style={{
                             background: `url(${slide_three})`, height: `${window.innerHeight}px`
                         }}>
                    </div>
                </div>
            </Slider>
        </div>
    );
};

export default Carousel;