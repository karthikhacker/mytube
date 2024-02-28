import { useParams } from "react-router-dom"
import useFetch from "../utils/useFetch";
import ChannelCard from './ChannelCard';
import Videos from "./Videos";

const ChannelDetails = () => {
    const { id } = useParams();
    const { data, loading } = useFetch(`channels?part=snippet,statistics&id=${id}`, id);
    const { channelData } = useFetch(`search?channelId=${id}&part=snippet&order=date`, id);

    console.log(data);
    return (
        <div>
            <div className="bg-gradient-to-r from-green-400  to-blue-500 h-[280px]">
            </div>
            <div className="mt-2 mb-2">
                <ChannelCard channel={data?.[0]} mt="-93px" />
                <Videos data={channelData} />
            </div>

        </div>
    )
}

export default ChannelDetails