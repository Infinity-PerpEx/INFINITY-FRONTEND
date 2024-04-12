import React, { useState } from "react";
import styled from "styled-components";
import Logo from "./Logo";
import bm from "../assets/bm.svg";
import close from "../assets/close.svg";

const Navbar = ({ show, setShow }) => {
  return (
    <Main className={`grid grid-cols-2 lg:px-20 px-10`}>
      <Logo />
      <div
        className={`dropdown justify-center lg:justify-between items-center justify-center ${
          !show ? "hidden" : "flex"
        } lg:flex lg:relative`}
      >
        <p className="font-bold lg:text-lg text-2xl lg:px-0 py-7">Home</p>
        <p className="font-bold lg:text-lg text-2xl lg:px-0 py-7">Features</p>
        <p className="font-bold lg:text-lg text-2xl lg:px-0 py-7">
          How it works
        </p>
        <p className="font-bold lg:text-lg text-2xl lg:px-0 py-7">Twitter</p>
        <button>Get Started</button>
      </div>
      <div
        className="flex lg:hidden flex justify-end cursor-pointer"
        onClick={() => setShow((e) => !e)}
      >
        <img
          src={!show ? bm : close}
          alt=""
          srcset=""
          className={`nav ${show ? "fixed top-12" : ""}`}
        />
      </div>
    </Main>
  );
};

export default Navbar;

const Main = styled.div`
  height: 128px;
  background: hsla(245, 73%, 3%, 0.3);
  color: white;
  width: 100%;
  @media (max-width: 1000px) {
    height: 100px;
  }

  .dropdown {
    @media (max-width: 1000px) {
      position: fixed;
      top: 0;
      left: 0;
      background-color: black;
      height: 100vh;
      width: 100%;
      z-index: 1;
      flex-direction: column;
    }
  }

  .nav {
    width: 25px;
    z-index: 2;
  }

  button {
    background-color: rgba(43, 100, 242, 1);
    padding: 20px 50px;
    border-radius: 10px;
    box-shadow: 0px 4px 46px 0px rgba(43, 100, 242, 0.53);
    font-weight: 700;
    font-size: 18px;
  }
`;
