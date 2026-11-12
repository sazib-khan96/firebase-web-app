import React from "react";
import logo from '../../src/assets/images-removebg-preview.png'
import googlelogo from '../../src/assets/Google__G__logo.svg-removebg-preview.png'
import githublelogo from '../../src/assets//images__4_-removebg-preview.png'

const Login = () => {
  return (
    <div className="bg-gray-100 h-screen">
     <div className="flex gap-8 w-6xl mx-auto items-center h-screen ">
       <div className="flex-1">
        <h1 className="font-bold text-5xl text-center">Happening now.</h1>
        <img className="mx-auto" src={logo}alt="" />
      </div>
      <div className="flex-1">
        <form>
           <div>
            <div className="relative mb-3">
              <img src={googlelogo} alt=""  className="w-5 absolute top-4 left-32"/>
              <input type="submit" value="Sign in with Google" className="border text-black py-3 px-5 rounded-4xl w-4/5" />
            </div>
            <div className="relative mb-3">
              <img src={githublelogo} alt=""  className="w-8 absolute top-2 left-30"/>
              <input type="submit" value="Sign in with Github" className="border text-black py-3 px-5 rounded-4xl w-4/5" />
            </div>
            
           </div>
           <h1 className="my-8">or,</h1>
          <div>
             <input type="text" placeholder="Enter your name" className="border rounded-4xl p-3 w-4/5 mx-auto mb-3" />
          <br />
          <input type="text" placeholder="Enter your name" className="border rounded-4xl p-3 w-4/5 mx-auto" />
          <br />
          <input type="submit" value="Continue" className="bg-black text-white py-3 px-5 rounded-4xl mt-5" />
          </div>
         
        </form>
      </div>
     </div>
    </div>
  );
};

export default Login;
