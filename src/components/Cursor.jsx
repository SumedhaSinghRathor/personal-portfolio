import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

function Cursor() {
  useGSAP(() => {
    const handleMouseMove = () => {
      const { clientX, clientY } = event;
      gsap.to("#cursor", {
        x: clientX,
        y: clientY,
        duration: 0.7,
        ease: "power4.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
  });

  return (
    <div
      id="cursor"
      className="fixed -top-6 -left-6 size-12 rounded-full border border-white pointer-events-none z-9 hidden lg:block"
    />
  );
}

export default Cursor;
