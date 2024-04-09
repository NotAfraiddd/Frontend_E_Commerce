import Navbar from '@components/navbar/Navbar';
import Cart from '@pages/cart/Cart';
import Login from '@pages/login/Login';
import Product from '@pages/product/Product';
import Shop from '@pages/shop/Shop';
import ShopCategory from '@pages/shop/ShopCategory';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route path="/mens" element={<ShopCategory category="mens" />}></Route>
          <Route path="/womens" element={<ShopCategory category="womens" />}></Route>
          <Route path="/kids" element={<ShopCategory category="kids" />}></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
