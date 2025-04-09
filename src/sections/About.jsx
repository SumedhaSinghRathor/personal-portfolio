import React from "react";
import pfp from "/behance profile.jpg";

function About() {
  return (
    <div className="w-full min-h-screen max-h-fit flex items-center p-16 gap-10">
      <img
        src={pfp}
        alt="photo of me"
        className="h-[80vh] w-[30vw] rounded-2xl"
      />
      <div className="desc text-blue text-end selection:text-black selection:bg-blue">
        <p>
          I'm a detail oriented, quick learner and a motivated student seeking
          opportunities to apply academic knowledge in a real world setting. I
          am a person who works hard, is enthused, motivated by myself and
          dependable. I am a responsible team player who can easily adjust to
          different circumstances.
        </p>
        <br />
        <p>
          I have the ability to operate both independently and in a
          collaborative setting. I can stay on tasks and meet deadlines even
          under pressure. As a dedicated and passionate Computer Science and
          Engineering (CSE) student, I quite enjoy exploring the constantly
          developing landscape of technology and its boundless possibilites.
        </p>
        <br />
        <p>
          Beyond the classroom, I am continously seeking opportunities to expand
          my skill set and stay in touch with the latest industry trends. With a
          keen interest in front-end development, data analysis and software
          design, I am committed to leveraging my knowledge and creativity to
          contribute meaningfully to the tech community and drive future
          advancements in the field.
        </p>
      </div>
    </div>
  );
}

export default About;
