import React, { useEffect, useState } from "react";
import Navbar from "../../Routes/Navbar";
import NosearchPage from "./NosearchPage";
import styled_GS from "../../Styles/GSearch.module.css"
import SearchedUserProfile from "./SearchedUserProfile";


const GSearch = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchHistory, setSearchHistory] = useState([])
    const [users, setUsers] = useState([])

    console.log(import.meta.env.VITE_APP_GITHUB_ACCESS_TOKEN)
    console.log("users", users)
    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    }

    // using debouncing
    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            if (searchTerm.length != 0) {
                setSearchHistory((prevHistory) => [
                    ...prevHistory, searchTerm
                ])
            }
        }, 500)
        return () => clearTimeout(debounceTimer)
    }, [searchTerm])

    //searching the user from github api
    useEffect(() => {
        async function getData() {
            if (searchHistory[searchHistory.length - 1] != undefined && searchHistory[searchHistory.length - 1] != "") {
                const apiUrl = `https://api.github.com/users/${searchHistory[searchHistory.length - 1]}`;
                fetch(apiUrl, {
                    headers: {
                        Authorization: `Token ${import.meta.env.VITE_APP_GITHUB_ACCESS_TOKEN}`
                    }
                })
                    .then(response => response.json())
                    .then(data => setUsers((prevUserData) => [...prevUserData, data]))
                    .catch(error => console.log(error))
            }
        }
        getData()
    }, [searchHistory])



    return (
        <>
            <div className={styled_GS.search_parent_container}>
                <div >

                    <input type="text"
                        placeholder="search for github users..."
                        // className={styled_GS`.${search_field}`} 
                        className={`${styled_GS.search_field} ${searchTerm ? styled_GS.moved : ''}`}

                        onChange={handleInputChange}
                    />

                </div>
                <br />
                <div className={styled_GS.users}>

                    {
                        searchTerm.length > 0 ? (
                            // <h1>hello</h1>

                            <div className={styled_GS.users_field}>
                            {users.map((user, i) => (
                                    <SearchedUserProfile user={user} key={i} />
                            ))}
                                </div>
                        ) : (

                            <NosearchPage />
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default GSearch;