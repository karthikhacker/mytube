import { Link } from "react-router-dom"

const ChannelCard = ({ channel }) => {
    console.log(channel)
    return (
        <div key={channel?.id?.channelId} className="shadow-xl py-4 h-60">
            <Link to={`/channel/${channel?.id?.channelId}`}>
                <img className={` w-[160px] m-auto   rounded-full`} src={channel?.snippet?.thumbnails?.medium?.url} />
                <div className="text-center mt-4">
                    <h5>{channel?.snippet?.title}</h5>
                </div>
            </Link>
        </div >
    )
}

export default ChannelCard