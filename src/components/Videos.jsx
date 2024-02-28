import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';

const Videos = ({ data }) => {
    return (
        <div className='grid lg:grid-cols-4 max-sm:grid-cols-2 gap-2'>
            {data?.map(item => (
                <div key={item?.id?.videoId} className='max-sm:w-full'>
                    {item.id?.videoId && <VideoCard video={item} />}
                    {item?.id?.channelId && <ChannelCard channel={item} />}
                </div>
            ))}
        </div>
    )
}

export default Videos