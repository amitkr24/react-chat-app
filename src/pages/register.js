import React from 'react'
import { auth, db, storage } from "../firebase";
import { addDoc, collection } from "firebase/firestore"; 
import { Link, useNavigate } from "react-router-dom";

function register() {


    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
        const Object = {
          'first_name': e.target.first_name.value,
          'last_name' : e.target.last_name.value,
          'email'     : e.target.email.value,
          'password'  : e.target.password.value,
          'file'      : e.target.files[0],
        }
        const docRef = await addDoc(collection(db, "users"),Object);
        console.log("Document written with ID: ", docRef.id);


      } catch (error) {
        console.error("Error adding document: ", e);
      }
    }
  return (
    <div>
        <div className="container">
            <div className="screen" style={{width:"600px"}}>
                <div className="screen__content">
                    <form className="login" style={{width:"600px"}} onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="login__field">
                                    <i className="login__icon fas fa-user"></i>
                                    <input type="text" className="login__input" placeholder="First Name" name="first_name"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="login__field">
                                    <i className="login__icon fas fa-user"></i>
                                    <input type="text" className="login__input" placeholder="Last Name" name="last_name"/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-md-12">
                            <div className="login__field">
                                <i className="login__icon fas fa-user"></i>
                                <input type="email" className="login__input" placeholder="Email" name="email"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="login__field">
                                <i className="login__icon fas fa-lock"></i>
                                <input type="password" className="login__input" placeholder="Password" name="password"/>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="mb-3">
                                <input className="form-control" type="file" id="formFile"/>
                            </div>
                        </div>
                        <button className="button login__submit">
                            <span className="button__text">Register</span>
                            <i className="button__icon fas fa-chevron-right"></i>
                        </button>
                        <p style={{ padding: '7px' ,fontSize: '14px', textAlign:'right'}}>Already have account <Link to={"/login"} style={{color:'#ffff'}}>Login here</Link></p>
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

export default register