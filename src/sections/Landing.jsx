import React from "react";

function Landing() {
  return (
    <div className="h-screen w-screen flex flex-col justify-end p-5 overflow-clip">
      <div className="bottom">
        <div className="jobs flex justify-between">
          <div className="job text-yellow selection:bg-yellow selection:text-black">
            UI/UX Designer
          </div>
          <div className="job text-red selection:bg-red selection:text-black">
            Data Analyst
          </div>
          <div className="job text-blue selection:bg-blue selection:text-black">
            Front-end Developer
          </div>
        </div>
        <div className="move flex gap-16 whitespace-nowrap no-scrollbar select-none">
          {Array.from({ length: 3 }).map((_) => (
            <div className="marquee">
              <h1 className="name text-7xl">
                <span className="text-yellow">Sumedha</span>
                <span className="text-red"> Singh</span>
                <span className="text-blue"> Rathor</span>
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Landing;
