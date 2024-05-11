import React from 'react'

function Cards() {
  return (
    <>
      <div className="w-full h-screen bg-zinc-100 flex items-center px-32 gap-5">
        <div className="cardcontainer h-[50vh] w-1/2">
          <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt="image"
            />
            <button className="absolute rounded-full px-5 py-1 border-2 left-10 bottom-10 text-[#CEEA67] border-[#CEEA67]">
              &copy;2019-2022
            </button>
          </div>
        </div>
        <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
          <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt="image"
            />
            <button className="absolute rounded-full px-5 py-1 border-2 left-[1vw] bottom-10">
              RATING 5.0 ON CLUTCH
            </button>
          </div>
          <div className="card relative flex items-center justify-center rounded-xl w-1/2 h-full bg-[#212121]">
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt="image"
            />
            <button className="absolute rounded-full px-5 py-1 border-2 left-[1vw] bottom-10 text-sm">
              BUSSINESS BOOTCAMP ALUMINI
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards
