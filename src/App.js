import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import TeamsModal from './components/Modals/TeamModal';
import SoloModal from './components/Modals/SoloModal';
import Solo from './components/Solo';
import Team from './components/Team';


function App() {
  const [isTeams, setIsTeams] = useState(false);
  const [isSolo, setIsSolo] = useState(false);
  const [teamNames, setTeamNames] = useState([]);
  const [soloNames, setSoloNames] = useState([]);



  function updateGameMode(mode) {
    if (mode === 'teams') {
      setIsTeams(true);
      setIsSolo(false);
    } else if (mode === 'solo') {
      setIsTeams(false);
      setIsSolo(true);
    } else {
      setIsTeams(false);
      setIsSolo(false);
    }
  }

  function setTeamInfo(t1, t2) {
    const teams = [t1, t2];
    setTeamNames(teams)
  }

  function setSoloInfo(p1, p2, p3) {
    const players = [p1, p2, p3];
    setSoloNames(players)
  }



  return (
    <div>
      <Header />
      <div className="content">
        {!isTeams && !isSolo && <div className="game-mode">
          <h2>Quantidade de Equipes</h2>
          <div>
            <TeamsModal onClick={() => updateGameMode('teams')} setTeamInfo={setTeamInfo}>2</TeamsModal>
            {/* Solo desativado enquanto estiver em desenvolvimento */}
            <SoloModal onClick={() => updateGameMode('')} setSoloInfo={setSoloInfo}>3</SoloModal>
          </div>
        </div>}
        {isTeams && !isSolo && <Team teamNames={teamNames} />}
        {isSolo && !isTeams && <Solo soloNames={soloNames} />}
      </div>
      <Footer />
    </div>
  )
}

export default App;
