import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { toast, ToastContainer } from "react-toastify";
import { doc, getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

function Profile() {
  const [userDetails, setUserDetails] = useState(null);
  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);

      const docRef = doc(db, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
      toast.success("User logged out successfully!", {
        position: "top-center",
        autoClose: 2000, // Automatically close the toast after 2 seconds
      });
    } catch (error) {
      console.error("Error logging out:", error.message);
    }
  }
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 rounded-lg shadow-md">
  {userDetails ? (
    <>
      <div className="flex justify-center mb-4">
        <img
          src={userDetails.photo}
          className="w-32 h-32 rounded-full border-2 border-gray-300 shadow-lg"
          alt="User Avatar"
        />
      </div>
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-2">
        Welcome {userDetails.firstName} 🙏🙏
      </h3>
      <div className="text-gray-600 mb-4">
        <p>Email: {userDetails.email}</p>
        <p>First Name: {userDetails.firstName}</p>
        {/* <p>Last Name: {userDetails.lastName}</p> */}
      </div>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  ) : (
    <p className="text-gray-600 text-center">
      If logged in, please wait. If not, please log in.
    </p>
  )}
</div>

  );
}
export default Profile;


