import React, { useState } from 'react'; 
import * as styles from './intro.module.css';

const shortText =    <article className={styles.introductionText}>
                        <span className={styles.introductionSpan}>hey! I'm Matt, I code stuff.</span>
                        <p>
                            I enjoy building functional user-friendly UIs with minimalistic designs that place content and type in the spotlight.
                            When building projects I certainly value performance and pretty typefaces.
                        </p>
                        <p>
                            Outside coding I spend my time trying to tame my ever growing collection of photos, sometimes playing records in front
                            of (probably inebriated) people.
                        </p>
                        <p>
                            Not a huge fan of flying, but I do appreciate the rapid change of location.
                            I really like dogs, but Maine Coon cats just are my thing, sorry.
                        </p>
                    </article>
                    

const longText =    <article className={styles.introductionText}>
                        <span className={styles.introductionSpan}>hey! I'm Matt, I code stuff.</span>
                        <p>
                            I am longer.
                            I enjoy building functional user-friendly UIs with minimalistic designs that place content and type in the spotlight.
                            When building projects I certainly value performance and pretty typefaces.
                        </p>
                        <p>
                            Outside coding I spend my time trying to tame my ever growing collection of photos, sometimes playing records in front
                            of (probably inebriated) people.
                        </p>
                        <p>
                            Not a huge fan of flying, but I do appreciate the rapid change of location.
                            I really like dogs, but Maine Coon cats just are my thing, sorry.
                            Oh! I can operate a snowcat, just thought you should know...
                            BLAH BLAH BLAH MATI
                        </p>
                    </article>

const TextButton = (props) => {
    const {buttonValue, textVersion, setTextVersion} = props;
    const buttonStyle = styles.textButton;
    const activeButtonStyle = `${styles.textButton} ${styles.textButtonActive}`;

    return (
        <button name="textButton" 
        value={buttonValue} 
        className={ textVersion === buttonValue ? activeButtonStyle : buttonStyle}
        onClick={() => setTextVersion(buttonValue)}>
            {buttonValue} version</button>
    )
}

const Introduction = () => {
    const [textVersion, setTextVersion] = useState("short");

    return (
        <section className={styles.introduction}>
            { textVersion === 'short' ? shortText : longText }
            <div className={styles.buttonContainer}>
                {/* <TextButton buttonValue="short" textVersion={textVersion} setTextVersion={setTextVersion} />
                <TextButton buttonValue="long"  textVersion={textVersion} setTextVersion={setTextVersion}  /> */}
            </div>
        </section>
        
    )
}

export default Introduction;