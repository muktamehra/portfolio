import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import FashionMania from './pages/FashionMania'
import About from './pages/About'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/fashion-mania" element={<FashionMania />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App