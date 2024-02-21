import { useParams } from "react-router-dom"
import PlayVideo from "../components/PlayVideo"
import Recommended from "../components/Recommended"

const Video = () => {
    const { catId, videoId } = useParams()
    return (
        <div className="flex gap-2 px-4 py-2">
            <PlayVideo videoId={videoId} />
            <Recommended catId={catId} />
        </div>
    )
}

export default Video