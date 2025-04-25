import React from "react";
import img2 from "/Asset 1.ico";

function Navbar() {
  return (
    <div className="flex items-center justify-between py-1 px-2.5 m-5 rounded-2xl bg-black/70 fixed w-[-webkit-fill-available] backdrop-blur-2xl select-none">
      <div className="web_logo w-16 shrink-0">
        <img src={img2} alt="" className="" />
      </div>
      <div className="navbar flex gap-8">
        <div className="link hover:text-white text-sm text-blue">ABOUT ME</div>
        <div className="link hover:text-white text-sm text-red">EXPERIENCE</div>
        <div className="link hover:text-white text-sm text-yellow">SKILLS</div>
        <div className="link hover:text-white text-sm text-blue">PROJECTS</div>
        <div className="link hover:text-white text-sm text-red">CONTACT ME</div>
        <div className="link hover:text-white text-sm text-yellow">MORE</div>
      </div>
    </div>
  );
}

export default Navbar;
