import { Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import ProductListingPage from './components/ProductListingPage/ProductListingPage';
import ShoppingCartPage from './components/ShoppingCartPage/ShoppingCartPage';
import './App.css';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/plants" element={<ProductListingPage />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </>
  )
}

export default App;
