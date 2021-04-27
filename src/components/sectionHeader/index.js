import React from 'react';
import * as styles from "./sectionHeader.module.css"

const SectionHeader = ({children}) => {
    return (
        <div className={styles.sectionHeader}>
            <p className={styles.sectionHeader__p}>
              {children}
            </p>
        </div>
    )
}

export default SectionHeader;