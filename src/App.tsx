import { Footer } from '@components/footer/Footer'
import Navbar from '@components/navbar/Navbar'
import Cart from '@pages/user/cart/Cart'
import Login from '@pages/user/login/Login'
import Product from '@pages/user/product/Product'
import Shop from '@pages/user/shop/Shop'
import ShopCategory from '@pages/user/shop/ShopCategory'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { banner_mens, banner_kids, banner_women } from './images'
import { Admin } from '@pages/admin'
function App() {
  const role = localStorage.getItem('role')
  return (
    <div className='App'>
      <BrowserRouter>
        {role === 'admin' ? (
          <Routes>
            <Route path='/' element={<Navigate to='/admin' />} />
            <Route path='/admin' element={<Admin />} />
          </Routes>
        ) : (
          <>
            <Navbar />
            <Routes>
              <Route path='/' element={<Shop />}></Route>
              <Route path='/mens' element={<ShopCategory category='men' banner={banner_mens} />}></Route>
              <Route path='/womens' element={<ShopCategory category='women' banner={banner_women} />}></Route>
              <Route path='/kids' element={<ShopCategory category='kid' banner={banner_kids} />}></Route>
              <Route path='/product' element={<Product />}>
                <Route path=':productId' element={<Product />}></Route>
              </Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/login' element={<Login />}></Route>
            </Routes>
            <Footer />
          </>
        )}
      </BrowserRouter>
    </div>
  )
}

export default App
