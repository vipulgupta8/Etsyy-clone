// import React, { useRef, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { signInWithEmailAndPassword } from 'firebase/auth';
// import { auth } from '../config/firebaseAuth'; // Import Firebase authentication configuration
// import { useDispatch } from 'react-redux';
// import { addUserData } from '../authSlice'; // Import the auth actions

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const emailRef = useRef();
//   const passwordRef = useRef();
//   const [error, setError] = useState(null);

//   // Function to handle form submission
//   const formSubmit = async (e) => {
//     e.preventDefault();
//     const email = emailRef.current.value;
//     const password = passwordRef.current.value;

//     try {
//       // Sign in user with email and password
//       const userCredential = await signInWithEmailAndPassword(auth, email, password);
//       const user = userCredential.user;

//       // Dispatch user data to Redux store
//       dispatch(
//         addUserData({
//           name: user.displayName || 'Anonymous',
//           email: user.email,
//           photo: user.photoURL || '',
//         })
//       );

//       // Navigate to home or another protected page after successful login
//       navigate('/');
//     } catch (error) {
//       console.error('Login error:', error);
//       setError(error.message);
//     }
//   };

//   return (
//     <div className="border-2 border-[#aca5a5] h-[450px] w-[400px] rounded-3xl mx-auto mt-6 shadow-inner">
//       <div className="flex justify-between p-3 mt-4">
//         <p className="text-xl">Login</p>
//         <Link to="/sign-in">
//           <button className="border-2 border-black p-2 rounded-3xl">Register</button>
//         </Link>
//       </div>
//       <div>
//         <form className="flex flex-col" onSubmit={formSubmit}>
//           <label htmlFor="email" className="ml-6 text-sm">
//             Email address
//           </label>
//           <input
//             ref={emailRef}
//             type="text"
//             placeholder="Email"
//             className="border border-[#ebebeb] w-[300px] m-auto shadow-inner p-3 rounded-xl"
//             required
//           />
//           <label htmlFor="password" className="ml-6 text-sm mt-3">
//             Password
//           </label>
//           <input
//             ref={passwordRef}
//             type="password"
//             placeholder="Password"
//             className="border border-[#ebebeb] w-[300px] m-auto shadow-inner p-3 rounded-xl"
//             required
//           />
//           {error && <p className="text-red-500 text-center mt-2">{error}</p>}
//           <button
//             type="submit"
//             className="mt-6 border-2 w-[300px] m-auto p-3 rounded-3xl text-white bg-black font-bold"
//           >
//             Sign in
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./firebase";
import { toast } from "react-toastify";
import SignInwithGoogle from "./SignInWIthGoogle";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in Successfully");
      window.location.href = "/profile";
      toast.success("User logged in Successfully", {
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
    <form className="p-6 bg-white shadow-md rounded-lg" onSubmit={handleSubmit}>
  <h3 className="text-2xl font-bold text-center mb-4">Login</h3>

  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">Email address</label>
    <input
      type="email"
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
      placeholder="Enter email"
      value={email}
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
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>

  <div className="mb-4">
    <button type="submit" className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200">
      Submit
    </button>
  </div>

  <p className="text-center">
    New user? <a href="/register" className="text-indigo-600 hover:underline">Register Here</a>
  </p>

  <SignInwithGoogle />
</form>

  );
}

export default Login;
