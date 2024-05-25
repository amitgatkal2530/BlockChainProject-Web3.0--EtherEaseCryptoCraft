
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate,Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import Layout from '../components/Layouts/Layout';
import { BsArrowLeft } from 'react-icons/bs';
import { SiEthereum } from 'react-icons/si';
import axios from 'axios';
import { FaUser, FaEnvelope, FaMobileAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ViewProfile = () => {
    const [user, setUser] = useState(null);
    const { loginid } = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
    const fetchUserDetails = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/user/${loginid}`);
          setUser(response.data);
        } catch (error) {
          console.error('Error:', error);
        }
      };
      if (loginid) {
        fetchUserDetails();
      }
    },[loginid]);
  
    if (!user) {
        return <p>Loading...</p>;
      }

  return (
    <Layout>
      <div className="gradient-bg-welcome flex w-full justify-center items-center">
        <div className="flex mf:flex-row flex-col md:p-20 py-12 px-4">
        <div className="flex mf:flex-row flex-col md:p-20 py-12 px-4">
          <div className="max-w-lg bg-gradient-to-br from-purple-400 to-blue-500 shadow-md rounded-lg p-8 w-full">
            <div className="flex items-center justify-between mb-8">
              {/* Back Button */}
              <NavLink to="/" className="text-white hover:text-gray-300">
                <BsArrowLeft className="text-2xl" />
              </NavLink>
              <h1 className="text-2xl font-bold text-white">{` ${user.fullname || 'Not provided'}`}</h1>
              <div>
             
            </div>
            </div>
            <div className="mb-4 flex items-center">
              <FaUser className="text-gray-200 mr-2" />
              <label className="block text-gray-200 text-sm font-semibold mb-2">Full Name:</label>
              <p className="text-gray-200 font-semibold ml-2">{user.fullname || 'Not provided'}</p>
            </div>
            <div className="mb-4 flex items-center">
              <FaUser className="text-gray-200 mr-2" />
              <label className="block text-gray-200 text-sm font-semibold mb-2">Login Name:</label>
              <p className="text-gray-200 font-semibold ml-2">{user.loginname || 'Not provided'}</p>
            </div>
            <div className="mb-4 flex items-center">
              <FaUser className="text-gray-200 mr-2" />
              <label className="block text-gray-200 text-sm font-semibold mb-2">Login ID:</label>
              <p className="text-gray-200 font-semibold ml-2">{user.loginid}</p>
            </div>
            <div className="mb-4 flex items-center">
              <FaEnvelope className="text-gray-200 mr-2" />
              <label className="block text-gray-200 text-sm font-semibold mb-2">Email:</label>
              <p className="text-gray-200 font-semibold ml-2">{user.emailid || 'Not provided'}</p>
            </div>
            <div className="mb-4 flex items-center">
              <FaMobileAlt className="text-gray-200 mr-2" />
              <label className="block text-gray-200 text-sm font-semibold mb-2">Mobile No:</label>
              <p className="text-gray-200 font-semibold ml-2">+{user.mobileno || 'Not provided'}</p>
            </div>
            <div className="mb-4 flex items-center">
              <FaMapMarkerAlt className="text-gray-200 mr-2" />
              <label className="block text-gray-200 text-sm font-semibold mb-2">Address:</label>
              <p className="text-gray-200 font-semibold ml-2">{user.address || 'Not provided'}</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Layout>
  );
};

export default ViewProfile;