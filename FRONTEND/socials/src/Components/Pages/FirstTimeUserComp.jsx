import React from "react";
import style from "../../Styles/FirstTimeUserComp.module.css"
import verifiedimg from "../../assets/illustrations/Vector.svg"

const FirstTimeUserComp = () => {
    return (
        <>
            <div className={style.parent_container}>
                <p>Congratulations 🎉</p>
                <h4>You are now a member of socials!</h4>
                <img src={verifiedimg} alt="verified user img" />
                <h3>Follow others to see their activities and build connections</h3>
                <h3>Let's all be socials!</h3>
            </div>
        </>
    )
}

export default FirstTimeUserComp;