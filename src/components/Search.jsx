import { useParams } from "react-router-dom"

const Search = () => {
    const { searchTerm } = useParams();
    console.log(searchTerm);
    return (
        <div>Search</div>
    )
}

export default Search