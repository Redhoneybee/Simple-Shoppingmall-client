import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";
const Navigation = () => {
    return (
        <nav className="gnb">
            <ul className="list">
                <li>
                    <button className="list__btn">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </li>
                <li><button className="list-item__btn">BEST ITEMS</button></li>
                <li><button className="list-item__btn">NEW ITEMS</button></li>
                <li><button className="list-item__btn">원피스</button></li>
                <li><button className="list-item__btn">블라우스</button></li>
                <li>
                    <button className="list-more__btn">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;