import millify from "millify"
import moment from "moment"
import { Link } from "react-router-dom"

const Card = ({ video }) => {
    return (
        <div className="px-2 py-4  cursor-pointer">
            <Link to={`/video/${video?.snippet?.categoryId}/${video?.id}`}>
                <div className="mb-1 rounded-lg ">
                    <img src={video?.snippet?.thumbnails?.medium?.url} className="rounded-lg" />
                </div>
                <p className="font-bold text-sm">{video?.snippet?.title}</p>
                <div className="flex gap-2">
                    <span className="font-thin text-sm">{video?.snippet?.channelTitle}</span>
                    <span className="font-thin text-sm">{millify(video?.statistics?.viewCount)}</span>
                    <span className="font-thin text-sm">{moment(video?.snippet?.publishedAt).fromNow()}</span>
                </div>
            </Link>
        </div>
    )
}

export default Card