import React from 'react';
import Logo from '../../misc/logos'
import * as styles from "./project.module.css";

const Project = (props) => {
    const {id, title, description, src, stack} = props;

    return (
        <div key={id} className={styles.container}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
            <embed className={styles.miniBrowser} src={src}></embed>
            
            <a className={styles.link} href={src} target="blank"> 
                open in new tab
            </a>
            <div className={styles.tech__header}>
                <p className={styles.tech__header__p}>
                Tech stack:
                </p>
                <div className={styles.stack}>
                    {stack.map((item, index) => <Logo key={index} name={`${item}Logo`} />)}
                </div>
            </div>
        </div>
    )
}

export default Project;
