import React from "react";
import styles from "../../Styles/Sectionleft.module.css"

const Sectionleft =()=>{
    return (
        <>
        <div className={styles.main_container}>

            <div>groups <span>9+</span></div>
            <div>messages <span>0</span></div>
            <div>requests <span>0</span></div>
        </div>
        </>
    )
}

export default Sectionleft;