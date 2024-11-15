import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Component/Global/Header/Header';
import Footer from './Component/Global/Footer/Footer';
import Home from './Component/Page/Home/Home';
import Shop from './Component/Page/Shop/Shop';
import { Routes, Route } from 'react-router-dom';

import Detail from './Component/Details/Details';
import ListProduct from './Component/PROPS/ListProduct/ListProduct';
import './App.css';
import AboutUs from './Component/Page/AboutUs/AboutUs';
import Login from './Component/Page/Login/Login';
import Register from './Component/Page/Login/Register';
import Account from './Component/Page/Login/Account';
import Cart from './Component/Page/Cart/Cart';
import ForgotPassword from './Component/Page/Login/ForgotPassword';
import Wholesale from './Component/Page/Wholesale/Wholesale';
import Order from './Component/Page/Order/Order';



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:category" element={<Shop />} />
        <Route path="/list" element={<ListProduct />} />
        <Route path="/product/:slug" element={<Detail />} />
        <Route path="/search/:slug" element={<Shop/>}></Route>
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/wholesale" element={<Wholesale />} />
        <Route path="/profile" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order/>} />

        
        <Route path="/forgot-password" element={<ForgotPassword />} />
      
      </Routes>
      <Footer />
    </>
  );
}

export default App;
