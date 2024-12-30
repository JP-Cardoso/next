"use client";

import Modal from "@/_components/Modal-Wrong";
import { useState } from "react";
import "./style.scss";

export default function ModalPage() {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <button
        type="button"
        onClick={() => handleOpenModal()}
        className="open-modal-btn"
      >
        Abir modal
      </button>
      <Modal
        isOpen={showModal}
        onClose={() => handleCloseModal()}
        isActions
        isHeaderCloseBtn
      />
    </>
  )
}