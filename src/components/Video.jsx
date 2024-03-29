import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { API_KEY, BASE_URL } from '../constants';
import ReactPlayer from "react-player";
import millify from "millify";
import Recommended from "./Recommended";

const Video = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    const fetchVideoDetails = async () => {
        const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyBwAwhZ-tCrTF8Edbv4uQB7PynqW9fcDKQ`);
        setData(res.data?.items);
    }
    useEffect(() => {
        fetchVideoDetails()
    }, [id])
    console.log(data[0])
    return (
        <div className="lg:flex  gap-1 mt-2">
            <div className=" w-full flex-5 bg-white shadow-lg px-2 py-2">
                <iframe className="rounded-xl lg:w-full max-sm:w-[450px] max-sm:mx-auto max-sm:h-[300px]" width="980" height="500" src={`https://www.youtube.com/embed/${id}`} ></iframe>
                <div className="mt-2">
                    <h3 className="font-bold text-neutral-900">{data?.[0]?.snippet?.title}</h3>
                    <div className="flex items-center justify-between">
                        <Link to={`/channel/${data[0]?.snippet?.channelId}`}>
                            <h5>{data[0]?.snippet?.channelTitle}</h5>
                        </Link>
                        <div className="flex gap-4">
                            <span>{millify(data[0]?.statistics?.viewCount)} views</span>
                            <span className="flex gap-2"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>
                                {millify(data[0]?.statistics?.likeCount)} Likes</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-white ">
                <Recommended catId={data[0]?.snippet?.categoryId} />
            </div>
        </div >
    )
}

export default Video