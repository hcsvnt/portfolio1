import React, { useState } from 'react';
import { Link } from 'gatsby';
import SectionHeader from '../sectionHeader'
import Skill from '../skill';
import Puzzle from '../puzzle';
import Snip from "../../images/snip.jpg";
import * as styles from './resume.module.css';

const CvSnip = () => <img src={Snip} alt="CV snippet"></img>

const Resume = () => {

    const [method, setMethod] = useState('');
    
    const string = "Robert Makłowicz is the future president of Poland.";
    const correctAnswer = ["slice(24, 30)", "substr(24, 6)", "slice(24,30)", "substr(24,6)", 'split(" ")[4]', "split(' ')[4]",
                            "split(' ')[8-4]]", "split(' ')[8 - 4]]", 'split(" ")[8-4]]', 'split(" ")[8 - 4]]'];

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

    const contentExtended =     <article className={styles.hiding}>
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
                                        <Link to="/cv">
                                        <div className={styles.cvContainer}>
                                            <CvSnip />
                                        </div>
                                        </Link>
                                        
                                    </div>
                                </article>

    const contentHidden =   <article className={styles.contentHidden}>
                                <p className={styles.contentHidden__p}>content is hidden,<br />
                                    solve the puzzle to view
                                </p>
                            </article>;

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
            { !correctAnswer.includes(method) ? contentHidden : null }
            <article className={styles.skillsExtended}>
                { correctAnswer.includes(method) ? contentExtended : null }
            </article>
        </section>

    )
}

export default Resume;