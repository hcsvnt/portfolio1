import React, { useState } from 'react'; 
import * as styles from './intro.module.css';

const shortText =    <article className={styles.introductionText}>
                        <span className={styles.introductionSpan}>hey! I'm Matt, I code stuff.</span>
                        <p className={styles.introduction_p}>
                            I enjoy building functional user-friendly UIs with minimalistic designs that place content and type in the spotlight.
                            When building projects I certainly value performance and pretty typefaces.
                        </p>
                        <p className={styles.introduction_p}>
                            Outside coding I spend my time trying to tame my ever growing collection of photos, sometimes playing records for 
                            (probably inebriated) people.
                        </p>
                        <p className={styles.introduction_p}>
                            While I hate airports, but I am a champion at sleeping on planes.
                            I really like dogs, but Maine Coon cats just are my thing, sorry.
                        </p>
                    </article>
                    

const longText =    <article className={`${styles.introductionText} ${styles.textLong}`}>
                        <span className={styles.introductionSpan}>hey! I'm Matt, I code stuff.</span>
                        <p className={styles.introduction_p}>
                            I enjoy building functional user-friendly UIs with minimalistic designs that place content and type in the spotlight.
                            When building projects I certainly value performance and pretty typefaces.
                            I started coding in the beginning of the covid pandemic firstly because I'd already known all of Netflix by then and
                            secondly because I wanted to build and maintain my own photography website and blog (working on it).
                        </p>
                        <p className={styles.introduction_p}>
                            Outside of coding I had been doing some freelance photography (www.matthallala.com) before covid struck, some documentary.
                            some portrait work. I enjoy photography very much privately, so in general I tend to hoard cameras and lenses, and prints, and
                            hard drives, and take lots of pictures of all kinds.
                            I'm also very into music (who isn't, though) and have quite a collection of records — I used to DJ and organise club parties
                            extensively (in the hundreds), but only do it for fun now and just sharing music that I like with whoever wants to listen, cause that's fun.
                        </p>
                        <p className={styles.introduction_p}>
                            I kind of hate airports, they stress me out, but I am a champion at sleeping on planes, but who said teleportation was gonna be easy?
                            This is a little tricky to grasp I hear, but I have two Maine Coons even though they don't live with me, so I guess that'd be some kind of
                            shared custody situation, plus the fluff. Anyway once my blog is up do expect lots of cat pics ("watch this space").
                            Funnily enough for the past half a year or so I've been walking a dog that isn't mine, how bizarre.

                            PS I can operate a snowcat. "Useless" you may say, but have you seen " The Shining"?
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
                    {buttonValue} version
        </button>
    )
}

const Introduction = () => {
    const [textVersion, setTextVersion] = useState("short");

    return (
        <section className={styles.introduction}>
            { textVersion === 'short' ? shortText : longText }
            <div className={styles.buttonContainer}>
                <TextButton buttonValue="short" textVersion={textVersion} setTextVersion={setTextVersion} />
                <TextButton buttonValue="long"  textVersion={textVersion} setTextVersion={setTextVersion}  />
            </div>
        </section>
        
    )
}

export default Introduction;