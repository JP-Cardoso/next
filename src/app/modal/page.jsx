"use client";

import Modal from "@/_components/Modal";
import { useState } from "react";

export default function ModalPage() {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <button
        type="button"
        onClick={() => handleOpenModal()}
      >
        Abir modal
      </button>
      <Modal 
        isOpen={showModal} 
        onClose={() => handleCloseModal()} 
      />
    </>
  )
}