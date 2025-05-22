import React, { useRef } from "react";

function MoreModal({ onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const loggedIn = false;

  if (loggedIn) {
    return (
      <div
        ref={modalRef}
        onClick={closeModal}
        className="fixed inset-0 flex justify-center items-center p-5 bg-black/45 backdrop-blur-sm"
      >
        <div className="bg-yellow text-black p-5 size-fit rounded-2xl">
          <h1 className="text-2xl">Find my other portfolios</h1>
          <div className="stuff flex gap-4 border border-black flex-nowrap">
            <div className="portfolio-1">
              <div className="img-1 aspect-[4/3] h-40 bg-red"></div>
              <p>Portfolio 1</p>
            </div>
            <div className="portfolio-2">
              <div className="img-2 aspect-[4/3] h-40 bg-blue"></div>
              <p>Portfolio 2</p>
            </div>
            <div className="portfolio-3">
              <div className="img-3 aspect-[4/3] h-40 bg-green-500"></div>
              <p>Portfolio 3</p>
            </div>
            <div className="portfolio-4">
              <div className="img-4 aspect-[4/3] h-40 bg-purple-500"></div>
              <p>Portfolio 4</p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        ref={modalRef}
        onClick={closeModal}
        className="fixed inset-0 flex justify-center items-center p-5 bg-black/45 backdrop-blur-sm"
      >
        <div className="bg-yellow text-black p-5 size-full flex justify-center items-center rounded-2xl font-black">
          <p className="text-8xl -rotate-16 hover:underline">
            WORK IN PROGRESS
          </p>
        </div>
      </div>
    );
  }
}

export default MoreModal;
