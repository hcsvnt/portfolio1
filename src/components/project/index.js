import React from 'react';
import Logo from '../../misc/logos';
import * as styles from "./project.module.css";

const Project = (props) => {
    const {id, title, description, src, stack, iDisabled, imgSrc} = props;
    

    const iFrame  = <embed className={styles.miniBrowser} src={src}></embed>;
    const iFrameReplacement = <img src={imgSrc} className={`${styles.miniBrowser} ${styles.browserImg}`} alt='screenshot of the project website' />;

    return (
        <article key={id} className={styles.container}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            {/* <embed className={styles.miniBrowser} src={src}></embed> */} 
            { iDisabled ? iFrameReplacement : iFrame }
            
            <a className={styles.link} href={src} target="blank"> 
                open in new tab
            </a>
            <div className={styles.tech__header}>
                <p className={styles.tech__header__p}>Tech stack:</p>
                <div className={styles.stack}>
                    {stack.map((item, index) => <Logo key={index} name={`${item}Logo`} alt={`${item}Logo`} />)}
                </div>
            </div>
        </article>
    )
}

export default Project;
