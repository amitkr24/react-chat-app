import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword ,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

function Login({setLoginUser}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    
    const  signIn = async (e) => {
        e.preventDefault();
        console.log(email,password);
        signInWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
            console.log(res,"userss"); 
            setLoginUser(true);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }

    function googleSignIn() {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    }
    const handleGoogleSignIn = async (e) => {
        e.preventDefault();
        try {
          await googleSignIn();
          setLoginUser(true);
          navigate("/chat");
        } catch (error) {
          console.log(error.message);
        }
      };
  return (
    <div>
        <div className="container">
            <div className="screen">
                <div className="screen__content">
                    <form className="login">
                        <div className="login__field">
                            <i className="login__icon fas fa-user"></i>
                            <input type="text" className="login__input" placeholder="User name / Email" value={email}
                            onChange={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="login__field">
                            <i className="login__icon fas fa-lock"></i>
                            <input type="password" className="login__input" placeholder="Password" value={password}
                            onChange={(e) => {setPassword(e.target.value)}} />
                        </div>
                        <button className="button login__submit" onClick={signIn}>
                            <span className="button__text">Log In Now</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                        <p style={{ padding: '7px' ,fontSize: '14px',}}>Do not have account <Link to={"/register"}>Register here</Link></p>
                        <p onClick = {handleGoogleSignIn} style={{ padding: '7px',fontSize: '14px',textAlign: 'center',background: 'green',color: '#fff',borderRadius: '20px',fontFamily: 'system-ui',cursor:'pointer' }}>Sign in with Gmail</p>

                    </form>
                </div>
                <div className="screen__background">
                    <span className="screen__background__shape screen__background__shape4"></span>
                    <span className="screen__background__shape screen__background__shape3"></span>		
                    <span className="screen__background__shape screen__background__shape2"></span>
                    <span className="screen__background__shape screen__background__shape1"></span>
                </div>		
            </div>
        </div>
    </div>
  )
}

export default Login