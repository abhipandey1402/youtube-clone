import React, { useEffect } from "react";
import "../App.css";

const VideoList = ({ videos, videoChosen }) => {

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        videoChosen(videos[0])
    }, [videos])

    return (
        <div id="videosList">
            {
                videos &&
                videos.map((video, index) => (
                    <div key={index}
                        onClick={() => videoChosen(video)}
                        id="listVideo">
                        <img
                            src={video.snippet.thumbnails.default.url}
                            alt={video.snippet.title}
                        />
                        <p>{video.snippet.title.slice(0, 50) + "..."}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default VideoList;

