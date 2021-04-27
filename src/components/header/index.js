import React from 'react';
import Picture from "../../images/profilepicture.jpg"
import * as headerStyles from "./header.module.css";

const Header = () => {
    return (
        <div className={headerStyles.header}>
            <h1 className={headerStyles.title}>Hallala</h1>
            <h3 className={headerStyles.subtitle}>Front-end web developer</h3>
            <div className={headerStyles.header__image__bg}>
                <img className={headerStyles.header__image} src={Picture} alt="myself in a vintage surfer shirt"/>
            </div>
        </div>

    )
}

export default Header;