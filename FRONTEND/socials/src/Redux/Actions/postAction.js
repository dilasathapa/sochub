import {ADD_DESCRIPTION } from "../actionType";
import { GET_LOGGEDINUSERPOSTS } from "../actionType";

let addPostDescription = (postData)=>{
    let postObj = {
        "content" : postData.description,
        "postimage" : postData.fileData
    }

return async(dispatch, getState) =>{
        try {
            let url = await fetch("http://localhost:8082/addposts", {
                method : 'POST',
                headers:{
                    "Content-Type" : "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`

                },
                
                body : JSON.stringify(postObj)

            })
            let res = await url.json();
            console.log(res)
        } catch (error) {
                console.log(error.message)
        }
    }
}
let getloggedinuserposts = () => {
    return async (dispatch, getState) => {
        console.log("hello")
        try {
            let url = await fetch("http://localhost:8082/posts/loggedinuser", {
                method: 'GET',
                headers: {
                    "Content-Type" : "application/json",
                    authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
                },
            })

            let res = await url.json();
            console.log("es", res);
            dispatch({
                type: GET_LOGGEDINUSERPOSTS,
                payload: res,
            })

        } catch (error) {
            console.log(error)
            console.log(error.message)
        }
    }
}



export {addPostDescription, getloggedinuserposts}