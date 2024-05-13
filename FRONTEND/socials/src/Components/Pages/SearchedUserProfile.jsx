import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import styled from "../../Styles/SearchedUserprofile.module.css"

const SearchedUserProfile = ({user}) => {
    return (
        <>
            {/* <div className={styles.rough}> */}

            <div className={styled.parent_container}>
                <div className={styled.image_container}>
                    <img src={user.avatar_url} alt="sdfv" />
                </div>
                <div className={styled.user_details}>
                    <h3>{user.login}</h3>
                    <h4>{user.name}</h4>
                    <p>{user.bio}</p>
                </div>
                <div className={styled.links}>
                    <div>
                        <p><BsGithub /></p>
                    </div>
                    <div>
                        <p><BsTwitterX /></p>
                        <p><BsLinkedin /></p>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

export default SearchedUserProfile;
