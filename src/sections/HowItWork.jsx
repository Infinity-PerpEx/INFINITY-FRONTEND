import React from "react";
import styled from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";

const HowItWork = () => {
  const isIPad = window.innerWidth;

  return (
    <Main className="grid lg:grid-cols-2 grid-cols-1">
      <div className="mb-20">
        <p className="text-2xl lg:text-5xl font-bold">How it works</p>
        <p className="text-base lg:text-xl pt-6">
          Follow these instructions to get started
        </p>
      </div>
      <div>
        {[1, 2, 3, 4].map((val, i) => (
          <div className={`flex items-center mb-16 relative `}>
            {isIPad >= 1000 == true ? (
              <>
                {val == 4 ? (
                  ""
                ) : (
                  <>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                    <div className="line line3"></div>
                    <div className="line line4"></div>
                  </>
                )}
                <div className="no">
                  <p>{i + 1}</p>
                </div>
              </>
            ) : null}
            <div>
              <p className="pb-5 lg:text-3xl text-xl">
                Sign up for the bot on Telegram
              </p>
              <p className="text-base">
                Get started by simply adding our bot on Telegram. It takes just
                a few clicks to access powerful trading tools and resources.
              </p>
            </div>
          </div>
        ))}
      </div>
    </Main>
  );
};

export default HowItWork;

const Main = styled.div`
  background: hsla(250, 75%, 3%, 1);
  color: white;
  padding: 178px 85px;

  @media (max-width: 1108px) {
    padding: 78px 15px;
  }
  .line::before {
    content: "";
    position: absolute;
    width: 1px;
    background-color: white;
    border-spacing: 225px;
    left: 28px;
  }
  .line1::before {
    height: 30px;
    top: 70px;
    @media (max-width: 1108px) {
      height: 90px;
      top: 10px;
    }
  }
  .line2::before {
    height: 20px;
    top: 115px;
    @media (max-width: 1108px) {
    }
  }

  .line3::before {
    height: 20px;
    top: 155px;
    @media (max-width: 1108px) {
    }
  }
  .line4::before {
    height: 30px;
    top: 190px;
    @media (max-width: 1108px) {
    }
  }

  .no {
    background: hsla(223, 88%, 56%, 1);
    padding: 14px 24px;
    margin-right: 62px;
    z-index: 222;
  }
`;
