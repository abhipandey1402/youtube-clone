import axios from "axios";

// let key = process.env.REACT_APP_YOUTUBE_API_KEY;
let key = process.env.REACT_APP_YOUTUBE_API_KEY;


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params:{
        key: key,
        maxResults: 25,
        part: "snippet"
    }
})

