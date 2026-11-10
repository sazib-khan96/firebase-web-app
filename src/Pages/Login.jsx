import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { provider } from "../fairbase/Fairbase.config";

const auth = getAuth();

const Login = () => {
  const [user, setuser] = useState(null);
  const [error, setError] = useState('')

  const SignIngooglehandler = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const loginUser = result.user;
        toast.success("LogIn successfullY");
        setuser(loginUser);
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

  //  show error in dispaly 
    setError('')
    
    createUserWithEmailAndPassword(auth,email,password)
    .then( result => {
      const users = result.user
      setuser(users)
      toast.success('User Login Successfully')
      e.target.reset()
    })
    .catch( error => {
      console.log(error.message)
      setError(error.message)
    })
  }

  const gitHubProvider = new GithubAuthProvider()
const SignIngithubhandler = () =>{
signInWithPopup(auth,gitHubProvider)
.then((result ) => {
  console.log(result.user)
})
.catch( (error) => {
  console.log(error)
})
}
 
  return (
    <div className="hero h-screen">
      <div className=" ">
         <h1 className="text-5xl font-bold">Happening now.</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 mt-8 ">
        
          <div className="">
           
            {/* form  */}
            <form onSubmit={passwordAuthihandle}>
              <label className="label" >Email</label>
              <input type="email" name="email" className="input block" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password"  name='password'className="input" placeholder="Password" />
              
              <button type="submit" className="btn btn-neutral mt-4">Sign up with email, password</button>
            </form>

            {/* Conditional btn section  */}
            <div className="flex gap-5">
              {user ? 
                <button
                  onClick={signOutGooogle}
                  className="btn btn-neutral mt-4 mx-auto">
                  Sign Out
                </button>
               : 
               <>
                <button
                  onClick={SignIngooglehandler}
                  className="btn rounded-2xl mt-4 shadow-2xl">
                  SignUp with Google
                </button>
                 {/* github login btn  */}
                 <button
                  onClick={SignIngithubhandler}
                  className="btn rounded-2xl mt-4 shadow-2xl">
                  SignUp with Github
                </button>
               </>
              }
            </div>
          </div>
          {
            !user && <p className="text-red-500">{error}</p>
          }
          {user && (
          <div>
            <img src={user.photoURL} alt="" />
            <h1>{user.displayName}</h1>
            <h1>{user.email}</h1>
          </div>
        )}
        </div>
      </div>
      <ToastContainer></ToastContainer>
        
    </div>
  );
};

export default Login;
0;
