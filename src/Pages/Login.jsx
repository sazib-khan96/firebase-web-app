import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { createUserWithEmailAndPassword, getAuth, signInWithPopup, signOut } from "firebase/auth";
import { provider } from "../fairbase/Fairbase.config";

const auth = getAuth();

const Login = () => {
  const [user, setuser] = useState(null);

  const SignIngooglehandler = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const loginUser = result.user;
        toast.success("LogIn successfullY");
        setuser(loginUser);
        console.log(loginUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signOutGooogle = () => {
    signOut(auth)
      .then(() => {
        toast.error("Successfully LogOut");
        setuser(null);
      })
      .catch((err) => {
        console.log(err);
      });
  };

// email and passoord authentication 
  const passwordAuthihandle = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value
    
    createUserWithEmailAndPassword(auth,email,password)
    .then( result => {
      const users = result.user
      console.log(users)
    })
    .catch( error => {
      console.log(error)
    })
  }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            {/* form  */}
            <form onSubmit={passwordAuthihandle}>
              <label className="label" >Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password"  name='password'className="input" placeholder="Password" />
              
              <button type="submit" className="btn btn-neutral mt-4">Sign Up</button>
            </form>

            {/* Conditional btn section  */}
            <div className="flex gap-5">
              {user ? (
                <button
                  onClick={signOutGooogle}
                  className="btn btn-neutral mt-4"
                >
                  Sign Out
                </button>
              ) : (
                <button
                  onClick={SignIngooglehandler}
                  className="btn btn-neutral mt-4"
                >
                  SignUp with Google
                </button>
              )}
            </div>
          </div>
        </div>
        {user && (
          <div>
            <img src={user.photoURL} alt="" />
            <h1>{user.displayName}</h1>
            <h1>{user.email}</h1>
          </div>
        )}
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
0;
