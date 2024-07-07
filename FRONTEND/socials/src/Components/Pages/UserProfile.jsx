import React, { useEffect, useState } from "react";
import styles from "../../Styles/UserProfile.module.css"
import ProfileCard from "./ProfileCard";
import Feeds from "./Feeds";
import { BsImages } from "react-icons/bs";
import { BsCameraVideoFill } from "react-icons/bs";
import { BsEmojiSmileFill } from "react-icons/bs";
import {useDispatch, useSelector} from "react-redux"
import { addPostDescription } from "../../Redux/Actions/postAction";
import Photospage from "./Photospage";

const UserProfile = () => {

    const [description, setDescription] = useState("")
    const [isRemove, setIsRemove] = useState(true)
    const [media, setMedia] = useState(null)
    const [fileData, setFileData] = useState(null)
    const dispatch = useDispatch();
    // useEffect(()=>{
        const posts = useSelector(state => state.description);

        console.log("pp", posts)

    // },[description])

    const handleDescription =(e)=>{
        setDescription(e.target.value)
    }
    const sendData = ()=>{
        dispatch(addPostDescription({ description, fileData }))
        setDescription("")
    }

    const addMedia = (e)=>{ //fn to add media
        setMedia(e.target.files[0])
    }

    //fn to preview the images or video added
    const handlePreview=()=>{
        const reader = new FileReader();
        reader.onload = (event) => {
            setFileData(event.target.result);
        };
        reader.readAsDataURL(media);
    }
    // console.log("filedata", fileData)

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
                                <button onClick={handlePreview} type="submit" className={styles.preview_btn}>preview</button>
                                <label htmlFor="img">
                                <p>
                                    <BsImages />
                                </p>
                                </label>
                                <input name="video" id="video" 
                                type="file"
                                accept="video/mp4,video/x-m4v,video/*"
                                />
                                <label htmlFor="video">
                                <p>
                                    <BsCameraVideoFill />
                                </p>
                                </label>
                                <input name="img" id="img"
                                type="file" 
                                accept="image/*"
                                multiple
                                onChange={addMedia}
                                />
                                <p>
                                    <BsEmojiSmileFill />
                                </p>
                            </div>
                        </div>
                    </div>
                    <Feeds />
                </div>
                <div>
                    
                    {/* <h2>Activity log</h2> */}
                    <div>
                        {
                            (isRemove && description!="" || fileData!=null) ? (
                                <div className={styles.changed}>
                                    <h2>Preview Post</h2>
                                    <p id="preview-post-p">{description}</p>

                                    <div id="preview-post">
                                        <img src={fileData} alt="filepic" />
                                    </div>
                                    <button id="sendpost-btn"
                                        onClick={sendData}
                                    >Post</button>
                                </div>
                            ) :(
                                <div>
                                    <Photospage />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserProfile;
