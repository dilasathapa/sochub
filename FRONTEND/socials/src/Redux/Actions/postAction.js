import {ADD_DESCRIPTION } from "../actionType";

let addPostDescription = (postData)=>{
    let postObj = {
        "content" : postData.description,
        "postimage" : postData.file
    }

    return async(dispatch, getState) =>{
        try {
            let url = await fetch("http://localhost:8080/addposts", {
                method : 'POST',
                headers:{
                    "Content-Type" : "application/josn",
                    // authorization: `Bearer $`
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

export {addPostDescription}