import logo from "../Assets/youtubeLogo.png"
import SearchBar from "./SearchBar";

const Navbar = ({addVideos}) =>{


    return(
        <div className="navbar">
            <img src={logo} alt="YoutubeLogo"></img>
            <SearchBar addVideos={addVideos} />
        </div>
    )
}

export default Navbar;
