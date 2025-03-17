"use client"

import { useEffect, useRef } from "react";
import "./style.scss";

export default function ModalRoot({
  children,
  isOpen,
  onClose,
}) {

  const modalRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      modalRef.current?.close();
      return;
    }

    modalRef.current?.showModal();
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <dialog
      className="dialog-container-composition"
      ref={modalRef}
    >
      {children}
    </dialog>
  )
}