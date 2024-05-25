import Layout from "../components/Layouts/Layout";
import React,{useState}from 'react'
import { NavLink } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';

const Profile = ({  }) => {
 
  const [values,setValues]=useState({
    loginid :' ', password : ''
 
   })
     const navigate = useNavigate();
     const [user,setUser]=useState({
       loginid:"",
       password:""
       
     })
     const handleChange = e =>{
       const{name,value}=e.target
       console.log(name,value)
       setUser({ 
         ...user,
         [name]:value      })
     }
     
     const Login = async () => {
      try {
        const response = await fetch('http://localhost:8080/Login/User', {
          method: 'post',
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json"
          }
        });
    
        if (response.ok) {
          // If login successful, show "Login Successful" alert
          alert("Login Successful");
        } else if (response.status === 404) {
          // If user not found, show "User not found" alert
          alert("User not found");
        } else if (response.status === 401) {
          // If invalid credentials, show "Invalid credentials" alert
          alert("Invalid credentials");
        } else {
          // For any other error, show "Internal Server Error" alert
          alert("Internal Server Error");
        }
      } catch (error) {
        console.error('Error:', error);
        // Show error message if fetch fails
        alert("Failed to fetch");
      }
    }
 
 
  return (

<Layout>



<div className="gradient-bg-welcome flex flex-col justify-center items-center">
        {/* Buttons Section */}
        <div className="flex items-center justify-center mt-8">
          
          <div className="flex justify-center my-2">
            <button className="mx-2 px-4 py-2 rounded text-white border border-blue-500 hover:bg-blue-500 hover:text-white" >
            <NavLink to={'/UserViewLogin'}>View Profile</NavLink>
            </button>
            <button className="mx-2 px-4 py-2 rounded text-white border border-blue-500 hover:bg-blue-500 hover:text-white" >
            <NavLink to={'/UserModificationLogin'}>Modify Profile</NavLink>
            </button>
            {/* <button className="mx-2 px-4 py-2 rounded text-white border border-blue-500 hover:bg-blue-500 hover:text-white" onClick={() => handleButtonClick('/profile/view')}>
              Manage Users
            </button> */}
            <button className="mx-2 px-4 py-2 rounded text-white border border-blue-500 hover:bg-blue-500 hover:text-white">
              Logout
            </button>
          </div>
        </div>



        

        {/* Login Form */}
        <div className="w-full max-w-xs mt-8">
          <form className="bg-white shadow-md rounded px-10 pt-10 pb-10 mb-10">
            <h1 className="text-2xl font-bold mb-4 text-blue-500 text-center">Login Here</h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="loginid">
                LoginId
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="loginid" name="loginid"  type="text" placeholder="LoginId" onChange={handleChange}/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password"name="password" type="password" placeholder="******************" onChange={handleChange}/>
            </div>
            <div className="mb-4">
              <a href="#" className="text-sm text-blue-500 hover:text-blue-700 hover:underline">
                Forgot Password?
              </a>
            </div>
            <div className="flex items-center justify-center mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"  onClick={Login}>
                Login
              </button>
            </div>
            <div className="text-center">
              <p className="text-gray-600 text-sm">Don't have an account?</p>
              <p className="text-blue-500 text-sm font-semibold">
                <NavLink to={'/singup'}>Sign Up</NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>

      {/* CSS Styles */}
      
    </Layout>
  );
};

export default Profile;