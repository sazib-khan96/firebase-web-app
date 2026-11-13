import React, { useState } from "react";
import { Link } from "react-router";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "./../../fairbase/Fairbase.init";
const googleProvider = new GoogleAuthProvider();
const githunProvider = new GithubAuthProvider();

const Regester = () => {
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const googleRegHandle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const users = result.user;
        setSuccess("");
        if (users) {
          setSuccess("Login Success");
        }
      })
      .catch((err) => {
        setErr(err.message);
      });
  };

// github Registration function 

const githubRegistration = () => {
    signInWithPopup(auth, githunProvider)
    .then( result => {
        console.log(result)
    })
    .catch(err => {
        console.log(err)
    })
}

  return (
    <div className="flex flex-col w-3xl mx-auto ps-5 py-8 h-screen items-center justify-center">
      <div className="text-left">
        <h1 className="text-5xl"> Regester Now</h1>

        <p className="text-green-400 text-left">{success}</p>
      </div>
      <div className="mt-8 ">
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="py-2  px-5 bg-gray-200 w-100 rounded-3xl"
          />
          <br />
          <input
            type="email"
            placeholder="email"
            className="py-2  px-5 bg-gray-200 w-100 rounded-3xl"
          />
          <br />
          <input
            type="password"
            placeholder="password"
            className="py-2 w-100  px-5 bg-gray-200 rounded-3xl"
          />
          <br />
          <input type="checkbox" className="" />
          agree to the Terms & Conditions and Privacy Policy.
          <br />
          <button className="bg-amber-400 px-3 py-2 rounded-4xl">
            Regester
          </button>
        </form>
        <div className="flex gap-5 justify-between my-8 items-center">
          <div className="border px-5 py-2 rounded-3xl bg-amber-50">
            <button onClick={googleRegHandle}>Sign up with Google</button>
          </div>
          <div className="border px-5 py-2 rounded-3xl bg-amber-50">
            <button onClick={githubRegistration}>Sign up with Github</button>
          </div>
        </div>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Regester;
