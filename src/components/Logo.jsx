import React from "react";
import logo from "../assets/logo.png";

const Logo = () => {
  return (
    <>
      <div className="flex items-center">
        <img src={logo} alt="logo" className="w-5 h-5 lg:w-auto lg:h-auto" />
        <p className="lg:text-2xl text-xl pl-2.5">Infinity</p>
      </div>
    </>
  );
};

export default Logo;
