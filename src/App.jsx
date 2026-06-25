import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FashionMania from './pages/FashionMania'
import InsightBoard from './pages/InsightBoard'
import CineTrack from './pages/CineTrack'
import About from './pages/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/fashion-mania" element={<FashionMania />} />
        <Route path="/projects/insightboard" element={<InsightBoard />} />
        <Route path="/projects/cinetrack" element={<CineTrack />} />
        <Route path="/about" element={<About />} />
      </Routes>
       <Footer />
    </BrowserRouter>
  )
}

export default App