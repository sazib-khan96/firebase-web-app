import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import { getAuth, signInWithPopup, signOut } from "firebase/auth";
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
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form>
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sign Up</button>
            </form>
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
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
0;
