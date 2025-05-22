import React from "react";
import img2 from "/Asset 1.ico";

function Navbar({ onLinkClick }) {
  return (
    <div className="flex items-center justify-between py-1 px-2.5 m-5 rounded-2xl bg-black/70 fixed w-fit backdrop-blur-2xl select-none lg:w-[-webkit-fill-available]">
      <a href="/" className="web_logo w-16 shrink-0">
        <img src={img2} alt="" className="" />
      </a>
      <div className="navbar lg:flex gap-8 hidden">
        <button
          className="link hover:text-white/90 text-sm text-blue"
          onClick={() => onLinkClick("About")}
        >
          ABOUT ME
        </button>
        <button
          className="link hover:text-white/90 text-sm text-red"
          onClick={() => onLinkClick("Experience")}
        >
          EXPERIENCE
        </button>
        <button
          className="link hover:text-white/90 text-sm text-yellow"
          onClick={() => onLinkClick("Skills")}
        >
          SKILLS
        </button>
        <button
          className="link hover:text-white/90 text-sm text-blue"
          onClick={() => onLinkClick("Projects")}
        >
          PROJECTS
        </button>
        <button
          className="link hover:text-white/90 text-sm text-red"
          onClick={() => onLinkClick("Contacts")}
        >
          CONTACT ME
        </button>
        <button
          className="link hover:text-white/90 text-sm text-yellow"
          onClick={() => onLinkClick("More")}
        >
          MORE
        </button>
      </div>
    </div>
  );
}

export default Navbar;
