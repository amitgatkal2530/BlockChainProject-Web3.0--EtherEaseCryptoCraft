import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layouts/Layout';
import axios from 'axios';

const UserModifyProfile = () => {
    const { loginid } = useParams();
    const [user, setUser] = useState({
        loginid: '',
        fullname: '',
        loginname: '',
        emailid: '',
        mobileno: '',
        address: '',
    });

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
    }, [loginid]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleModify = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/user/${loginid}`, user);

            if (response.status === 200) {
                console.log('User details updated successfully');
                alert("User Details Modify Successfully");
            } else {
                console.error('Modification failed:', response.data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    if (!user) {
        return <h2>Loading...</h2>;
    }

    return (
        <Layout>
            <div className="gradient-bg-welcome flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col md:p-20 py-12 px-4">
            <div className="max-w-md w-full bg-gradient-to-br from-purple-400 to-purple-600 shadow-md rounded px-8 py-6">
                    <h2 className="text-2xl mb-4 text-center text-white">Update Your Profile</h2>
                    <form>
                        <div className="mb-2">
                            <label className="block text-white text-sm font-bold mb-1" htmlFor="loginid">
                                Login ID
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="loginid" name="loginid" type="text" value={user.loginid} readOnly
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-white text-sm font-bold mb-1" htmlFor="fullname">
                                Full Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                                id="fullname" name="fullname" type="text" value={user.fullname} onChange={handleChange}
                                placeholder="Full Name"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-white text-sm font-bold mb-1" htmlFor="loginname">
                                Login Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                                id="loginname" name="loginname" type="text" value={user.loginname} onChange={handleChange}
                                placeholder="Login Name"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-white text-sm font-bold mb-1" htmlFor="emailid">
                                Email ID
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                                id="emailid" name="emailid" type="email" value={user.emailid} onChange={handleChange}
                                placeholder="Email ID"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-white text-sm font-bold mb-1" htmlFor="mobileno">
                                Mobile Number
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                                id="mobileno" name="mobileno" type="text" value={user.mobileno} onChange={handleChange}
                                placeholder="Mobile Number"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-white text-sm font-bold mb-1" htmlFor="address">
                                Address
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-1 leading-tight focus:outline-none focus:shadow-outline"
                                id="address" name="address" type="text" value={user.address} onChange={handleChange}
                                placeholder="Address"
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button" onClick={handleModify}
                            >
                                Modify
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </Layout>
    );
};

export default UserModifyProfile;