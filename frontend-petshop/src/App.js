
import { Routes, Route , Navigate } from "react-router-dom";

import './App.css';
import Account from './components/user/Account.js';
import Notification from './components/user/Notification.js';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Login from './components/user/Login.js';
import Signup from './components/user/Signup.js';
import Profile from './components/user/Profile.js';
import LegalNotice from './components/footer/products/LegalNotice';
import AboutUs from './components/footer/products/AboutUs';
import PriceDrop from './components/footer/products/PriceDrop';
import NewProducts from './components/footer/products/NewProducts';
import BestSales from './components/footer/products/BestSales';
import Delivery from './components/footer/company/Delivery';
import SecurePayment from './components/footer/company/SecurePayment';
import Contact from './components/footer/company/Contact';
import Sitemap from './components/footer/company/Sitemap';
import Stores from './components/footer/company/Stores';

import Home from './pages/Home.js';
import PetMainPage from "./components/petType/PetMainPage.js";
import PetSubMenuPage from "./components/petType/PetSubMenuPage.js";
import Brand from "./components/petType/Brand.js"
import Product from "./components/petType/Product";

import Admin from "./components/admin/Admin.js"
import AddProduct from "./components/admin/AddProduct";
import DisplayProduct from "./components/admin/DisplayProduct";
import UpdateProduct from "./components/admin/UpdateProduct";
import DisplayCustomers from "./components/admin/DisplayCustomers";
import DisplayOrders from "./components/admin/DisplayOrders";
import UpdateOrder from "./components/admin/UpdateOrder";

import SearchedProduct from "./components/header/SearchedProduct";


function App() {
  return (
    <div className="h-screen md:w-[100vw] flex flex-col">
      <Header />
      <div className="w-3/4 mx-auto mt-[9rem] md:mt-[8rem] ">
        <Routes>
          <Route  path="/">
            <Route
              index={true}
              path="/"
              className="min-h-screen"
              element={<Home />}
              
            />
          </Route>
          <Route index={false} path="searchedProduct" element={<SearchedProduct/>} />
          <Route index={false} path="login" element={<Login />} />
          <Route index={false} path="signup" element={<Signup />} />
          <Route index={false} path="profile" element={<Profile />} />
          <Route
            index={false}
            path="products/legal-notice"
            element={<LegalNotice />}
          />

        
        <Route index={false} path="login" element={<Login />} />
        <Route index={false} path="signup" element={<Signup />} />


        <Route index={false} path="profile" element={<Profile />} />

     
        <Route
          index={false}
          path="products/legal-notice"
          element={<LegalNotice />}
        />
        <Route index={false} path="products/about-us" element={<AboutUs />} />
        <Route
          index={false}
          path="products/price-drop"
          element={<PriceDrop />}
        />
        <Route
          index={false}
          path="products/new-products"
          element={<NewProducts />}
        />
        <Route
          index={false}
          path="products/best-sales"
          element={<BestSales />}
        />
        <Route
          index={false}
          path="products/best-sales"
          element={<BestSales />}
        />

        <Route index={false} path="company/delivery" element={<Delivery />} />
        <Route
          index={false}
          path="company/secure-payment"
          element={<SecurePayment />}
        />
        <Route index={false} path="company/contact" element={<Contact />} />
        <Route index={false} path="company/sitemap" element={<Sitemap />} />
        <Route index={false} path="company/stores" element={<Stores />} />
        <Route index={false} path="profile" element={<Profile />} /> 
        <Route index={false} path="account" element={<Account />} />
          <Route index={false} path="notification" element={<Notification />} />
          
          <Route index={false} path="admin" element={<Admin />} />
          <Route index={false} path="addProduct" element={<AddProduct />} />
          <Route index={false} path="displayProduct" element={<DisplayProduct />} />
          <Route index={false} path="updateProduct" element={<UpdateProduct />} />
          <Route index={false} path="displayCustomers" element={<DisplayCustomers />} />
          <Route index={false} path="displayOrders" element={<DisplayOrders />} />
          <Route index={false} path="updateOrder" element={<UpdateOrder />} />
          
          
        <Route index={false}   path="petMainPage" element={<PetMainPage />} / >
        
          <Route index={false} path="petSubMenuPage" element={<PetSubMenuPage />} />
          <Route index={false} path="brand" element={<Brand />} />
          <Route index={false} path="product" element={<Product/>} /> 

         <Route path="*" element={<Navigate to="/" replace />} 
    />
        
      </Routes>


      </div>
      <Footer />
    </div>
  );
}
export default App;
