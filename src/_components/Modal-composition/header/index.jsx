"use client";

import "./style.scss";

export default function ModalHeader({
  children
}) {
  return (
    <header className="modal-header">
      {children}
    </header>
  )
}