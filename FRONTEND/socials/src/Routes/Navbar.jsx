import React from "react";
import styles from "../Styles/Navbar.module.css"
// import AllRoutes from "./AllRoutes";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BiSolidMessageDetail } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { BiSolidGroup } from "react-icons/bi";
import { BiSolidBell } from "react-icons/bi";
import { BiSolidUserRectangle } from "react-icons/bi";

function Navbar() {
    return (
        <>
            <div className={styles.firstdiv}>first navbar</div>
            <div className={styles.seconddiv}>
                <h3 ><Link to='/feed'><AiFillHome className={styles.noti_icons} /><p className={styles.noti_texts}>HOME</p></Link></h3>
                <h3><Link to='/registration'><BiSearchAlt className={styles.noti_icons} /><p className={styles.noti_texts}>SEARCH</p></Link></h3>
                <h3><Link to='/githubsearch/users'><BiLogoGithub className={styles.noti_icons} /><p className={styles.noti_texts}>G SEARCH</p></Link></h3>
                <h3><Link><BiSolidMessageDetail className={styles.noti_icons} /><p className={styles.noti_texts}>MESSAGES</p></Link></h3>
                <h3><Link><BiSolidGroup className={styles.noti_icons} /><p className={styles.noti_texts}>GROUPS</p></Link></h3>
                <h3><Link><BiSolidBell className={styles.noti_icons} /><p className={styles.noti_texts}>NOTIFICATIONS</p></Link></h3>
                <h3><Link to='/profile'><BiSolidUserRectangle className={styles.noti_icons} /><p className={styles.noti_texts}>PROFILE</p></Link></h3>                
            </div>
        </>
    )
}

export default Navbar;