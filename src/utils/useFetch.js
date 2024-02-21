import axios from "axios";
import { useEffect, useState } from "react"
import { API_KEY } from '../apiKey';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [channelData, setChannelData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await axios.get(url)
            //console.log(response.data.items);
            setLoading(false)
            setData(response.data?.items)
        }
        fetchData()
    }, [])
    return { data, loading, channelData }
}

export default useFetch