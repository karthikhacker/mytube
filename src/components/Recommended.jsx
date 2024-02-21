import millify from "millify";
import { API_KEY } from "../apiKey"
import useFetch from "../utils/useFetch"
import moment from "moment";
import { Link } from "react-router-dom";

const Recommended = ({ catId }) => {
    const { data, loading } = useFetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${catId}&key=${API_KEY}
`);
    console.log(data);
    return (
        <div className="shadow-lg  basis-1/2">
            <div>
                {
                    data.map(item => {
                        console.log(item)
                        return (
                            <Link key={item?.id} to={`/video/${item?.categoryId}/${item?.id}`}>
                                <div key={item?.id} className="flex gap-2 mb-2">
                                    <div className="basis-1/2">
                                        <img className="w-full rounded-2xl" src={item?.snippet?.thumbnails?.default?.url} />
                                    </div>
                                    <div className="ml-2 w-32">
                                        <h6 className="font-bold text-xs">{item?.snippet?.title}</h6>
                                        <p className="mt-2 text-sm">{item?.snippet?.channelTitle}</p>
                                        <div className="flex gap-2">
                                            <span className="text-xs">{millify(item?.statistics?.viewCount)}</span>
                                            <span className="text-xs">{moment(item?.snippet?.publishedAt).fromNow()}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Recommended