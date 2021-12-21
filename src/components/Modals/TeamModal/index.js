import React, { useState } from "react";
import Modal from 'react-modal'
import '../modals.css'

Modal.setAppElement('#root')

export default function TeamsModal(props) {
  const [isOpen, setIsOpen] = useState(false)
  const [teamOneName, setTeamOneName] = useState('')
  const [teamTwoName, setTeamTwoName] = useState('')

  function openModal() {
    setIsOpen(true)
  }

  function closeModal(e) {
    e.stopPropagation()
    setIsOpen(false)
  }

  function save(e) {
    props.onClick()
    props.setTeamInfo(teamOneName, teamTwoName)
    closeModal(e)
  }

  return (
    <button className="game-mode-button" onClick={openModal}>
      {props.children}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
        contentLabel="Team Startup"
      ><div className="modal-content">
          <h1>Criação dos Times</h1>
          <div className="modal-team-input">
            <div className="modal-team-info">
              <h2>Time 1</h2>
              <div className="modal-lable-input">
                <label>Nome do Time: </label>
                <input type="text" value={teamOneName} onChange={e => setTeamOneName(e.target.value)} />
              </div>
            </div>
            <div className="modal-team-info">
              <h2>Time 2</h2>
              <div className="modal-lable-input">
                <label>Nome do Time: </label>
                <input type="text" value={teamTwoName} onChange={e => setTeamTwoName(e.target.value)} />
              </div>
            </div>
          </div>
          <div className="modal-button-container">
            <button onClick={save}>Salvar</button>
            <button onClick={closeModal}>Cancelar</button>
          </div>
        </div>
      </Modal>
    </button>
  )
}