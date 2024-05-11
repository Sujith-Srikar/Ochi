import React from "react";
import {motion} from "framer-motion";

function Marquee() {
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="0.1" className="w-full py-10 rounded-tl-3xl rounded-tr-3xl z-100 bg-[#004D43]">
        <div className="text border-t-2 border-b-2 border-zinc-400 flex whitespace-nowrap overflow-hidden">
          <motion.h1
            intial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="text-[22vw] leading-none font-['Founders_Grotesk_XCondensed_Bold'] uppercase -mb-[7vw] pt-10 pr-10"
          >
            we are ochi
          </motion.h1>
          <motion.h1
            intial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
            className="text-[22vw] leading-none font-['Founders_Grotesk_XCondensed_Bold'] uppercase -mb-[7vw] pt-10 pr-10"
          >
            we are ochi
          </motion.h1>
        </div>
      </div>
    </>
  );
}

export default Marquee;
