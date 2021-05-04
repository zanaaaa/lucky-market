import React from 'react';
import styles from './StyleFooter.js';
import logo from '../../assets/images/logo.ico';
import fb from '../../assets/images/fb.svg';
import ig from '../../assets/images/ig.svg';
import li from '../../assets/images/li.svg';
import phone from '../../assets/images/phone.svg';
import email from '../../assets/images/mail.svg';


const Footer = () => {
    return (
        <div style={styles.outerWrapper} className="footer">
            <div style={styles.logo}><img style={{width:"25%",  marginRight: "2%"}} src={logo}></img> © Lucky Market 2021</div>
            <div style={styles.contact}>
                <img style={{width:"15%"}} src={email}></img>aida.korman@gmail.com
            </div>
            <div style={styles.phone}>
                <img style={{width:"15%"}} src={phone}></img>+38761558710
            </div>
            <div style={styles.fb}>
                <img style={{width:"30%"}} src={fb}></img>
            </div>
            <div style={styles.ig}>
                <img style={{width:"30%"}} src={ig}></img>
            </div>
            <div style={styles.code}>Design & code by <img style={{width:"10%", marginLeft: "2%"}} src={li}></img></div>
        </div>
    );
}
export default Footer;