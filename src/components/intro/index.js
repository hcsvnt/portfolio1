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

const Button = (props) => {
    const {buttonValue, setTextVersion} = props;

    return (
        <button name="textButton" value={buttonValue}  onClick={() => setTextVersion(buttonValue)}>{buttonValue}</button>
    )
}

const Introduction = () => {
    const [textVersion, setTextVersion] = useState("short");

    return (
        <section className={styles.introduction}>
            { textVersion === 'short' ? shortText : longText }
            <Button buttonValue="short" setTextVersion={setTextVersion} />
            <Button buttonValue="long" setTextVersion={setTextVersion}  />
        </section>
        
    )
}

export default Introduction;