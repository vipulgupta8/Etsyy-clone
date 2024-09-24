// import React from 'react';
// import { signInWithPopup } from 'firebase/auth';
// import { auth, provider } from '../config/firebaseAuth'; // Firebase configuration for Google auth
// import { useDispatch } from 'react-redux';
// import { addUserData } from '../authSlice'; // Redux action to store user data
// import { useNavigate } from 'react-router-dom';

// const Auth = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleGoogleSignIn = async () => {
//     try {
//       // Sign in with Google Popup
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;

//       // Dispatch user data to Redux store
//       dispatch(
//         addUserData({
//           name: user.displayName,
//           email: user.email,
//           photo: user.photoURL,
//         })
//       );

//       // Navigate to home or other page after successful login
//       navigate('/');
//     } catch (error) {
//       console.error('Google Sign-In Error:', error.message);
//     }
//   };

//   return (
//     <div className="border-2 border-[#aca5a5] h-[400px] w-[400px] rounded-3xl mx-auto mt-6 shadow-inner">
//       <div className="flex justify-center p-4 mt-6">
//         <p className="text-2xl">Sign in with Google</p>
//       </div>
//       <div className="flex flex-col items-center mt-6">
//         <button
//           onClick={handleGoogleSignIn}
//           className="mt-6 border-2 w-[300px] p-3 rounded-3xl text-white bg-black font-bold"
//         >
//           Sign in with Google
//         </button>
//       </div>
//       <div className="flex justify-center mt-4">
//         <p>Don't have an account? Just sign in with Google to get started!</p>
//       </div>
//     </div>
//   );
// };

// export default Auth;

import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "./firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
          photo:""
        });
      }
      console.log("User Registered Successfully!!");
      toast.success("User Registered Successfully!!", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error.message);
      toast.error(error.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <form className="p-6 bg-white shadow-md rounded-lg" onSubmit={handleRegister}>
  <h3 className="text-2xl font-bold text-center mb-4">Sign Up</h3>

  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">First name</label>
    <input
      type="text"
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
      placeholder="First name"
      onChange={(e) => setFname(e.target.value)}
      required
    />
  </div>

  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Last name</label>
    <input
      type="text"
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
      placeholder="Last name"
      onChange={(e) => setLname(e.target.value)}
    />
  </div>

  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Email address</label>
    <input
      type="email"
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
      placeholder="Enter email"
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>

  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Password</label>
    <input
      type="password"
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
      placeholder="Enter password"
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>

  <div className="mb-4">
    <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200">
      Sign Up
    </button>
  </div>

  <p className="text-center">
    Already registered? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
  </p>
</form>

  );
}
export default SignIn;
