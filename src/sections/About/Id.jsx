import { useEffect, useRef } from "react";
import gsap from "gsap";
import pfp from "/behance profile.jpg";

function Id() {
  const idRef = useRef(null);

  useEffect(() => {
    const element = idRef.current;
    if (!element) return;

    function rotateElement(event) {
      const rect = element.getBoundingClientRect();
      const middleX = rect.left + rect.width / 2;
      const middleY = rect.top + rect.height / 2;

      const offsetX = ((event.clientX - middleX) / (rect.width / 2)) * 20; // tilt range
      const offsetY = ((event.clientY - middleY) / (rect.height / 2)) * -20;

      gsap.to(element, {
        rotateX: offsetY,
        rotateY: offsetX,
        transformPerspective: 1000,
        transformOrigin: "center",
        duration: 0.4,
        ease: "power2.out",
      });
    }

    function resetRotation() {
      gsap.to(element, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power3.out",
      });
    }

    element.addEventListener("mousemove", rotateElement);
    element.addEventListener("mouseleave", resetRotation);
    return () => {
      element.removeEventListener("mousemove", rotateElement);
      element.removeEventListener("mouseleave", resetRotation);
    };
  }, []);

  return (
    <div
      ref={idRef}
      className="ID bg-blue flex shrink-0 w-2xs h-[450px] p-0 m-0 justify-between rounded-2xl border-2 border-blue select-none overflow-clip"
    >
      <div className="info flex flex-col justify-between flex-auto m-4">
        <div className="pfp">
          <img src={pfp} className="aspect-2/3 w-[85%]" alt="" />
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
      <div className="banner h-full">
        <h2
          style={{ writingMode: "vertical-rl" }}
          className="h-full bg-black text-blue text-2xl pt-6 font-bold font-mono"
        >
          4th Year, B.Tech CSE
        </h2>
      </div>
    </div>
  );
}

export default Id;
