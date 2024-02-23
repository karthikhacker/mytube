import millify from "millify";
import moment from "moment";
import { Link } from "react-router-dom";

const RecommendedCard = ({ rec }) => {
    console.log(rec)
    return (
        <div>
            <Link className="cursor-pointer" to={`/video/${rec?.snippet?.categoryId}/${rec?.id}`}>
                <div className="flex gap-2">
                    <img className="w-56 mb-2 rounded-md" src={rec?.snippet?.thumbnails?.medium?.url} />
                    <div className="w-48">
                        <h5 className="text-sm font-bold">{rec?.snippet?.title}</h5>
                        <span className="text-xs font-light mr-2">{millify(rec?.statistics?.viewCount)}</span>
                        <span className="text-xs font-light">{moment(rec?.snippet?.publishedAt).fromNow()}</span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default RecommendedCard