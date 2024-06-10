import React from "react";
import HomeNavbar from "../Routes/HomeNavbar";
import firstsectionsvg from "./../assets/illustrations/wfh_1.svg"
import styles from "./../Styles/LandingHome.module.css"
import secondcolored from "./../assets/illustrations/second_colored.svg"
import thirdcolored from "./../assets/illustrations/third-colored.svg"
import Footer from "./Footer";

const Landingpage = () => {
    return (
        <>
            <HomeNavbar />
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
                    <img src={secondcolored} alt="foldergirl" />
                </section>
                <section className={styles.third_container}>
                    <img src={thirdcolored} alt="thirdpic" />
                    <p> effortlessly coordinate and connect
                        for virtual meetings, eliminating the
                        challenges of coordinating time
                        zones and availability.

                        Whether it’s a professional conference
                        or a casual virtual meet-up easily
                        schedule and join virtual meetings,
                        fostering effective collaboration
                        and communication regardless of
                        geographical distances
                    </p>
                </section>

            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default Landingpage;

