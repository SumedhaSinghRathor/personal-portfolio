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
    <a href={certificate.link} className="m-auto">
      <div className="relative w-full">
        <div className="bg-white size-full">
          <img src={certificate.img} alt={certificate.name} />
        </div>
        <div className="absolute text-yellow top-0 size-full bg-linear-to-b from-black/40 to to-black opacity-0 hover:opacity-100 p-4 flex flex-col justify-end gap-2">
          <div>
            <h2 className="md:text-xl lg:text-2xl line-clamp-2">
              {certificate.name}
            </h2>
          </div>
          <div className="flex justify-between">
            <p className="text-xs md:text-sm">{certificate.dateIssued}</p>
            <p className="text-xs md:text-sm">{certificate.issueOrg}</p>
          </div>
        </div>
      </div>
    </a>
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
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certificationList}
        </div>
      </div>
    </div>
  );
}

export default CertificateModal;
