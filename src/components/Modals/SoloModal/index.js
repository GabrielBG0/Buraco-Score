import React, { useState } from "react";
import Modal from 'react-modal'
import '../modals.css'

Modal.setAppElement('#root')

export default function SoloModal(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [soloOneName, setSoloOneName] = useState('')
  const [soloTwoName, setSoloTwoName] = useState('')
  const [soloThreeName, setSoloThreeName] = useState('')

  function openModal() {
    setIsOpen(true)
  }

  function closeModal(e) {
    e.stopPropagation()
    setIsOpen(false)
  }

  function save(e) {
    props.onClick()
    props.setSoloInfo(soloOneName, soloTwoName, soloThreeName)
    closeModal(e)
  }
  return (
    <button className="game-mode-button" onClick={() => { openModal() }}>
      {props.children}
      < Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Solo Startup"
      >
        <div className="modal-content">
          <h1>Jogadores</h1>
          <div className="modal-solo-input">
            <div className="modal-solo-info">
              <h2>Jogador 1</h2>
              <div className="modal-lable-input">
                <label>Nome do Jogador: </label>
                <input type="text" autoComplete="off" value={soloOneName} onChange={e => setSoloOneName(e.target.value)} />
              </div>
            </div>
            <div className="modal-solo-info">
              <h2>Jogador 2</h2>
              <div className="modal-lable-input">
                <label>Nome do Jogador: </label>
                <input type="text" autoComplete="off" value={soloTwoName} onChange={e => setSoloTwoName(e.target.value)} />
              </div>
            </div>
            <div className="modal-solo-info">
              <h2>Jogador 3</h2>
              <div className="modal-lable-input">
                <label>Nome do Jogador: </label>
                <input type="text" autoComplete="off" value={soloThreeName} onChange={e => setSoloThreeName(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="modal-button-container">
            <button onClick={save}>Salvar</button>
            <button onClick={closeModal}>Cancelar</button>
          </div>
        </div>
      </Modal >
    </button >
  )
}
