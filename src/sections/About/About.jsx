import Id from "./Id";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function About() {
  return (
    <div className="w-full min-h-screen max-h-fit flex flex-col-reverse lg:flex-row items-center lg:items-end justify-end p-5 gap-10 text-blue selection:bg-blue selection:text-black">
      <div className="text-end">
        <FontAwesomeIcon
          icon={faArrowDown}
          className="-rotate-45 text-8xl hidden lg:block"
        />
        <div className="leading-6 text-blue">
          I am an enthusiastic and adaptable tech enthusiast with expertise in
          full-stack development, UI/UX design, data analysis, and machine
          learning. I enjoy creating complete digital solutions, from designing
          intuitive and engaging user interfaces to engineering robust backend
          systems. My background in data analysis and machine learning helps me
          to develop intelligent applications that not only perform properly but
          also deliver useful insights. I thrive at the convergence of design,
          development, and data, and I am constantly motivated to learn and take
          on new challenges that combine creative with technology.
        </div>
      </div>
      <Id />
    </div>
  );
}

export default About;
