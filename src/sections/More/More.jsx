import { useState } from "react";
import MoreModal from "./MoreModal";

function More() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="h-screen w-screen text-yellow p-0 flex flex-col items-center justify-end select-none">
      <span className="text-7xl leading-[75%]">Click for</span>
      <br />
      <span>
        <h1
          className="more text-[30vw] font-light leading-[60%] cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          MORE
        </h1>
        {showModal && <MoreModal onClose={() => setShowModal(false)} />}
      </span>
    </section>
  );
}

export default More;
