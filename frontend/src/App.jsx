
import React from 'react';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Market from './Pages/Market';
import NFT from './Pages/NFT';
import Profile from './Pages/Profile';
import Transaction from './Pages/Transaction';
import Wallet from './Pages/Wallet';
import Welcome from './components/Welcome';
import SingUp from './ProfileFunctionality/SingUp';
import ViewProfile from './ProfileFunctionality/ViewProfile';
import UserViewLogin from './ProfileFunctionality/UserViewLogin';
import UserModificationLogin from './ProfileFunctionality/UserModificationLogin';
import UserModifyProfile from './ProfileFunctionality/UserModifyProfile';
function App() {
  return (
    <div>
      
     <BrowserRouter>
      <Routes> 
        
      <Route path="/Welcome" element={<Welcome/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/transaction" element={<Transaction/>}/>
      <Route path="/Wallet" element={<Wallet/>}/>
      <Route path="/Market" element={<Market/>}/>
      <Route path="/Nft" element={<NFT/>}/>
      <Route path="/singup" element={<SingUp/>}/>
      <Route path="/user/profile/:loginid" element={<ViewProfile/>}/>
      <Route path="/UserViewLogin" element={<UserViewLogin/>}/>
      <Route path="/UserModificationLogin" element={<UserModificationLogin/>}/>
      <Route path="/user/modify/:loginid" element={<UserModifyProfile/>}/>
        
    </Routes>
      </BrowserRouter> 
    
       
   </div>
  );
}

export default App;


{/* <Route path="/teacher/profile/:loginid" element={<TeacherViewProfile/>}/> */}