import React from "react";
import styles from "../../Styles/ProfileCard.module.css"

const ProfileCard = () => {
    return (
        <>
            <div className={styles.ProfileCard_parent}>
                <div className={styles.image_container}>
                    <img src="https://preview.redd.it/how-strong-is-jiraiya-v0-0hdtt6zrqycb1.jpg?width=450&format=pjpg&auto=webp&s=2a4969be966363c03b43dd59788f110d3929f6ca" alt="jiraiya" />
                </div>
                <div className={styles.user_details}>
                    username
                    <br />
                    title
                    <br />
                    notestextarea
                    <br />
                </div>
            </div>
        </>
    )
}

export default ProfileCard