import { CiHome } from "react-icons/ci";
import { IoIosMusicalNotes } from "react-icons/io";
import { MdOutlineLocalMovies } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { TfiCup } from "react-icons/tfi";
import { FaRegNewspaper } from "react-icons/fa";
import { PiDressLight } from "react-icons/pi";
const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
    return (
        <div className="bg-white shadow-lg basis-[250px] px-4 py-2">
            <ul className="my-4">
                <li className={`${selectedCategory === 'new' ? 'bg-red-500 text-white flex items-center gap-2 mb-4 cursor-pointer px-2 py-2 rounded-3xl' : 'flex items-center gap-2 mb-4 cursor-pointer'}`} onClick={() => setSelectedCategory("new")}>
                    <CiHome />
                    New
                </li>
                <li className={`${selectedCategory === 'music' ? 'bg-red-500 text-white flex items-center gap-2 mb-4 cursor-pointer px-2 py-2 rounded-3xl' : 'flex items-center gap-2 mb-4 cursor-pointer'}`} onClick={() => setSelectedCategory("music")} >
                    <IoIosMusicalNotes />
                    Music
                </li>
                <li className={`${selectedCategory === 'movies' ? 'bg-red-500 text-white flex items-center gap-2 mb-4 cursor-pointer px-2 py-2 rounded-3xl' : 'flex items-center gap-2 mb-4 cursor-pointer'}`} onClick={() => setSelectedCategory("movies")}>
                    <MdOutlineLocalMovies />
                    Movies
                </li>
                <li className={`${selectedCategory === 'shopping' ? 'bg-red-500 text-white flex items-center gap-2 mb-4 cursor-pointer px-2 py-2 rounded-3xl' : 'flex items-center gap-2 mb-4 cursor-pointer'}`} onClick={() => setSelectedCategory("shopping")}>
                    <CiShoppingCart />
                    Shopping
                </li>
                <li className={`${selectedCategory === 'sports' ? 'bg-red-500 text-white flex items-center gap-2 mb-4 cursor-pointer px-2 py-2 rounded-3xl' : 'flex items-center gap-2 mb-4 cursor-pointer'}`} onClick={() => setSelectedCategory("sports")}>
                    <TfiCup />
                    Sports
                </li>
                <li className={`${selectedCategory === 'news' ? 'bg-red-500 text-white flex items-center gap-2 mb-4 cursor-pointer px-2 py-2 rounded-3xl' : 'flex items-center gap-2 mb-4 cursor-pointer'}`} onClick={() => setSelectedCategory("news")}>
                    <FaRegNewspaper />
                    News
                </li>
                <li className={`${selectedCategory === 'fashion' ? 'bg-red-500 text-white flex items-center gap-2 mb-4 cursor-pointer px-2 py-2 rounded-3xl' : 'flex items-center gap-2 mb-4 cursor-pointer'}`} onClick={() => setSelectedCategory("fashion")}>
                    <PiDressLight />
                    Fashion
                </li>
            </ul>
        </div >
    )
}

export default Sidebar