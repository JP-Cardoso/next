"use client";
import { useEffect } from "react";
import { useRef } from "react"

export default function Modal({ isOpen, onClose }) {

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
      ref={modalRef}
    >
      <header>
        <button onClick={onClose}>X</button>
      </header>
      <div className="content">
        <p>Aoooba</p>
      </div>
    </dialog>
  )
}