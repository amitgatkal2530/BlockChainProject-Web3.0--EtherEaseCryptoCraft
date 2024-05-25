import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { NavLink } from 'react-router-dom';

import logo from "../../images/logo.png";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className=" gradient-bg-navbar w-full flex md:justify-center justify-betd:ju items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-14 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
      <li className=" py-2 px-2 mx-2 rounded-full cursor-pointer hover:bg-[#CD853F]">
      <NavLink to={'/Welcome'}>WELCOME</NavLink>
        </li>
      <li className=" py-2 px-2 mx-2 rounded-full cursor-pointer hover:bg-[#CD853F]">
      <NavLink to={'/Profile'}>PROFILE</NavLink>
        </li>
        <li className=" py-2 px-2 mx-2 rounded-full cursor-pointer hover:bg-[#CD853F]">
        <NavLink to={'/Wallet'}>WALLET</NavLink>
        </li>
        <li className=" py-2 px-2 mx-2 rounded-full cursor-pointer hover:bg-[#CD853F]">
        <NavLink to={'/Transaction'}>TRANSACTION</NavLink>
        </li>
        <li className=" py-2 px-2 mx-2 rounded-full cursor-pointer hover:bg-[#CD853F]">
        <NavLink to={'/Market'}>MARKET</NavLink>
        </li>
        <li className=" py-2 px-2 mx-2 rounded-full cursor-pointer hover:bg-[#CD853F]">
        <NavLink to={'/Nft'}>NFT</NavLink>
        </li>
      
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
        <NavLink to={'/profile'}>LOGIN</NavLink>
        </li>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
        )}
        {toggleMenu && (
          <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;