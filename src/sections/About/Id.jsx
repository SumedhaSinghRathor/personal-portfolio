import React from "react";
import pfp from "/behance profile.jpg";

function Id() {
  return (
    <div className="bg-blue flex shrink-0 w-2xs h-[450px] p-0 m-0 justify-between rounded-2xl border-2  border-blue select-none overflow-clip">
      <div className="info flex flex-col justify-between flex-auto m-4">
        <div className="pfp">
          <img src={pfp} className="aspect-6/9 w-[85%]" alt="" />
        </div>
        <div className="word flex flex-col gap-2 text-black">
          <div className="name">
            <span className="font-black">Sumedha Singh Rathor</span>
            <hr />
            <span className="text-xs">Name</span>
          </div>
          <div className="dob">
            <span className="font-black">16-01-2005</span>
            <hr />
            <span className="text-xs">DOB</span>
          </div>
        </div>
      </div>
      <div className="banner h-inherit">
        <h2
          style={{ writingMode: "sideways-rl" }}
          className="h-full bg-black text-blue text-2xl pt-6 font-bold font-mono"
        >
          4th Year, B.Tech CSE
        </h2>
      </div>
    </div>
  );
}

export default Id;
