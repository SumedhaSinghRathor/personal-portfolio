import React, { useState } from "react";
import CertificateModal from "./CertificateModal";

function Certificates() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="text-xl text-center py-2 px-5 bg-black hover:bg-yellow text-yellow hover:text-black border-1 border-yellow rounded-2xl flex flex-col gap-3 cursor-pointer transition-colors"
      >
        Relevant Certificates
      </button>
      {showModal && <CertificateModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default Certificates;
