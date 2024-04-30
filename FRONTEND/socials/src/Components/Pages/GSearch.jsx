import React, { useState } from "react";
import Navbar from "../../Routes/Navbar";
import NosearchPage from "./NosearchPage";
import styles from "../../Styles/GSearch.module.css"
import SearchedUserProfile from "./SearchedUserProfile";


const GSearch = () => {
    const [inputValue, setInputValue] = useState("")
    console.log(inputValue);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }
    return (
        <>
            <Navbar />
            <div className={styles.search_parent_container}>
                <div >

                    <input type="text"
                        placeholder="search for github users..."
                        // className={styles`.${search_field}`} 
                        className={`${styles.search_field} ${inputValue ? styles.moved : ''}`}

                        onChange={handleInputChange}
                    />

                </div>
                <br />
                <div className={styles.user_details}>

                    {
                        inputValue.length > 0 ? (
                            // <h1>hello</h1>
                            <div className={styles.users_field}>
                                <SearchedUserProfile />
                                <SearchedUserProfile />
                                <SearchedUserProfile />

                                {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus atque nisi assumenda libero excepturi est, temporibus minima eaque magnam, a ab laborum labore voluptatibus maiores esse dolorem, fugit rerum impedit.</p> */}

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