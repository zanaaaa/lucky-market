import React from 'react';
import styles from './StyleTextComponent.js';

const TextComponent = ({children}) => {
    return (
        <div style={styles.outerWrapper}>
            {children}
        </div>

    );
}
export default TextComponent;