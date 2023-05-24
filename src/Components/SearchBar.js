import React, { useState, useEffect, useRef } from "react";
import youtube from "../Apis/youtube";
import { AiOutlineSearch } from "react-icons/ai";


const SearchBar = ({ addVideos }) => {
    const [searchTerm, setSearchTerm] = useState("TMKOC")
    const buttonRef = useRef(null);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            buttonRef.current.click();
        }
    };

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        getYoutubeVideos()
    }, [])

    function getYoutubeVideos() {

        youtube.get("/search", {
            params: {
                q: searchTerm,
                type: "video"
            }
        })
            .then((response) => addVideos(response.data.items))
            .catch((error) => console.log(error))

    }

    return (
        <div className="searchBar">
            <input type="text" placeholder="Search"
                onChange={e => setSearchTerm(e.target.value)}
                value={searchTerm}
                onKeyDown={handleKeyDown}
            />
            <button onClick={getYoutubeVideos} ref={buttonRef}> <AiOutlineSearch /> </button>
        </div>
    )

}
export default SearchBar;


