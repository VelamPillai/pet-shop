import { Routes, Route , Navigate } from "react-router-dom";

import "./App.css";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import Main from "./components/main/Main.js";
import Login from "./components/user/Login.js";
import Signup from "./components/user/Signup.js"
import Profile from "./components/user/Profile.js"
import Account from "./components/user/Account.js";
import Notification from "./components/user/Notification.js";



function App() {
  return (
    <div className="    h-screen md:w-[100vw] flex flex-col" >
      
      <div className=" ">
      <Header />
      </div>
      
      
        
      <div className="w-3/4 mx-auto mt-[15rem] ">
      <Routes>
        <Route path="/">
          <Route
            index={true}
            path="/"
            className="min-h-screen"
            element={<Main />}
          />
        </Route>
        <Route index={false} path="login" element={<Login />} />
        <Route index={false} path="signup" element={<Signup />} />

        <Route index={false} path="profile" element={<Profile />} /> 
        <Route index={false} path="account" element={<Account />} />
        <Route index={false} path="notification" element={<Notification />} />
    
        <Route path="*" element={<Navigate to="/" replace />}
    />
        
      </Routes>
      </div>
        <Footer /> 
       
    </div>
  );
}

export default App;
