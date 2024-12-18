import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Shop from './pages/Shop';
import SingleBook from './pages/SingleBook';

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} /> 
          <Route path='/blog' element={<Blog />} />
          <Route path='/shop' element={<Shop />} />
          <Route path="/book/:id" element={<SingleBook />} />
          <Route path="/all-books/search/:search" element={<SingleBook />} />
        </Routes>
      </div>
    </>
  )
}

export default App