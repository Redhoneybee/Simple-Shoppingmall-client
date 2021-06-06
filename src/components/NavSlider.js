import React from "react";
import Slider from "react-slick";

const NavSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToSroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        swipeToSlide: true,
        arrows: false,
    }

    return (
        <Slider {...settings}>
            <div><button className="list-item__btn">BEST ITEMS</button></div>
            <div><button className="list-item__btn">NEW ITEMS</button></div>
            <div><button className="list-item__btn">원피스</button></div>
            <div><button className="list-item__btn">블라우스</button></div>
            <div><button className="list-item__btn">아우터</button></div>
            <div><button className="list-item__btn">니트/티셔츠</button></div>
            <div><button className="list-item__btn">스커트</button></div>
            <div><button className="list-item__btn">팬츠</button></div>
            <div><button className="list-item__btn">주얼리</button></div>
            <div><button className="list-item__btn">액세서리</button></div>
            <div><button className="list-item__btn">슈즈</button></div>
            <div><button className="list-item__btn">가방</button></div>
            <div><button className="list-item__btn">언더웨어</button></div>
        </Slider>
    );
}

export default NavSlider;