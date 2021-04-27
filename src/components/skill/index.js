import React from 'react';
import * as styles from './skill.module.css'

const Skill = (props) => {
    const {name, level} = props

    const level1 =  <div className={`${styles.level1} ${styles.level}`} ></div>;
    const level2 =  <div className ={styles.container}>
                        <div className={`${styles.level1} ${styles.level}`}></div> 
                        <div className={`${styles.level2} ${styles.level}`}></div>
                    </div> 
    const level3 =  <div className ={styles.container}>
                        <div className={`${styles.level1} ${styles.level}`}></div> 
                        <div className={`${styles.level2} ${styles.level}`}></div>
                        <div className={`${styles.level3} ${styles.level}`}></div>
                    </div>;
    const level4 =  <div className ={styles.container}>
                        <div className={`${styles.level1} ${styles.level}`}></div> 
                        <div className={`${styles.level2} ${styles.level}`}></div>
                        <div className={`${styles.level3} ${styles.level}`}></div>
                        <div className={`${styles.level4} ${styles.level}`}></div>
                    </div>;

    return (
        <div className={styles.skill}>
            
            <p className={styles.skill__name}>
                {name}:
            </p>

            {level === "1" && level1}
            {level === "2" && level2}
            {level === "3" && level3}
            {level === "4" && level4}
            <p className={styles.level__text}>
                {level}/4
            </p>

          

        </div>
    )
}

export default Skill;