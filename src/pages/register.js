import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link,  Navigate, useNavigate  } from "react-router-dom";
function Register() {
   // define useStates
    const  [name, setName] = useState('');
    const  [email, setEmail] = useState('');
    const  [password, setPassword] = useState('');
    const navigate = useNavigate();

    //handle submit form 
    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (res) => {
            const user = res.user;
            await updateProfile(user, {
                displayName: name,
            });
            console.log(user)
            navigate("/");
        })
      
      } catch (error) {
        console.error("Error adding document: ", e);
      }
    }
  return (
    <div className="login-container">
        <div className="container">
            <div className="background register-background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form className="register-form" onSubmit={handleSubmit}>
                <h3>Register Here</h3>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="Name" id="name" autoComplete="off"  onChange={(e) => {setName(e.target.value)}} />

                <label htmlFor="username">Email</label>
                <input type="email" placeholder="Email or Phone" id="username"  autoComplete="off" onChange={(e) => {setEmail(e.target.value)}} />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" autoComplete="off" onChange={(e) => {setPassword(e.target.value)}} />

                <button>Register</button>
                <div className="social">
                    <p style={{width:'100%',textAlign:'center'}}>Already have account <Link to={"/"} style={{textDecoration:'none',color:'#b8b5b2'}}><i>Sign In Here</i></Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register