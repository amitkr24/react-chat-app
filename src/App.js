import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from './pages/login';
import Register from './pages/register';
import Main from './components/Main';
import React, { useState,useEffect } from "react";
function App() {
  const navigate = useNavigate();
  const loginUser = localStorage.getItem('isLoggedIn');
  console.log('loginUser',loginUser);
  useEffect(() => {
    if(!loginUser){
      navigate('/')
    }else{
      navigate('/chat');
    }
  }, [loginUser])
  
  return (
    
      <Routes>
        {(loginUser) ? 
        <Route path="/chat" element={<Main/>} />
        :
        <>
        <Route path="/" element={<Login/>} />
        <Route path="register" element={<Register />} />
        </> 
        }
      </Routes>
  );
}

export default App;
