import { API_KEY } from "../apiKey";
import useFetch from "../utils/useFetch"
import Card from "./Card"

const Feed = () => {
    const { data, loading } = useFetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=0&key=${API_KEY}`);
    if (loading) return 'Loading...'
    return (
        <div className="w-full">
            <div className="grid grid-cols-4 gap-2">
                {data.map(video => <Card video={video} key={video.id} />)}
            </div>

        </div>
    )
}

export default Feed