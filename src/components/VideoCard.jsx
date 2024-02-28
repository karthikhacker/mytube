import { Link } from "react-router-dom"

const VideoCard = ({ video }) => {
    return (
        <div className="lg:h-60 max-sm:h-60 w-full  max-sm:w-full   shadow-xl mb-4 cursor-pointer">
            <Link to={`/video/${video?.id?.videoId}`} >
                <img className="rounded-md" src={video?.snippet?.thumbnails?.medium?.url} alt={video?.snippet?.title} />
                <div className="mt-2 px-2">
                    <h5 className="lg:text-sm max-sm:text-xs font-bold font-sans">{video?.snippet?.title.slice(0, 60)}</h5>
                </div>
            </Link>
        </div>
    )
}

export default VideoCard