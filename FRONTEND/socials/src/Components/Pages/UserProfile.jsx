import React, { useState } from "react";
import styles from "../../Styles/UserProfile.module.css"
import ProfileCard from "./ProfileCard";
import Feeds from "./Feeds";
import { BsImages } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import { BsEmojiSmileFill } from "react-icons/bs";

const UserProfile = () => {

    const [description, setDescription] = useState("")
    const [isRemove, setIsRemove] = useState(true)

    const handleDescription =(e)=>{
        setDescription(e.target.value)
    }
    const sendData = ()=>{
        console.log("hello")
    }

    return (
        <>
            <div className={styles.parent_container}>
                <div>

                    <ProfileCard />
                </div>
                <div>
                    <div className={styles.addpost_container}>
                        <div>
                            <textarea name="descrption"
                                className={styles.adddescription_container}
                                placeholder="type something here..."
                                onChange={handleDescription}
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
                    
                    <h2>Activity log</h2>
                    <div>
                        {
                            (isRemove && description!="") ? (
                                <div className={styles.changed}>
                                    <h2>Preview Post</h2>
                                    <p id="preview-post-p">{description}</p>

                                    <div id="preview-post">

                                        {/* <img src={fileData} alt="filepic" /> */}


                                    </div>
                                    <button id="sendpost-btn"
                                        onClick={sendData}
                                    >Post</button>
                                </div>
                            ) :("kbhk")
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile;
