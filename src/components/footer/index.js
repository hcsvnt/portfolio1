import React from 'react';
import EmailIcon from "../../svg/paper-plane-regular.svg";
import GithubIcon from "../../svg/github-brands.svg";
import LinkedinIcon from "../../svg/linkedin-in-brands.svg";
import CameraIcon from "../../svg/camera-retro-solid.svg"
// import "./footer.css";
import * as footerStyles from "./footer.module.css";

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.icons}>
                <img className={footerStyles.icon} src={EmailIcon} alt="email icon" />
                <img className={footerStyles.icon} src={GithubIcon} alt="github icon" />
                <img className={footerStyles.icon} src={LinkedinIcon} alt="linkedin icon" />
                <img className={footerStyles.icon} src={CameraIcon} alt="photography camera icon" />
                <p className={footerStyles.copy}>
                    ©
                </p>
                <p className={footerStyles.year}>
                    '21
                </p>
            </div>
            <p className={footerStyles.name}>
                Mateusz Hallala
            </p>

            <p className={footerStyles.builtWith}>
                Built with Gatsby, hosted on Netlify
            </p>

        </div>

    )
}

export default Footer;