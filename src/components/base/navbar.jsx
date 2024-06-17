import React, { useState } from "react";
import logo from "../../assets/images/logo/logonobg.webp";
import { useLocation, useNavigate } from "react-router-dom";

function NavbarButton({ name, link }) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <button
      className="text-xl md:text-2xl text-white p-2 md:p-4 mx-2 md:mx-4 xl:mx-8 font-bold"
      onClick={() => navigate(link)}
    >
      {name}
    </button>
  );
}

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col w-full items-center bg-black shadow-xl pb-4 shadow-black z-50 relative rounded-b-xl mb-[-10px]">
      <img
        src={logo}
        className="w-72 md:w-[412px] hover:scale-[102%] cursor-pointer transition-all active:scale-100"
        onClick={() => navigate("/")}
      ></img>
      <div className="flex flex-wrap justify-center">
        <div
          className={`border-b-black hover:border-b-[#ffa200] border-b-4 transition-all`}
        >
          <NavbarButton name="Menu" link="/menu"></NavbarButton>
        </div>
        <div
          className={`border-b-black hover:border-b-[#ffa200] border-b-4 transition-all`}
        >
          <NavbarButton name="Events" link="/event"></NavbarButton>
        </div>
        <div
          className={`border-b-black hover:border-b-[#ffa200] border-b-4 transition-all`}
        >
          <NavbarButton name="Reservation" link="/reservation"></NavbarButton>
        </div>
        <div
          className={`border-b-black hover:border-b-[#ffa200] border-b-4 transition-all`}
        >
          <NavbarButton name="Gallery" link="/gallery"></NavbarButton>
        </div>
        <div
          className={`border-b-black hover:border-b-[#ffa200] border-b-4 transition-all`}
        >
          <NavbarButton name="About" link="/about"></NavbarButton>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
