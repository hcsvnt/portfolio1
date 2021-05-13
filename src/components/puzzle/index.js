import React from 'react';
import * as styles from './puzzle.module.css';


const Puzzle = (props) => {
    const {string, method, setMethod} = props;
    return (
        <article className={styles.puzzleContainer}>
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
                    const newStr = string.
                `}
            </span>
            <input  className={styles.puzzleInput} placeholder="your solution" 
                    value={method} onChange={ (e) => setMethod(e.target.value) } />
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
    </article>

    )
}

export default Puzzle