import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Products from "./pages/products/Products";
import Footer from "./components/footer/Footer";
import Contact from "./pages/contactus/Contact";
import Aboutus from "./pages/aboutus/Aboutus";
import Watch from "./pages/products/Watch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/watches" element={<Products />} />
          <Route path="/watch-about/:watchMark/:watchName" element={<Watch />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
