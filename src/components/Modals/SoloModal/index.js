import React, { useState } from "react";
import Modal from 'react-modal'
import '../modals.css'

Modal.setAppElement('#root')

export default function SoloModal(props) {
  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal(e) {
    e.stopPropagation()
    setIsOpen(false)
  }
  return (
    < button className="game-mode-button" onClick={() => { openModal() }
    }>
      {props.children}
      < Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Team Startup"
      ></Modal >
    </button >
  )
}
