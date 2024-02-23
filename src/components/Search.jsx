import { useEffect, useState } from "react"
import useFetch from "../utils/useFetch";
import { API_KEY } from "../apiKey";
import axios from "axios";
import SearchList from "./searchList";
import { Link } from "react-router-dom";

const Search = () => {
    const [open, setOpen] = useState(false);
    const [searchText, setSearchText] = useState("")
    const [searchData, setSearchData] = useState([])

    useEffect(() => {
        const fetchSearchResult = async () => {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchText}&key=${API_KEY}`);
            setSearchData(res.data.items);
            console.log(res.data.items)
        }
        let timer = setTimeout(() => fetchSearchResult(), 200);
        return () => {
            clearTimeout(timer);
        }
    }, [searchText])
    return (
        <div className="relative">
            <label className="input input-md  w-[600px] rounded-3xl  input-bordered flex items-center gap-2" onClick={() => setOpen(!open)}>
                <input type="text" className="grow" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
            {open && (<ul className="w-[580px] bg-white shadow-lg px-2 py-2 mt-2 rounded-md absolute z-10 ml-2">
                {searchData?.map(item => (
                    <li key={item?.id?.videoId} className="px-4 mb-4 w-80">
                        <Link className="flex gap-4" to={`/video/${item?.snippet?.categoryId}/${item?.id?.videoId}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                            </svg>
                            <span className=" w-full text-xs font-bold">{item?.snippet?.title}</span>
                        </Link>
                    </li>
                ))}
            </ul>)
            }
        </div >
    )
}

export default Search