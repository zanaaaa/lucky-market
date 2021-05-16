import React from 'react';
import styles from './StyleHeader.js';
import './headerCss.css';

const Header = () => {
    const pageReload = () => {window.location.reload(false);}
    return (
        <div style={styles.headerStyle} className="header">
            <div style={styles.title}  onClick={pageReload}>
                <span className="link">Lucky Market</span> 
            </div>
            <div className="seeYou">
                Dobrodošli!                
            </div>
        </div>
    );
}
export default Header;