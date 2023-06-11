import React, { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import '../css/login.css';

function Login() {

  // define useState
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState('');
    const navigate = useNavigate();
    
   // signIn with email password  
    const  signIn = async (e) => {
        e.preventDefault();
        console.log(email,password);
        signInWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
            console.log(res,"userss");
            setLocalStorage("isLoggedIn",true); 
            navigate("/chat");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError('Please Enter Valid Email/Password')
          console.log(errorCode);
          console.log(errorMessage);
        });
    }

    // google signIn with popup
    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }

    // handle google signIn
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
          let token = await googleSignIn();
          setLocalStorage("isLoggedIn",true);
          navigate("/chat");
        } catch (error) {
          console.log(error.message);
        }
      };

      // set local storage to check userlogin or not
      const setLocalStorage = (key, value) => {
        const now = new Date().getTime();
        const expirationTime = now + (1 * 30 );
        localStorage.setItem(key, value, {
          expires: expirationTime,
        });
      };
  return (
    <div className="login-container">
        <div className="container">
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form>
                <h3>Login Here</h3>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username" autoComplete="off" value={email} onChange={(e) => {setEmail(e.target.value)}} />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password"  value={password} autoComplete="off" onChange={(e) => {setPassword(e.target.value)}} />

                <button onClick={signIn}>Log In</button>
                <p className="error"style={{color:'#ffff',width:'100%',textAlign:'center',fontWeight:'400',marginTop:'13px',background:'red',borderRadius:'3px'}}>{error}</p>
                <div className="social">
                  <div className="go" onClick = {handleGoogleSignIn} style={{cursor:'pointer'}}><i className="fab fa-google" ></i>  Google</div>
                  <Link to={"/register"} style={{textDecoration:'none'}}><div className="fb" style={{cursor:'pointer'}}><i className="fab fa-facebook"></i>  Sign up </div></Link>
                </div>
               
            </form>
        </div>
    </div>
  )
}

export default Login