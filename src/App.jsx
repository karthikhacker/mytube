import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Home from './pages/Home';
import Video from './pages/Video';
import History from './pages/History';
import { useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <BrowserRouter>
      <div className="px-4">
        <Navbar setShowSidebar={setShowSidebar} />
        <div className="h-full h-max-[1200px] bg-white shadow-md w-full">
          <Routes>
            <Route exact path="/" element={<Home showSidebar={showSidebar} />} />
            <Route exact path="/video/:catId/:videoId" element={<Video />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
