import React from "react";
import Navbar from "../Routes/Navbar";
import firstsectionsvg from "./../assets/illustrations/wfh_1.svg"
import styles from "./../Styles/LandingHome.module.css"
import secondpic from "./../assets/illustrations/secondpic.svg"
import thirdpic from "./../assets/illustrations/thirdpic.svg"

const Landingpage = () => {
    return (
        <>
            <Navbar />
            <div className={styles.parent_container}>
                <section className={styles.section1}>
                    <img src={firstsectionsvg} alt="svg1" />
                    <div>
                        <div className={styles.heading}>
                            <h1>Discover</h1>
                            <h1>Explore</h1>
                            <h1>Analyze</h1>
                        </div>
                        <p> a powerful web application that enables users to easily
                            explore and discover repositories and user profiles on GitHub</p>
                        <button>Let's Explore</button>
                    </div>
                </section>

                
                <section className={styles.middle_container}>
                    <p> With seamless integration with the GitHub API, our project provides
                        a user-friendly interface to search
                        for GitHub users and access
                        detailed information about their
                        repositories and activities.</p>
                    <img src={secondpic} alt="foldergirl" />
                </section>
                <section className={styles.third_container}>
                    <img src={thirdpic} alt="thirdpic" />
                    <p> With seamless integration with the GitHub API, our project provides
                        a user-friendly interface to search
                        for GitHub users and access
                        detailed information about their
                        repositories and activities.</p>
                </section>
            </div>
        </>
    )
}

export default Landingpage;

