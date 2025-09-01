import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faBehanceSquare,
  faHackerrank,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import pdf from "../../assets/Sumedha_Singh_Rathor__DEV__Resume.pdf";
import "./Contacts.css";

function Contacts() {
  const contacts = [
    { icon: "E-Mail", tag: faEnvelope, link: "mailto:sumedharathor@gmail.com" },
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
      tag: faFilePdf,
      link: pdf,
    },
  ];

  const contactList = contacts.map((contact) => (
    <a href={contact.link} target="_blank">
      <div className="container">
        <div
          data-content={contact.icon}
          className="group flex flex-col items-center gap-4 lg:-m-4"
        >
          <FontAwesomeIcon
            icon={contact.tag}
            className="text-6xl md:text-8xl size-fit text-red group-hover:text-black bg-black group-hover:bg-red p-6 lg:p-10 rounded-full border border-red lg:border-2 transition-colors"
          />{" "}
          <p className="text-lg md:hidden">{contact.icon}</p>
        </div>
        <hr className="lg:hidden"></hr>
      </div>
    </a>
  ));

  return (
    <section className="w-screen min-h-screen max-h-fit flex justify-center items-center text-red">
      <div className="border-t border-red lg:border-0 grid md:grid-cols-2 lg:flex">
        {contactList}
      </div>
    </section>
  );
}

export default Contacts;
