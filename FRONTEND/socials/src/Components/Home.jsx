import React from "react";
import Notes from "./Pages/Notes";
import Navbar from "../Routes/Navbar";
import styles from "../Styles/Home.module.css"
import { FaSquarePlus } from "react-icons/fa6";
import { FaFaceSmile } from "react-icons/fa6";
import ProfileCard from "./Pages/ProfileCard";
import Feeds from "./Pages/Feeds";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className={styles.container_parent}>
                {/* <Notes />  */}
                <div className={styles.container}>
                    <div className={styles.section1}>
                        
                        <ProfileCard />
                    </div>
                    <div className={styles.section2}>
                        <div className={styles.dailynotes}>
                            <img src="https://preview.redd.it/how-strong-is-jiraiya-v0-0hdtt6zrqycb1.jpg?width=450&format=pjpg&auto=webp&s=2a4969be966363c03b43dd59788f110d3929f6ca" alt="profile-pic" />
                            <textarea name="" id="" placeholder="What's in your thought?" className={styles.notestextarea}  >

                            </textarea>
                            <FaFaceSmile className={styles.smiles} />
                            <FaSquarePlus className={styles.addBtn} />

                        </div>
                        <Feeds />
                    </div>
                    <div className={styles.section3}></div>
                </div>


            </div> 
        </>
    )
}


export default Home;