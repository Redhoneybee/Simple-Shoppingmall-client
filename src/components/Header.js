import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBell, faUserCircle } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    return (
        <header>
            <div className="search">
                <button className="search__btn">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
            <div className="title">
                <span>Shopping Mall</span>
            </div>
            <div className="profile">
                <button className="alert__btn">
                    <FontAwesomeIcon icon={faBell} />
                </button>
                <button className="profile__btn">
                    <FontAwesomeIcon icon={faUserCircle} />
                </button>
            </div>
        </header>
    );
}

export default Header;