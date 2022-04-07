import React from 'react';
import './app.css'
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Topbar } from "./components/Topbar/Topbar";
import { Home } from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/users" element={ <UserList /> } />
          <Route path="/user/:userId" element={ <User/> } />
          <Route path="/newUser" element={ <NewUser/> } />
          <Route path="/products" element={ <ProductList/> } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
