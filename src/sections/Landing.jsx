import React from "react";

function Landing() {
  return (
    <div className="h-screen w-screen flex flex-col justify-end p-5 overflow-clip">
      <div className="bottom">
        <div className="jobs flex justify-between">
          <div className="job text-xs lg:text-base text-yellow selection:bg-yellow selection:text-black text-start">
            UI/UX Designer
          </div>
          <div className="job text-xs md:text-base text-red selection:bg-red selection:text-black text-center">
            Data Analyst
          </div>
          <div className="job text-xs md:text-base text-blue selection:bg-blue selection:text-black text-right">
            Front-end Developer
          </div>
        </div>
        <div className="move flex gap-16 whitespace-nowrap no-scrollbar select-none">
          {Array.from({ length: 3 }).map((_) => (
            <h1 className="name text-7xl">
              <span className="part text-yellow">Sumedha</span>
              <span className="part text-red"> Singh</span>
              <span className="part text-blue"> Rathor</span>
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
