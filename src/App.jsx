import { BrowserRouter, Routes, Route,Navigate  } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/footer";
import BookNow from "./pages/Booknow";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booknow" element={<BookNow />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        {/* <Route path="/aboutus" element={< />} /> */}
  {/* Wrong route -> home */}
  {/* // <Route path="*" element={<Navigate to="/" replace />} /> */}
      </Routes>
      
      <Footer/>
    </BrowserRouter>
  );
}

export default App;