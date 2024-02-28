import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import { API_KEY, BASE_URL } from "../constants";
import { Link } from "react-router-dom";

const Searchbar = () => {
    const [searchTerm, setSearchterm] = useState("");
    const [searchData, setSearchData] = useState([])
    const [open, setOpen] = useState(false);

    const options = {
        method: 'GET',
        url: `${BASE_URL}`,
        params: {
            maxResults: '10'
        },
        headers: {
            'X-RapidAPI-Key': `${API_KEY}`,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    }
    const fetchSearchResults = async () => {
        const res = await axios.get(`${BASE_URL}/search?q=${searchTerm}&part=snippet&order=date`, options);
        setSearchData(res.data.items);
    }
    useEffect(() => {
        const timer = setTimeout(() => fetchSearchResults(), 200);
        return () => {
            clearTimeout(timer);
        }
    }, [searchTerm])
    return (
        <div className="relative">
            <div className="border border-gray-300 w-[600px] flex items-center justify-between px-4  rounded-3xl " onClick={() => setOpen(!open)}>
                <input
                    type="text"
                    className="outline-0 border-0 py-2 w-80"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchterm(e.target.value)}
                />
                <IoIosSearch />
            </div>
            {searchTerm !== "" && (
                <ul className="w-[550px] bg-white ml-7 mt-1 absolute left-0 right-0 z-10  px-4 py-4 shadow-lg">
                    {searchData?.map(res => (
                        <Link to={`/search/${searchTerm}`} key={res?.id?.videoId}>
                            <li className="flex items-center gap-4 mb-4">
                                <IoIosSearch />
                                <h6 className="text-sm font-bold">{res?.snippet?.title.slice(0, 20)}</h6>
                            </li>
                        </Link>

                    ))}
                </ul>
            )}


        </div>

    )
}

export default Searchbar