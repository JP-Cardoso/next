"use client";

import Modal from "@/_components/Modal-Wrong";
import { useState } from "react";
import "./style.scss";
import { ModalComposition } from "@/_components/Modal-composition";

export default function ModalPage() {

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div>

        <h1>1° Implementação</h1>
        <button
          type="button"
          onClick={() => handleOpenModal()}
          className="open-modal-btn"
        >
          Abir modal
        </button>
        {/* <Modal
          isOpen={showModal}
          onClose={() => handleCloseModal()}
          isActions
          isHeaderCloseBtn
        /> */}
      </div>

      <div>
        <h1>2° Implementação com composition pattern</h1>

        <button
          type="button"
          onClick={() => handleOpenModal()}
          className="open-modal-btn"
        >
          Abir modal composition
        </button>

        <ModalComposition.Root
          isOpen={showModal}
          onClose={() => handleCloseModal()}
        >
          <ModalComposition.Header>
            <div
              className="header-close-modal-btn"
            >
              <button onClick={() => handleCloseModal()}>X</button>
            </div>
            <h3>Modal composition</h3>
          </ModalComposition.Header>
          <ModalComposition.Content>
            <p>Aoooba</p>
            <p>Aoooba</p>
            <p>Aoooba</p>
            <p>Aoooba</p>
          </ModalComposition.Content>
          <ModalComposition.Actions>
            <div>
              {/* <ModalComposition.Action>
                <button>salvar</button>
              </ModalComposition.Action> */}

              <ModalComposition.Action>
                <button>cancelar</button>
              </ModalComposition.Action>
            </div>
          </ModalComposition.Actions>
        </ModalComposition.Root>
      </div>
    </>
  )
}