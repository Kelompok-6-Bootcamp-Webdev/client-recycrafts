/* eslint-disable @typescript-eslint/no-unused-vars */
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/LandingPage/Header';
import Footer from './components/LandingPage/Footer';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import ProductPage from './pages/Product';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>  {/* Tambahkan Router di sini */}
      <Header />
      <Routes>
        {/* Rute Beranda */}
        <Route path="/" element={<HomePage />} />

        {/* Rute Halaman Produk */}
        <Route path="/products" element={<ProductPage />} />

        {/* Rute Halaman Login */}
        <Route path="/login" element={<LoginPage />} />

        {/* Route Detail Product */}
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
