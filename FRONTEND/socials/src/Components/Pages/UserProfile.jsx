import React from "react";
import styles from "../../Styles/UserProfile.module.css"
import ProfileCard from "./ProfileCard";
import Feeds from "./Feeds";
import { BsImages } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import { BsEmojiSmileFill } from "react-icons/bs";

const UserProfile = () => {
    return (
        <>
            <div className={styles.parent_container}>
                <div>

                    {/* <ProfileCard /> */}
                </div>
                <div>
                    <div className={styles.addpost_container}>
                        <div>
                            <textarea name="descrption"
                                className={styles.adddescription_container}
                                placeholder="type something here..."
                            ></textarea>
                            <div className={styles.icons_container}>
                                <button>preview</button>
                                <p>
                                    <BsImages />
                                </p>
                                <p>
                                    <BsCameraVideoFill />
                                </p>
                                <p>
                                    <BsEmojiSmileFill />
                                </p>
                            </div>
                        </div>
                    </div>
                    <Feeds />
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}

export default UserProfile;
