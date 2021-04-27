import React from 'react'; 
import * as styles from './intro.module.css';

const Introduction = () => {
    return (
        <div className={styles.introduction}>
            <p className={styles.introductionText}>
                <span className={styles.introductionSpan}>hey! I'm Matt, I code stuff.</span>
                I enjoy building functional user-friendly UIs with minimalistic designs that place content and type in the spotlight.
                When building projects I certainly value performance and pretty typefaces.
                Outside coding I spend my time trying to tame my ever growing collection of photos, sometimes playing records in front
                of (probably inebriated) people.
                Not a huge fan of flying, but I do appreciate the rapid change of location.
                I really like dogs, but Maine Coon cats just are my thing, sorry.
                Oh! I can operate a snowcat, just thought you should know...
            </p>
        </div>
        
    )
}

export default Introduction;