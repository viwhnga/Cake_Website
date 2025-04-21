import logo from './logo.svg';
import './App.css';
// import '../../public/styles/home.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Page/Home';
import Header from '../Header/Header';
import About from '../Page/About';
import ProductDetail from '../Page/ProductDetail';
import Shop from '../Page/Shop';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element ={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/productDetail" element={<ProductDetail/>} /> 
                <Route path="/shop" element={<Shop/>} />
        </Routes>
        </BrowserRouter> 
  );
}

export default App;
