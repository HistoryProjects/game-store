import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Favorites from './pages/Favorites/Favorites';
import Cart from './pages/Cart/Cart';
import ProductInfo from './pages/ProductInfo/ProductInfo';
import Search from './pages/Search/Search'
import ScrollTop from './components/ScrollTop';
import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';


function App() {

  return (
    <div className="App">
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/products/:genre' element={<Products />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/product_info/:name/:id' element={<ProductInfo />} />
          <Route path='/search' element={<Search />} />
          <Route path='/login' element={<SignIn />} />
          <Route path='/register' element={<SignUp />} />
      </Routes>

      <ScrollTop/>
    </div>
  );
}

export default App;
