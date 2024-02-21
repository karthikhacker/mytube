import axios from "axios"
import { API_KEY } from "../apiKey"
import useFetch from "../utils/useFetch"
import millify from "millify"
import moment from "moment"

const PlayVideo = ({ videoId }) => {
    const { data, loading } = useFetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);

    // const { channelData } = useFetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${data[0]?.snippet?.channelId}&key=${API_KEY}`)
    // //console.log(data);
    // console.log(channelData);
    return (
        <div>
            <iframe className="rounded-2xl" width="980" height="500" src={`https://www.youtube.com/embed/${videoId}`} title="Create YouTube Clone Using React JS | Build Complete Website Like YouTube In React JS 2024" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
            </iframe>
            <h3 className="font-bold text-xl mt-4">{data[0]?.snippet?.title}</h3>
            <div className=" bg-gray-200 px-8 py-2 mt-2 rounded-2xl">
                <div>
                    <img src="" />
                    <h4>{data[0]?.snippet?.channelTitle}</h4>

                </div>
                <p className=" flex gap-1 font-bold text-sm">
                    <span>{millify(data[0]?.statistics?.viewCount)}</span>
                    <span>{moment(data[0]?.snippet?.publishedAt).fromNow()}</span>
                </p>
                <p className="font-thin text-sm">{data[0]?.snippet?.description.slice(0, 250)}</p>
            </div>
            <p className="mt-2 font-bold">{millify(data[0]?.statistics?.commentCount)} comments</p>
        </div>
    )
}

export default PlayVideo