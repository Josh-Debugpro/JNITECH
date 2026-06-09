import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProductsPage from "./pages/ProductsPage";

import CpuPage from "./pages/CpuPage";
import GpuPage from "./pages/GpuPage";
import RamPage from "./pages/RamPage";
import SsdPage from "./pages/SsdPage";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Main Pages */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Category Pages */}
        <Route path="/cpu" element={<CpuPage />} />
        <Route path="/gpu" element={<GpuPage />} />
        <Route path="/ram" element={<RamPage />} />
        <Route path="/ssd" element={<SsdPage />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;