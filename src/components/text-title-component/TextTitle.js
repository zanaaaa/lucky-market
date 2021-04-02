import React from 'react';
import styles from './StyleTextComponent.js';

const TextTitle = ({children}) => {
    return (
        <div style={styles.outerWrapper}>
            {children}
        </div>

    );
}
export default TextTitle;