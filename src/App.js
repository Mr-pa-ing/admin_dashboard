import React from 'react';
import './app.css'
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Topbar } from "./components/Topbar/Topbar";
import { Home } from './pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserList from './pages/userList/UserList';
import User from './pages/user/User';

function App() {
  return (
    <Router>
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:id" element={<User/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
