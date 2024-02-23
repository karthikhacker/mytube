import axios from "axios";
import { useEffect, useState } from "react"
import { API_KEY } from '../apiKey';

const useFetch = (url, videoId) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {

        const fetchData = async () => {
            setLoading(true)
            const response = await axios.get(url)
            setLoading(false)
            setData(response.data?.items)
        }
        fetchData()
    }, [videoId])
    return { data, loading }
}

export default useFetch