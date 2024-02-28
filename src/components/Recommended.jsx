import axios from "axios"
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const Recommended = ({ catId }) => {
    const [videos, setVideos] = useState([]);

    const fetchSuggestedVideo = async () => {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&videoCategoryId=${catId}&key=AIzaSyBwAwhZ-tCrTF8Edbv4uQB7PynqW9fcDKQ`);
        console.log(res.data);
        setVideos(res.data?.items);
    }
    useEffect(() => {
        fetchSuggestedVideo()
    }, [catId])
    return (
        <div>
            {videos?.map(video => <VideoCard key={video?.id} video={video} />)}
        </div>
    )
}

export default Recommended