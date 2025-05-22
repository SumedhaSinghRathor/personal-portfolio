import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";

function Preloader() {
  useGSAP(() => {
    const counter3 = document.querySelector(".counter-3");

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        const div = document.createElement("div");
        div.className = "num";
        div.textContent = j;
        counter3.appendChild(div);
      }
    }

    const finalDiv = document.createElement("div");
    finalDiv.className = "num";
    finalDiv.textContent = "0";
    counter3.appendChild(finalDiv);

    function animate(counter, duration, delay = 0) {
      const numHeight = counter.querySelector(".num").clientHeight;
      const totalDistance =
        (counter.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power3.inOut",
      });
    }

    // Counter animation
    animate(counter3, 5);
    animate(document.querySelector(".counter-2"), 6);
    animate(document.querySelector(".counter-1"), 2, 4);

    let load_animation = gsap.timeline();

    // Disappearing animation
    load_animation.to(".digit", {
      top: "-100%",
      stagger: {
        amount: 0.25,
      },
      delay: 6,
      duration: 1,
      ease: "power4.inOut",
    });

    load_animation.to(".loading-screen", {
      height: "0px",
      duration: 0.3,
      delay: 0.1,
      stagger: -0.3,
    });
  });

  return (
    <>
      <div className="loading-screen fixed top-0 left-0 w-full h-full pointer-events-none z-10 bg-blue"></div>
      <div className="loading-screen fixed top-0 left-0 w-full h-full pointer-events-none z-10 bg-red"></div>
      <div className="loading-screen fixed top-0 left-0 w-full h-full pointer-events-none z-10 bg-yellow text-red">
        <div
          className="counter flex text-8xl absolute right-12 bottom-12 h-24"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100px, 0 100px)" }}
        >
          <div className="counter-1 digit relative top-0">
            <div className="num">0</div>
            <div className="num num1offset1 relative -right-8 leading-[102px]">
              1
            </div>
          </div>
          <div className="counter-2 digit relative top-0">
            <div className="num">0</div>
            <div className="num num1offset1 relative -right-8 leading-[102px]">
              1
            </div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
            <div className="num">0</div>
          </div>
          <div className="counter-3 digit relative top-0">
            <div className="num">0</div>
            <div className="num num1offset1 relative -right-8 leading-[102px]">
              1
            </div>
            <div className="num">2</div>
            <div className="num">3</div>
            <div className="num">4</div>
            <div className="num">5</div>
            <div className="num">6</div>
            <div className="num">7</div>
            <div className="num">8</div>
            <div className="num">9</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Preloader;
