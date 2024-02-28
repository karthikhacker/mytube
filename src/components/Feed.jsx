import { useState } from "react";
import useFetch from "../utils/useFetch"
import Sidebar from "./Sidebar"
import Videos from "./Videos";

const Feed = () => {
    const [selectedCategory, setSelectedCategory] = useState("new");

    const { data, loading } = useFetch(`search?part=snippet,id&q=${selectedCategory}`, selectedCategory);

    if (loading) return 'LOADING....'
    return (
        <div className="lg:flex sm:shrink-0 gap-1 my-1">
            <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <div className="bg-white shadow-lg basis-full py-4 px-4 ">
                <Videos data={data} />
            </div>
        </div>
    )
}

export default Feed 