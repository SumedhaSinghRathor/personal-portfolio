import { useState } from "react";
import CertificateModal from "./CertificateModal";

function Certificates() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="text-xl text-center py-2 px-5 bg-black hover:bg-yellow text-yellow hover:text-black border border-yellow rounded-lg flex-col gap-3 transition-colors hidden md:flex"
      >
        Relevant Certificates
      </button>
      {showModal && <CertificateModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default Certificates;
