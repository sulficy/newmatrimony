import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginAPI, registerAPI } from "../services/allAPIs";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Auth({ register }) {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
//register section
  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userDetails;
  
    if (!username || !email || !password) {
      toast.error("Please fill in all details");
    } else {
      try {
        const result = await registerAPI(userDetails);
        if (result.status >= 200 && result.status <= 300) {
          toast.success("User added successfullyyyyy!", {
            position: "top-right",
            autoClose: 2000,
            theme: "dark",
          });
          setTimeout(() => navigate("/login"), 2000);
        }
      } catch (error) {
        // Check for 409 status code for "User already exists"
        const errorMessage =
          error.response?.status === 409
            ? error.response.data // "User already exists."
            : "An error occurred!";
        toast.error(errorMessage, { theme: "dark" });
      }
    }
  };
  
  
// login
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userDetails;

    if (!email || !password) {
      toast.error("Please fill in all details");
    } else {
      try {
        const result = await loginAPI(userDetails);
        if (result.status >= 200 && result.status < 300) {
          toast.success("Login successful!", { theme: "light" });
          sessionStorage.setItem("token", result.data.token);
          sessionStorage.setItem("role", result.data.user.role);
          sessionStorage.setItem("username", result.data.user.username);

          // const role = sessionStorage.getItem(role)
          
          if(result.data.user.role=="admin"){
            alert("Welocome Admin...")
            setTimeout(() => navigate("/dashboard"), 2000);
          }
          else
          setTimeout(() => navigate("/"), 2000);
        }
      }catch (error) {
        console.error("Login error:", error); // Log the error
        const errorMessage = error.response?.data?.message || error.message || "Login error";
        toast.error("Invalid email or password", { theme: "light" });
      }
    }
  };

  return (
    <>
    <Header/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <ToastContainer />
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        {/* Image Section */}
        <div className="hidden md:block">
          <img
            src="https://img.freepik.com/premium-vector/secure-login-concept-illustration-web-password-account-password_203633-3744.jpg"
            alt="Auth illustration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="p-8">
          <h1 className="text-2xl font-bold text-center mb-6">
            Sign {register ? "Up" : "In"}
          </h1>
          <form
            onSubmit={register ? handleRegister : handleLogin}
            className="space-y-4"
          >
            {/* Username Input (only for register) */}
            {register && (
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, username: e.target.value })
                  }
                />
              </div>
            )}

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
              />
            </div>

            {/* Conditional Form Controls */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                {register ? "Sign Up" : "Sign In"}
              </button>
            </div>

            <p className="text-center text-sm text-gray-600 mt-4">
              {register ? (
                <>
                  Already registered?{" "}
                  <Link to="/login" className="text-blue-600 hover:underline">
                    Click to Login
                  </Link>
                </>
              ) : (
                <>
                  New here?{" "}
                  <Link
                    to="/register"
                    className="text-blue-600 hover:underline"
                  >
                    Click to Register
                  </Link>
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </div> 
    <Footer/>
    </>
  );
}

export default Auth;
