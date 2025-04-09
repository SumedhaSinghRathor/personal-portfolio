import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faBehanceSquare,
  faHackerrank,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import pdf from "../../assets/Sumedha Singh Rathor RESUME.pdf";
import "./Contacts.css";

function Contacts() {
  const contacts = [
    {
      icon: "E-Mail",
      tag: faEnvelope,
      link: "mailto:sumedharathor@gmail.com",
    },
    {
      icon: "LinkedIn",
      tag: faLinkedin,
      link: "https://www.linkedin.com/in/sumedha-singh-rathor-93874726a",
    },
    {
      icon: "Behance",
      tag: faBehanceSquare,
      link: "https://www.behance.net/sumedhasinghrathor",
    },
    {
      icon: "HackerRank",
      tag: faHackerrank,
      link: "https://www.hackerrank.com/profile/sumedharathor",
    },
    {
      icon: "GitHub",
      tag: faGithub,
      link: "https://github.com/SumedhaSinghRathor",
    },
    {
      icon: "Resume",
      tag: faFile,
      link: pdf,
    },
  ];

  const contactList = contacts.map((contact) => (
    <a
      href={contact.link}
      target="_blank"
      className="links"
      data-content={contact.icon}
    >
      <FontAwesomeIcon
        className="icons text-red bg-black hidden border-2 border-red p-[4vw] rounded-[50%] hover:bg-red hover:text-black -m-4 transition:ease-in-out duration-300"
        icon={contact.tag}
      />
    </a>
  ));

  return (
    <section className="w-screen h-screen">
      <div className="contact w-full h-full flex justify-center items-center text-[10vw]">
        {contactList}
      </div>
    </section>
  );
}

export default Contacts;
