import axios from "axios";
import { useEffect, useState } from "react"
import { API_KEY, BASE_URL } from "../constants";

const useFetch = (url, selectedCategory, id) => {
    const [data, setData] = useState([]);
    const [channelData, setChannelData] = useState([]);
    const [loading, setLoading] = useState(false);

    const options = {
        method: 'GET',
        url: `${BASE_URL}`,
        params: {
            maxResults: '50'
        },
        headers: {
            'X-RapidAPI-Key': `${API_KEY}`,
            'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
        }
    }
    const fetchFromAPI = async () => {
        const res = await axios.get(`${BASE_URL}/${url}`, options)
        setData(res.data.items);
        setChannelData(res.data.items);
    }
    useEffect(() => {
        fetchFromAPI()
    }, [selectedCategory, id])
    return {
        data, loading, channelData
    }
}

export default useFetch