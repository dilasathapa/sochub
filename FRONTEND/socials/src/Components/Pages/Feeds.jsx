import React, { useState } from "react";
import NopostsComp from "./NopostsComp";

const Feeds = () => {

    let [count, setCount] = useState(0)
    return (
        <>

            {
                count == 0 ? (<NopostsComp />) : (<h2>data here</h2>) 
            }
            

        </>
    )
}

export default Feeds;