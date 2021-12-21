import React, { useState, useEffect } from "react";


export default function Solo(props) {
  const [addTeam1, setAddTeam1] = useState('')
  const [addTeam2, setAddTeam2] = useState('')
  const [addTeam3, setAddTeam3] = useState('')
  const [scoreTeam1, setScoreTeam1] = useState(0);
  const [scoreTeam2, setScoreTeam2] = useState(0);
  const [scoreTeam3, setScoreTeam3] = useState(0);
  const [historyTeam1, setHistoryTeam1] = useState([]);
  const [historyTeam2, setHistoryTeam2] = useState([]);
  const [historyTeam3, setHistoryTeam3] = useState([]);

  useEffect(() => { }, [historyTeam1, historyTeam2, historyTeam3]);

  return (
    <div className="solo">
      <h2>Jogadores</h2>
      <div className="info">
        <div className='team-info'>
          <h3>{props.soloNames[0]}</h3>
          <p><b>Pontuação: </b> {scoreTeam1}</p>
          <div className='add-points'>
            <input type="number" placeholder="0" value={addTeam1} onChange={(e) => setAddTeam1(e.target.value)} />
            <button onClick={() => {
              if (isNaN(parseInt(addTeam1))) {
                setScoreTeam1(parseInt(scoreTeam1) + parseInt(addTeam1))
                setHistoryTeam1([...historyTeam1, parseInt(addTeam1)])
              }
              setAddTeam1('')
            }}>+</button>
          </div>
          {historyTeam1.map((item, index) => {
            return (
              <p key={index}>{index + 1}ª Adição: {item}</p>
            )
          })}
        </div>
        <div className='team-info'>
          <h3>{props.soloNames[1]}</h3>
          <p><b>Pontuação: </b> {scoreTeam2}</p>
          <div className='add-points'>
            <input type="number" placeholder="0" value={addTeam2} onChange={(e) => setAddTeam2(e.target.value)} />
            <button onClick={() => {
              if (isNaN(parseInt(addTeam2))) {
                setScoreTeam2(parseInt(scoreTeam2) + parseInt(addTeam2))
                setHistoryTeam2([...historyTeam2, parseInt(addTeam2)])
              }
              setAddTeam2('')
            }}>+</button>
          </div>
          {historyTeam2.map((item, index) => {
            return (
              <p key={index}>{index + 1}ª Adição: {item}</p>
            )
          })}
        </div>
        <div className='team-info'>
          <h3>{props.soloNames[2]}</h3>
          <p><b>Pontuação: </b> {scoreTeam3}</p>
          <div className='add-points'>
            <input type="number" placeholder="0" value={addTeam3} onChange={(e) => setAddTeam3(e.target.value)} />
            <button onClick={() => {
              if (isNaN(parseInt(addTeam3))) {
                setScoreTeam3(parseInt(scoreTeam3) + parseInt(addTeam3))
                setHistoryTeam3([...historyTeam3, parseInt(addTeam3)])
              }
              setAddTeam3('')
            }}>+</button>
          </div>
          {historyTeam3.map((item, index) => {
            return (
              <p key={index}>{index + 1}ª Adição: {item}</p>
            )
          })}
        </div>
      </div>
    </div>
  )
}