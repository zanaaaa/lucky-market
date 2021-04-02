import React from 'react';
import styles from './StyleHeader.js';
import './headerCss.css';
import SeeYou from '../see-you-component/SeeYou.js';

const LuckyMarket = "LUCKY MARKET";
const Header = () => {
    return (
        <div style={styles.headerStyle}>
            <div style={styles.title} className="link">
                {LuckyMarket}
            </div>
            <div className="seeYou">
                Uskoro...
            </div>
        </div>
    );
}
export default Header;