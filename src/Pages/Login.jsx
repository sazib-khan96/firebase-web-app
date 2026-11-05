import React, { useState } from "react";

import { getAuth, signInWithPopup } from "firebase/auth";
import { provider } from "../fairbase/Fairbase.config";

const auth = getAuth();

const Login = () => {
  const [user, setuser] = useState(null);

  const googlehandler = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
        setuser(loginUser);
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
              <button onClick={googlehandler} className="btn btn-neutral mt-4">
                SignUp with Google
              </button>
              <button className="btn btn-neutral mt-4">
                SignUp with Github
              </button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Login;
