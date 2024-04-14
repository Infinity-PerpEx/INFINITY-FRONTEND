import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TbSchool } from "react-icons/tb";
import styled from "styled-components";
// import {TbSchool} from "react-icons/wi"
// import {StarIcon} from "react-icons/si"


const CenteredNumber = ({ number }) => {
  return (
    <div className="flex justify-center items-center  lg:h-16 lg:w-16 h-10 w-10 md:w-11 md:h-11 border border-gray-400 rounded-full">
      <span className="text-lg font-bold">{number}</span>
    </div>
  );
};

const HowItWork = () => {


  

  return (
    <section className="">
      <div className="flex w-auto justify-center items-center flex-col border-t-2 text-gray-200 mt-16 border-gray-600 ">
        <h1 className="font-bold text-3xl md:text-4xl mt-16">How It Works.</h1>
        <p className="font-bold text:lg md:text-xl border-b-2 border-gray-600 py-6 ">Follow these instructions to get started ⬇️</p>
      </div>
      <VerticalTimeline className="max-w-screen-lg mx-auto">
  <VerticalTimelineElement
    className="vertical-timeline-element--work "
    contentStyle={{ background: 'rgb(21 16 48 )', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    
    iconStyle={{ background: ' hsla(223, 88%, 56%, 1)', color: '#fff' }}
    icon={<CenteredNumber number={1} />}
  >
    <div className=" my-8 ">
    <h3 className="vertical-timeline-element-title text-xl font-semibold border-b-[1px] border-gray-400 ">Sign up for the bot on Telegram</h3>    
    <p className="text-gray-300">
    Get started by simply adding our bot on Telegram. It takes just a few clicks to access powerful trading tools and resources.
    </p>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(21 16 48 )', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: ' hsla(223, 88%, 56%, 1)', color: '#fff' }}
    icon={<CenteredNumber number={2} />}
  >
    <div className=" my-8">
    <h3 className="vertical-timeline-element-title text-xl font-semibold border-b-[1px] border-gray-400 ">Sign up for the bot on Telegram</h3>    
    
    <p>
    Get started by simply adding our bot on Telegram. It takes just a few clicks to access powerful trading tools and resources.
    </p>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(21 16 48 )', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: ' hsla(223, 88%, 56%, 1)', color: '#fff' }}
    icon={<CenteredNumber number={3} />}
  >
    <div className=" my-8">
    <h3 className="vertical-timeline-element-title text-xl font-semibold border-b-[1px] border-gray-400 ">Sign up for the bot on Telegram</h3>    
   
    <p>
    Get started by simply adding our bot on Telegram. It takes just a few clicks to access powerful trading tools and resources.
    </p>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(21 16 48 )', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: ' hsla(223, 88%, 56%, 1)', color: '#fff' }}
    icon={<CenteredNumber number={4} />}
  >
    <div className=" my-8">
    <h3 className="vertical-timeline-element-title text-xl font-semibold border-b-[1px] border-gray-400 ">Sign up for the bot on Telegram</h3>    
    
    <p>
    Get started by simply adding our bot on Telegram. It takes just a few clicks to access powerful trading tools and resources.
    </p>
    </div>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    contentStyle={{ background: 'rgb(21 16 48 )', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    iconStyle={{ background: ' hsla(223, 88%, 56%, 1)', color: '#fff' }}
    icon={<CenteredNumber number={5} />}
  >
    <div className=" my-8">
    <h3 className="vertical-timeline-element-title text-xl font-semibold border-b-[1px] border-gray-400 ">Sign up for the bot on Telegram</h3>    
    
    <p>
    Get started by simply adding our bot on Telegram. It takes just a few clicks to access powerful trading tools and resources.
    </p>
    </div>
  </VerticalTimelineElement>
  
  
  <VerticalTimelineElement
    iconStyle={{ background: ' hsla(223, 88%, 56%, 1)', color: '#fff' }}
    icon={<TbSchool />}
  />
</VerticalTimeline>
    
    </section>
    
  );
};

export default HowItWork;
