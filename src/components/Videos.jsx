import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ data }) => {
    return (
        <div className='grid grid-cols-4 gap-2'>
            {data?.map(item => (
                <div key={item?.id?.videoId}>
                    {item.id?.videoId && <VideoCard video={item} />}
                    {item?.id?.channelId && <ChannelCard channel={item} />}
                </div>
            ))}
        </div>
    )
}

export default Videos