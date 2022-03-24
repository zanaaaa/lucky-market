import React from 'react';
import styles from './StyleFooter.js';
import logo from '../../assets/images/logo.ico';
import fb from '../../assets/images/fb.svg';
import ig from '../../assets/images/ig.svg';
import li from '../../assets/images/li.svg';
import phone from '../../assets/images/phone.svg';
import email from '../../assets/images/mail.svg';
import { mobileQuery, useMediaQuery } from "../../helpers/MediaQuery";



const Footer = () => {
  let isMobile = useMediaQuery(mobileQuery);
    return (
        <div className="footer">
            <div style={isMobile ? styles.logoMobile : styles.logo}><img style={isMobile ? styles.logoImgMobile : styles.logoImg} src={logo}></img> © Lucky Market 2021</div>
            <div style={isMobile ? styles.contactMobile : styles.contact}>
                <img style={isMobile ? {width:"25px", marginRight: "5px"} : {width:"25px"}} src={email}></img>info@luckymarket.ba
            </div>
            <div style={isMobile ? styles.phoneMobile : styles.phone}>
               <img style={isMobile ? {width:"25px", marginRight: "5px"} : {width:"25px"}} src={phone}></img>+387603006273
            </div>
            <div style={styles.fb}>
                <a href="https://www.facebook.com/LuckyMarket/?hc_location=ufi" target="_blank"><img style={{width:"25px"}} src={fb}></img></a>
            </div>
            <div style={styles.ig}>
                <a href="https://www.instagram.com/luckymarketsarajevo/" target="_blank"><img style={{width:"25px"}} src={ig}></img></a>
            </div>
            <div style={isMobile ? styles.codeMobile : styles.code}>Design & code by <a href="https://ba.linkedin.com/in/zana-garaplija-8199511b9" target="_blank"><img style={{width:"25px", marginLeft: "1vw", verticalAlign: "text-bottom"}} src={li}></img></a></div>
        </div>
    );
}
export default Footer;