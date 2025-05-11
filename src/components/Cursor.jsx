import React, { useEffect } from "react";
import { gsap } from "gsap";

function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById("cursor");

    // 🧠 Move the cursor
    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.3,
        ease: "power4.out",
      });
    };

    // 🧠 Scale up/down on a/button hover using event delegation
    const handleMouseOver = (e) => {
      if (["A", "BUTTON"].includes(e.target.tagName)) {
        gsap.to(cursor, { scale: 1.5, duration: 0.2 });
      }
    };

    const handleMouseOut = (e) => {
      if (["A", "BUTTON"].includes(e.target.tagName)) {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      }
    };

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      id="cursor"
      className="fixed -top-6 -left-6 size-12 rounded-full border-1 border-white/70 z-10 pointer-events-none"
    />
  );
}

export default Cursor;
