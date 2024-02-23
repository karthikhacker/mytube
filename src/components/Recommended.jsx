import { API_KEY } from "../apiKey"
import useFetch from "../utils/useFetch"
import RecommendedCard from "./RecommendedCard";

const Recommended = ({ categoryId }) => {
    //console.log(categoryId)
    const { data, loading } = useFetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`);
    //console.log(data);
    if (loading) return "Loading..."
    return (
        <div>
            {data?.map(rec => <RecommendedCard key={rec.id} rec={rec} />)}
        </div>
    )
}

export default Recommended