import React from "react";
import { BsGithub } from "react-icons/bs";

import styles from "../../Styles/SearchedUserProfile.module.css"

const SearchedUserProfile = () => {
    return (
        <>
            {/* <div className={styles.rough}> */}

            <div className={styles.parent_container}>
                <div className={styles.image_container}>
                    <img src="https://preview.redd.it/how-strong-is-jiraiya-v0-0hdtt6zrqycb1.jpg?width=450&format=pjpg&auto=webp&s=2a4969be966363c03b43dd59788f110d3929f6ca" alt="sdfv" />
                </div>
                <div className={styles.user_details}>
                    <h3>jiraiya sama</h3>
                    <h4>erro sennin</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem et nihil veritatis pariatur molestias quidem magnam, cum nobis, ipsam eligendi ex alias nemo cupiditate. Saepe consectetur temporibus alias vero!</p>
                </div>
                <div className={styles.links}>
                    <div>
                        <p><BsGithub /></p>
                    </div>
                    <div>
                        <p><BsGithub /></p>
                        <p><BsGithub /></p>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default SearchedUserProfile;

