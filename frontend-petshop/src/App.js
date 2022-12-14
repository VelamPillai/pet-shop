import { Routes, Route } from 'react-router-dom';

import './App.css';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main.js'
import User from './components/user/User.js';
import Signup from './components/user/Signup.js';
import Login from './components/user/Login.js';

function App() {
  return (
    <div className="w-3/4 mx-auto p-5 h-screen">
      <Header />
      
      <Routes>
        <Route path="/user">
          <Route index={true} element={<User />} />
          <Route index={false} path="signup" element={<Signup />} />
          <Route index={false} path="login" element={<Login />} />
        </Route>
      </Routes>
      <Main className='min-h-screen'/>
      <Footer />
    </div>
  );
}

export default App;
