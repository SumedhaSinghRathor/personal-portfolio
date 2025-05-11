import React from "react";
import img2 from "/Asset 1.ico";

function Navbar({ onLinkClick }) {
  return (
    <div className="flex items-center justify-between py-1 px-2.5 m-5 rounded-2xl bg-black/70 fixed w-[-webkit-fill-available] backdrop-blur-2xl select-none">
      <a href="/" className="web_logo w-16 shrink-0">
        <img src={img2} alt="" className="" />
      </a>
      <div className="navbar flex gap-8">
        <button
          className="link hover:text-white text-sm text-blue"
          onClick={() => onLinkClick("About")}
        >
          ABOUT ME
        </button>
        <button
          className="link hover:text-white text-sm text-red"
          onClick={() => onLinkClick("Experience")}
        >
          EXPERIENCE
        </button>
        <button
          className="link hover:text-white text-sm text-yellow"
          onClick={() => onLinkClick("Skills")}
        >
          SKILLS
        </button>
        <button
          className="link hover:text-white text-sm text-blue"
          onClick={() => onLinkClick("Projects")}
        >
          PROJECTS
        </button>
        <button
          className="link hover:text-white text-sm text-red"
          onClick={() => onLinkClick("Contacts")}
        >
          CONTACT ME
        </button>
        <button
          className="link hover:text-white text-sm text-yellow"
          onClick={() => onLinkClick("More")}
        >
          MORE
        </button>
      </div>
    </div>
  );
}

export default Navbar;
