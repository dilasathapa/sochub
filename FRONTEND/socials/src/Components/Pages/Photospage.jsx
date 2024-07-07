import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getloggedinuserposts } from "../../Redux/Actions/postAction";
import { useSelector } from "react-redux";
// import "../../Styles/Photospage.css"


const Photospage=()=>{
    const dispatch = useDispatch();
    const counter = useSelector(state => state.loggedinuserposts);
    console.log("counter", counter)

    useEffect(() => {
        dispatch(getloggedinuserposts())
    }, [])

    return (
        <>
        <div>
            <p id="posts-activity-log">Activity log</p>
            {
                (counter.length > 0) ? (<div id="photospage-grid">
                        {
                           counter.map((e)=>(
                            <div id="dis-photos">
                                <img src={e.postimage} alt="postimage" />
                            </div>
                           ))
                        }
                    </div>
                ) : (
                    <div>
                        <p>you haven't posted yet</p>
                    </div>
                )
            }
        </div>
        </>
    )
}

export default Photospage;