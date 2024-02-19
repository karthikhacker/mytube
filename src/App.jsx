import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"
import Home from './pages/Home';
import Video from './pages/Video';
import History from './pages/History';

function App() {

  return (
    <BrowserRouter>
      <div className="px-4">
        <Navbar />
        <div className="flex h-full">
          <Sidebar />
          <div className="h-96 bg-white shadow-md w-full">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/video" element={<Video />} />
              <Route exact path="/history" element={<History />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
