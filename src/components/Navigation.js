import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronRight } from "@fortawesome/free-solid-svg-icons";

import NavSlider from "./NavSlider";
const Navigation = () => {
    return (
        <nav className="gnb">
            <button className="list__btn">

                <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="list-cover">
                <NavSlider />
            </div>
            <button className="list-more__btn">
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </nav>
    );
}

export default Navigation;