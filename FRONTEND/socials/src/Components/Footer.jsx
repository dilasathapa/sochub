import React from "react";
import styles from "./../Styles/Footer.module.css"

const Footer =()=>{
    return (
        <>
        <div className={styles.footer_parent}>
            <div className={styles.footerlinks}>
                <li>legal</li>
                <li>Privacy Policy</li>
                <li>Privacy Center</li>
                <li>Cookies</li>
                <li>Your Privacy Choices</li>
                <li>Your Privacy Choices</li>

                
            </div>
            <div>
                <p>India</p>
                <p>&copy; 2024 Sochh</p>
            </div>
        </div>
        </>
    )
}

export default Footer;