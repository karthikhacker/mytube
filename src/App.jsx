import { BrowserRouter, Route, Routes } from "react-router-dom"
import Feed from "./components/Feed"
import Video from './components/Video';
import Search from "./components/Search";
import Navbar from "./components/Navbar";
import ChannelDetails from "./components/ChannelDetails";

const App = () => {
    return (
        <BrowserRouter>
            <div className="px-4">
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Feed />} />
                    <Route exact path="/video/:id" element={<Video />} />
                    <Route exact path="/channel/:id" element={<ChannelDetails />} />
                    <Route exact path="/search/:term" element={<Search />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App