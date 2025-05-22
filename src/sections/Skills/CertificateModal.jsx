import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import certificates from "../../assets/certificates";

function CertificateModal({ onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const certificationList = certificates.map((certificate) => (
    <div className="w-98">
      <a href={certificate.link} target="_blank">
        <img src={certificate.img} alt={certificate.name} className="w-fit" />
      </a>
    </div>
  ));

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 flex justify-center items-center p-5 bg-black/45 backdrop-blur-sm"
    >
      <div className="bg-yellow text-black p-5 w-full h-full rounded-2xl overflow-scroll no-scrollbar items-center">
        <div className="flex items-center justify-between w-full mb-3">
          <p className="text-2xl">Certificates</p>
          <FontAwesomeIcon
            onClick={onClose}
            icon={faXmark}
            className="text-2xl"
          />
        </div>
        <div className="w-full flex flex-wrap justify-between gap-3 items-center">
          {certificationList}
        </div>
      </div>
    </div>
  );
}

export default CertificateModal;
