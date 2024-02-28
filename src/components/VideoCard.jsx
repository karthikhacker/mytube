import { Link } from "react-router-dom"

const VideoCard = ({ video }) => {
    return (
        <div className=" h-60  bg-base-100 shadow-xl mb-2 cursor-pointer">
            <Link to={`/video/${video?.id?.videoId}`}>
                <img className="rounded-md" src={video?.snippet?.thumbnails?.medium?.url} alt={video?.snippet?.title} />
                <div className="mt-2 px-2">
                    <h5 className="text-sm font-bold font-sans">{video?.snippet?.title.slice(0, 60)}</h5>
                </div>
            </Link>
        </div>
    )
}

export default VideoCard