import millify from "millify";
import { API_KEY } from "../apiKey"
import useFetch from "../utils/useFetch"
import moment from "moment";
import { useParams } from "react-router-dom";

const VideoCard = () => {
    const { videoId } = useParams()
    const { data } = useFetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`, videoId)
    return (
        <div className="basis-1/2">
            <div>
                <iframe className="rounded-xl" width="966" height="503" src={`https://www.youtube.com/embed/${videoId}`}></iframe>
            </div>
            <div className="mt-2">
                <h3 className=" font-extrabold text-lg">{data[0]?.snippet?.title}</h3>
            </div>
            <div className="bg-gray-200 px-2 py-4 rounded-lg mt-4">
                <div className="flex gap-2">
                    <span>{millify(data[0]?.statistics?.viewCount)} views</span>
                    <span>{moment(data[0]?.snippet?.publishedAt).fromNow()}</span>
                </div>
                <p className="text-sm mt-2">{data[0]?.snippet?.description.slice(0, 250)}</p>
            </div>
        </div>
    )
}

export default VideoCard