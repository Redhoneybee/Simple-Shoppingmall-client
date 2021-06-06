import React from "react";
const Home = () => {
    return (
        <>
            <section className="main-slider">
                <div className="slider-box">
                    <img src="https://placeimg.com/650/480/any" />
                    <img src="https://placeimg.com/650/480/any" />
                    <img src="https://placeimg.com/650/480/any" />
                </div>
            </section>
            <section className="coupon-slider">
                <div class="slider-box ">
                    <img src="https://placeimg.com/650/340/any" />
                    <img src="https://placeimg.com/650/340/any" />
                    <img src="https://placeimg.com/650/240/any" />
                </div>
            </section>
            <section className="best-items">
                <span>BEST ITEMS</span>
                <div className="best-items-contents">
                    <div className="best-item">
                        <img src="https://placeimg.com/450/450/any" />
                        <div className="item-title">제목</div>
                        <div className="item-tag">#태그 #태그 #태그 #태그</div>
                        <div className="price-contents">
                            <span className="origin-price">가격</span>
                            <span className="sale-price">할인가</span>
                            <span className="sale-per">할인률</span>
                        </div>
                    </div>
                    <div className="best-item">
                        <img src="https://placeimg.com/450/450/any" />
                        <div className="item-title">제목</div>
                        <div className="item-tag">#태그 #태그 #태그 #태그</div>
                        <div className="price-contents">
                            <span className="origin-price">가격</span>
                            <span className="sale-price">할인가</span>
                            <span className="sale-per">할인률</span>
                        </div>
                    </div>
                    <div className="best-item">
                        <img src="https://placeimg.com/450/450/any" />
                        <div className="item-title">제목</div>
                        <div className="item-tag">#태그 #태그 #태그 #태그</div>
                        <div className="price-contents">
                            <span className="origin-price">가격</span>
                            <span className="sale-price">할인가</span>
                            <span className="sale-per">할인률</span>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="company-info">
                <div>
                    <p>회사명</p>
                    <p>회사번호</p>
                    <p>카카오톡 : 카카오톡 명</p>
                </div>
            </footer>
        </>
    )
}

export default Home;