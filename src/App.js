import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './components/Main';
import React, { useState,useEffect } from "react";
function App() {
  const [loginUser, setLoginUser] = useState(false);
  const navigate = useNavigate();
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
        <Route path="/chat" element={<Main setLoginUser={setLoginUser}/>} />
        :
        <>
        <Route path="/" element={<Login  setLoginUser={setLoginUser}/>} />
        <Route path="register" element={<Register />} />
        </> 
        }
      </Routes>
  );
}

export default App;
