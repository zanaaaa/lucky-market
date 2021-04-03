import React from 'react';
import styles from './StyleHeader.js';
import './headerCss.css';
import SeeYou from '../see-you-component/SeeYou.js';

const LuckyMarket = "LUCKY MARKET";
const Header = () => {
    const pageReload = () => {window.location.reload(false);}
    return (
        <div style={styles.headerStyle}>
            <div style={styles.title}  onClick={pageReload}>
                <span className="link">Lucky Market</span> 
            </div>
            <div className="seeYou">
                Uskoro...
            </div>
        </div>
    );
}
export default Header;