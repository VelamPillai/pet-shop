import { Routes, Route } from "react-router-dom";

import "./App.css";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import User from "./components/user/User.js";
import Signup from "./components/user/Signup.js";
import Login from "./components/user/Login.js";

function App() {
  return (
    <div className="w-3/4 mx-auto p-5">
      <Header />

      <Routes>
      <Route path="/user">
        < Route  index={true} element={<User />} />          
          <Route index={false} path="signup" element={<Signup />} />
          <Route index={false} path="login" element={<Login />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
