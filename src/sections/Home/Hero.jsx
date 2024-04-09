import React from "react";
import styled from "styled-components";
import heroimg from "../../assets/heroimg.png";

const Hero = () => {
  return (
    <Main className="flex lg:px-0 px-10">
      <div
        className=""
        style={{ width: "813px", marginRight: "68px", marginTop: "31px" }}
      >
        <p className="tittle">
          Trade Smarter With <span>Infinity</span>
        </p>
        <p className="text-2xl font-normal py-7">
          Revolutionize your trading experience with our intuitive Telegram bot.
          Stay ahead of the market trends and trade with confidence.
        </p>
        <div>
          <button className="btn1">Get Started</button>
          <button className="btn2">Learn More</button>
        </div>
      </div>
      <div>
        <img src={heroimg} alt="" srcset="" className="img hidden lg:block" />
      </div>
    </Main>
  );
};

export default Hero;

const Main = styled.div`
  color: white;
  justify-content: center;
  margin-top: 174px;
  .tittle {
    font-size: 63.71px;
    font-weight: 700;

    span {
      color: hsla(223, 88%, 56%, 1);
    }
  }
  .img {
    /* width: 321px; */
    /* height: 442px; */
  }
  .btn1 {
    background-color: rgba(43, 100, 242, 1);
    padding: 20px 50px;
    border-radius: 10px;
    box-shadow: 0px 4px 46px 0px rgba(43, 100, 242, 0.53);
    font-weight: 700;
    font-size: 18px;
    margin-right: 33px;
  }
  .btn2 {
    padding: 20px 50px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    border: 1px solid white;
  }
`;