import { useParams } from "react-router-dom"
import VideoCard from "../components/VideoCard";
import Recommended from "../components/Recommended";


const Video = () => {
    const { categoryId, videoId } = useParams();
    return (
        <div className="flex gap-2 px-4 py-2">
            <VideoCard videoId={videoId} />
            <Recommended categoryId={categoryId} />
        </div>
    )
}

export default Video