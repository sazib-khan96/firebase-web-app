import React, { useState } from "react";
import { Link } from "react-router";
import { Eye,EyeOff} from "lucide-react";
import { ToastContainer,toast } from "react-toastify/unstyled";
import {
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./../../fairbase/Fairbase.init";
const googleProvider = new GoogleAuthProvider();
const githunProvider = new GithubAuthProvider();


const Regester = () => {
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");


  // password show and hide state 
const [passwordShow, setPasswordShow] = useState(false)



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
      .then((result) => {
        setSuccess(result.message)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // email password form handler 

  const handleFormSubmit = (e) => {
    const checkedemail = /@/
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value
   setErr('')

   if(!name){
     setErr('Please input your name')
     return
   }
   else if(!email) {
     setErr('Please input your email')
     return
   }
  
   else if(password.length < 6 ){
    setErr('পাসওয়ার্ড অবশ্যই অন্তত ৬ অক্ষরের (digits) হতে হবে!')
    return
   }


    createUserWithEmailAndPassword(auth,email,password)
    .then(result => {
      const users = result.user
      console.log(users)
      if(users) {
         setSuccess('Account Created Successfully')
      }
      
      updateProfile(users, {
        displayName: name
      })

      e.target.reset()
    })
    .catch(err => {
      setErr(err.message)
    })
  }

 

  return (
    <div className="flex flex-col w-3xl mx-auto ps-5 py-8 h-screen items-center justify-center">
      <div className="text-left">
        <p>{setSuccess}</p>
        <h1 className="text-5xl"> Regester Now</h1>

        <p className="text-green-400 text-left">{success}</p>
      </div>
      <div className="mt-8 ">
        {/* Name field  */}
        <form onSubmit={handleFormSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="py-2  px-5 bg-gray-200 w-100 rounded-3xl"
          />
          <br />
          {/* email field  */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="py-2  px-5 bg-gray-200 w-100 rounded-3xl"
          />
          <br />
          {/* Password field  */}
          <div className="relative">
            <input
            type={passwordShow ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            className="py-2 w-100  px-5 bg-gray-200 rounded-3xl relative"
          />
        
          <button onClick={ () => setPasswordShow(!passwordShow)} className="absolute top-2 right-2">
            {
              passwordShow ?<EyeOff/>  : <Eye></Eye>
            }
          </button>
         
          </div>
          <br />
          {/* checkbox field  */}
          <input type="checkbox" className="" required />
          agree to the Terms & Conditions and Privacy Policy.
          <br />
          {/* Regester btn  */}
          <button className="bg-amber-400 px-5 py-2 rounded-4xl shadow-2xl text-white">
            Regester
          </button>
        </form>
        {/* sign in with google field  */}
        <div className="flex gap-5 justify-between my-8 items-center">
          <div className="border px-5 py-2 rounded-3xl bg-amber-50">
            <button onClick={googleRegHandle}>Sign up with Google</button>
          </div>
          {/* sign in with github  */}
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
      <p className="text-red-500">{err}</p>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Regester;
