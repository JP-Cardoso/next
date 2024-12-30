"use client";
import { useEffect } from "react";
import { useRef } from "react"
import "./style.scss";

export default function Modal({
  isOpen,
  onClose,
  isActions,
  isHeaderCloseBtn
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
      className="dialog-container"
      ref={modalRef}
    >
      <header>
        {isHeaderCloseBtn && (
          <button onClick={onClose}>X</button>
        )}
      </header>
      <div className="content">
        <div className="content-info">
          <p>Aoooba</p>
          <p>Aoooba</p>
          <p>Aoooba</p>
          <p>Aoooba</p>
        </div>
      </div>
      {
        isActions && (
          <div className="actions">
            <button
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              onClick={onClose}
            >
              Salvar
            </button>
          </div>
        )
      }
    </dialog>
  )
}