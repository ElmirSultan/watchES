import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Featured from "./pages/featured/Featured";
import Products from "./pages/products/Products";
import New from "./pages/new/New";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/watches" element={<Products />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
