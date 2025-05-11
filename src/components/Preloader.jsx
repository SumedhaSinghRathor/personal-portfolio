import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import gsap from "gsap";

function Preloader() {
  const counter3Ref = useRef(null);

  useGSAP(() => {
    if (!counter3Ref.current) return;

    const counter3 = counter3Ref.current;

    // Create number elements dynamically
    const numbers = [];
    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 10; j++) {
        numbers.push(j);
      }
    }
    numbers.push(0);

    // Add numbers to counter
    numbers.forEach((num) => {
      const div = document.createElement("div");
      div.className = "num";
      div.textContent = num;
      counter3.appendChild(div);
    });

    function animate(counter, duration, delay = 0) {
      const numHeight = counter.querySelector(".num")?.clientHeight || 0;
      const totalDistance =
        (counter.querySelectorAll(".num").length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: "power3.inOut",
      });
    }

    animate(counter3, 5);
    animate(document.querySelector(".counter-2"), 6);
    animate(document.querySelector(".counter-1"), 2, 4);
  });

  return (
    <div>
      <div className="loading-screen fixed top-0 left-0 w-full h-full pointer-events-none z-10 bg-blue"></div>
      <div className="loading-screen fixed top-0 left-0 w-full h-full pointer-events-none z-10 bg-red"></div>
      <div className="loading-screen fixed top-0 left-0 w-full h-full pointer-events-none z-10 bg-yellow text-red">
        <div
          className="counter fixed right-12 bottom-12 flex h-24 text-8xl leading-26 font-normal"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 100px, 0 100px)" }}
        >
          <div className="counter-1 relative top-0 digit">
            <div className="num">0</div>
            <div className="num num1offset1 relative -right-8">1</div>
          </div>
          <div className="counter-2 relative top-0 digit">
            <div className="num">0</div>
            <div className="num num1offset2 relative -right-8">1</div>
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
          <div
            className="counter-3 relative top-0 digit"
            ref={counter3Ref}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
