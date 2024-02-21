import Card from "../components/Card"
import Feed from "../components/Feed"
import Sidebar from "../components/Sidebar"

const Home = ({ showSidebar }) => {
    return (
        <div className="flex gap-1">
            <Sidebar showSidebar={showSidebar} />
            <Feed />
        </div>
    )
}

export default Home