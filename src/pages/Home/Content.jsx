import React from "react";
import Navbar from "../../components/Navbar";
import styled from "styled-components";
import bg from "../../assets/bg.png";
import Hero from "../../sections/Home/Hero";
import Features from "../../sections/Home/Features";
import HowItWork from "../../sections/HowItWork";
import Footer from "../../components/Footer";

const Content = () => {
  return (
    <Main>
      <img src={bg} alt="" srcset="" className="bg" />
      <div style={{ height: "100vh" }}>
        <Navbar />
        <Hero />
      </div>
      <Features />
      <HowItWork />
      <Footer />
    </Main>
  );
};

export default Content;

const Main = styled.div`
  .bg {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    z-index: -2;
  }
`;
