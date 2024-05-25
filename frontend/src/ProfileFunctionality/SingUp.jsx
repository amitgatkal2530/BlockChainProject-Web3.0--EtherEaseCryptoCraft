import { NavLink } from 'react-router-dom';
import {useState} from 'react'
import Layout from "../components/Layouts/Layout";


const SingUp = ({}) => {

const[user,setUser]  =useState({
  loginid: '',
  fullname: '',
  loginname: '',
  password: '',
  emailid: '',
  mobileno: '',
  address: ''

});

const handleForm=(e)=>{
  const { name, value } = e.target;
  //console.log(e.target.value,e.target.name);
  setUser({
    ...user,
    [e.target.name] : e.target.value
  })
}


const handleSubmit=(e)=>{
}

const validateMobile = mobile => {
  const mobileRegex = /^\d{10}$/;
  return mobileRegex.test(mobile);
};

const validateEmail = email => {
  const emailRegex  =/^[\w.-]+@\w+\.\w+(\.\w+)?$/;

  return emailRegex.test(email);
};

const register = async (e) => { // Pass the event as a parameter
  e.preventDefault(); // Prevent default form submission behavior

  const { mobileno, emailid } = user;

    if (!validateMobile(mobileno)) {
      window.alert('Mobile number should be a 10-digit integer');
      return;
    }

    if (!validateEmail(emailid)) {
      window.alert('Invalid email @ compulsary ');
      return;
    }


  try {
    const response = await fetch('http://localhost:8080/Register/User', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();

    console.log(data);

    if (response.status === 200) {
      window.alert('Registration successful!');
    } else {
      window.alert('Registration failed. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
  return (
  <Layout>
    <div className=" gradient-bg-welcome flex w-full justify-center items-center">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-6 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-6" >
      
          
        <div className="mt-0 mx-auto max-w-xs"> {/* Adjust the margin-top value as needed */}

        <form  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4 text-blue-500">Register Here</h1>
          {/* Full Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              {/* Full Name */}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="fullname" type="text" placeholder="Full Name" onChange={handleForm}/>
          </div>
          {/* Login Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="loginname">
              {/* Login Name */}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="loginname" type="text" placeholder="Login Name"  onChange={handleForm}/>
          </div>
          {/* LoginId Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
              {/* LoginId */}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="loginid" type="text" placeholder="Login Id"  onChange={handleForm}/>
          </div>
          {/* Mobile No Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mobileno">
              {/* Mobile No */}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="mobileno" type="text" placeholder="Mobile No"  onChange={handleForm}/>
          </div>
          {/* Email Id Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              {/* Email Id */}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="emailid" type="email" placeholder="Email Id"  onChange={handleForm}/>
          </div>
          {/* Address Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
              {/* Address */}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="address" type="text" placeholder="Address"  onChange={handleForm}/>
          </div>
          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              {/* Password */}
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" name="password" type="password" placeholder="******************"  onChange={handleForm}/>
          </div>
          {/* Sign Up Button */}
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={register}>
              Sign Up
            </button>
          </div>
          <div className="text-center">
                    <p className="text-gray-600 text-sm">Already have an account?</p>
                    <p className="text-blue-500 text-sm font-semibold">
                      <NavLink to={'/profile'}>Login</NavLink>
                    </p>
                  </div>
          
        </form>
      </div>

        </div>
        </div>
      </div>
      </Layout>
  );
};

export default SingUp; 