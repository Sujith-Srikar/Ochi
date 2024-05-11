import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {

  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="-0.5" className="w-full h-screen pt-1 z-0">
        <div className="textstructure mt-52 px-20">
          {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
            return (
              <div key={index} className="masker">
                <div className="w-fit flex items-start ">
                  {index === 1 && (
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "8vw" }}
                      transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                      className="mr-[1vw] w-[8vw] h-[5vw] relative -top-[0.5vw] bg-red-500"
                    ></motion.div>
                  )}
                  <h1 className='uppercase text-[7.5vw] leading-[7vw] font-["Founders_Grotesk_XCondensed_Bold"] font-bold'>
                    {item}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t-[1px] border-zinc-500 mt-20 flex justify-between items-center py-5 px-20">
          {[
            "For public and private companies",
            "From the first pitcch to IPO",
          ].map((item, index) => {
            return (
              <p
                key={index}
                className="text-md text-white font-light tracking-tight leading-none"
              >
                {item}
              </p>
            );
          })}
          <div className="start flex items-center gap-5">
            <div className="px-4 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full">
              start the project
            </div>
            <div className="w-10 h-10 flex items-center justify-center rounded-full border-[2px] border-zinc-500">
              <span className='rotate-[45deg]'>
                <FaArrowUpLong />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage
