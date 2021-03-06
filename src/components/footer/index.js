import React from 'react';
import EmailIcon from "../../svg/paper-plane-regular.svg";
import GithubIcon from "../../svg/github-brands.svg";
import LinkedinIcon from "../../svg/linkedin-in-brands.svg";
import CameraIcon from "../../svg/camera-retro-solid.svg"
import * as footerStyles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.icons}>
                <a  href="mailto:mateuszhallala@icloud.com" 
                    className={footerStyles.iconLink}>
                        <img className={`${footerStyles.icon} monoSvg`} src={EmailIcon} alt="email icon" />
                </a>
                <a href="https://github.com/hcsvnt" 
                    className={footerStyles.iconLink} target="blank">
                        <img className={`${footerStyles.icon} monoSvg`} src={GithubIcon} alt="github icon"/>
                </a>
                <a href="http://www.linkedin.com/in/mateusz-hallala" 
                    className={footerStyles.iconLink} target="blank">
                        <img className={`${footerStyles.icon} monoSvg`} src={LinkedinIcon} alt="linkedin icon" />
                </a>
                <a href="https://www.matthallala.com/" 
                    className={footerStyles.iconLink} target="blank">
                        <img className={`${footerStyles.icon} monoSvg`} src={CameraIcon} alt="photography camera icon" />
                </a>
                <p className={footerStyles.copy}>©</p>
                <p className={footerStyles.year}>'21</p>
            </div>
            <p className={footerStyles.name}>
                Mateusz Hallala
            </p>

            <p className={footerStyles.builtWith}>
                Built with
                <a href="https://www.gatsbyjs.com" target="blank" className={footerStyles.builtWith__link}>Gatsby</a>
                , hosted on 
                <a href="https://www.netlify.com" target="blank" className={footerStyles.builtWith__link}>Netlify</a>
            </p>
        </footer>
    )
}

export default Footer;