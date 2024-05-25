
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Layout from '../components/Layouts/Layout';


const UserModificationLogin= () => {
   
const navigate = useNavigate();
const [values,setValues]=useState({
         loginid:'',
         password:'',
         
       })

       const [user,setUser]=useState({
        loginid:'',
        password:'',
        
      })

     

const handleChange =(e) =>{
const{name,value}=e.target
console.log(name,value)
setUser({ 
        ...user,
          [name]:value      
        })
      }

      const handleLogin = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch('http://localhost:8080/Login/User', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
              'Content-Type': 'application/json',
            },
           
          });
    
          // const data = await response.json();
          // console.log(data);
    
          if (response.ok) {
            // If login successful, show "Login Successful" alert
           
            navigate(`/user/modify/${user.loginid}`); 
           
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
          alert("Failed to Featch");
        }
      };

  return (
    <Layout>
      <div className="gradient-bg-welcome flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col md:p-20 py-12 px-4">
        {/* <div className="flex mf:flex-row flex-col md:p-20 py-12 px-4"> */}
          {/* <div className="max-w-lg bg-gradient-to-br from-purple-400 to-blue-500 shadow-md rounded-lg p-8 w-full"> */}
          <div className="w-full max-w-xs mt-8">
          <form className="bg-white shadow-md rounded px-10 pt-10 pb-10 mb-10">
          <h2>For Modify Your Profile....</h2>
            <h1 className="text-2xl font-bold mb-4 text-blue-500 text-center">First Fiill These Information</h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="loginid">
                LoginId
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="loginid" name="loginid"  type="text" value={user.loginid}  placeholder="LoginId" onChange={handleChange}/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password"name="password"  type="password" value={user.password}  placeholder="******************" onChange={handleChange}/>
            </div>
            
            <div className="flex items-center justify-center mb-4">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button"  onClick={handleLogin}>
                Modify
              </button>
            </div>
            
          </form>
        </div>
          {/* </div> */}
        {/* </div> */}
      </div>
      </div>
    </Layout>
  );
};

export default UserModificationLogin;