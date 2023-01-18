

import { Routes, Route , Navigate } from "react-router-dom";


import Dog from "./components/petType/Dog";


import './App.css';
import Account from "./components/user/Account.js";
import Notification from "./components/user/Notification.js";
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main.js';
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




function App() {
  return (
    <div className="h-screen md:w-[100vw] flex flex-col">
      <Header />
      <div className="w-3/4 mx-auto mt-[15rem] ">

      <Routes>
        <Route path="/">
          <Route
            index={true}
            path="/"
            className="min-h-screen"
            element={<Home />}
          />
        </Route>
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
        
        <Route index={false} path="dog" element={<Dog />} /> 
    
        <Route path="*" element={<Navigate to="/" replace />}
    />
        
      </Routes>

      </div>
      <Footer />
    </div>
  );
}

export default App;
