import React, { useState } from 'react';
import SectionHeader from '../sectionHeader';
import Skill from '../skill';
import * as styles from './skills.module.css'



const Puzzle = (props) => {
    const {string, method, setMethod} = props;
    return (
        <div className={styles.puzzleContainer}>
        <br />
        <p>
            Complete the "puzzle" function (by typing in the correct Java Script method and 
            parameters) so that the function returns true.
        </p>
        <div className={styles.puzzle}>
            <p>
                const string = "{string}";
            </p>

            <br />
            <p>
                {`
                    function puzzle( ) {
                `}
            </p>
            <span>
                {`
                    newStr = string.
                `}
            </span>
            <input className={styles.puzzleInput} placeholder="hihi" value={method} onChange={ (e) => setMethod(e.target.value) } />
            <span>
                    ;                
            </span>
            <p>
                {`
                    if (newStr === "future") {
                `}
            </p>
            <p>
                {`
                        return true;
                `}
            </p>
            <p className={styles.indent}>
                {`
                    }
                `}
            </p>
            <p>
                {`
                    } 
                `}
                    
            </p>
        </div>
    </div>

    )
}

const Skills = () => {

    const [method, setMethod] = useState('');
    
    const string = "Robert Makłowicz is the future president of Poland."
    const correctAnswer = "slice(24, 30)"

    // function puzzle(string) {
    //     const a = string.slice(24,30);
    //     console.log(a)
    //     return a
    // }

    // puzzle(string, method)

    const skillChart = <div className={styles.skillChart}>
                            <Skill name="HTML" level="3" />
                            <Skill name="CSS" level="3" />
                            <Skill name="JS" level="2" />
                            <Skill name="React" level="2" />
                            <Skill name="GraphQL" level="1" />
                            <Skill name="Gatsby" level="2" />
                            <Skill name="NextJS" level="2" />
                            <Skill name="Contentful" level="2" />
                            <Skill name="NodeJS" level="1" />
                            <Skill name="Git" level="2" />
                            <p className={styles.adobe}>Adobe</p>
                            <Skill name="XD" level="2" />
                            <Skill name="PS" level="3" />
                            <Skill name="LR" level="4" />
                            

                        </div>

    const contentExtended =     <div className={styles.hiding}>
                                    <div className={styles.left}>
                                        <p className={styles.extended__heading}>
                                            Skill chart:
                                        </p>
                                        <div>
                                            {skillChart}
                                        </div>
                                    </div>
                                    <div className={styles.right}>
                                        <p className={styles.extended__heading}>
                                            resume/CV:
                                        </p>
                                        <div className={styles.cvContainer}>

                                        </div>
                                    </div>
                                </div>

    const contentHidden = <div className={styles.contentHidden}><p className={styles.contentHidden__p}>content is hidden,<br /> solve the puzzle to view</p></div>;

    
    return (
        <section className={styles.skillsContainer}>
            <SectionHeader>
                resume:
            </SectionHeader>
            <article className={styles.skills}>
                <p className={styles.disclaimer}>
                    This section requires that you solve a little JavaScript puzzle to view.
                </p>
                <Puzzle string={string} method={method} setMethod={setMethod} />
            </article>
            { method !== correctAnswer ? contentHidden : null }
            <article className={styles.skillsExtended}>
                { method === correctAnswer ? contentExtended : null }
            </article>
        </section>

    )
}

export default Skills;