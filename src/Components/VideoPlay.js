import "../App.css";

const VideoPlay = ({ video }) => {

    return (
        <div id="playedVideo">
            {
                video == null ? <h1>Loading .... </h1> : (
                    <>
                        <div id="video">
                            <iframe width="95%" height="515" src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen ></iframe>
                        </div>
                        <h3>{video.snippet.title}</h3>
                    </>
                )
            }
        </div>
    )
}
export default VideoPlay;
