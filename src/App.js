import { useState, useEffect } from "react";
import "./App.css";
import { playerWin, machineWin } from "./winConditions";

function App() {
  const [player, setPlayer] = useState(null);
  const [machine, setMachine] = useState(null);
  const [score, setScore] = useState({ player: 0, machine: 0 });
  const [result, setResult] = useState("");

  useEffect(() => {
    if (player && machine) {
      checkResult(player, machine);
    }
  }, [player, machine, result]);

  const machinePlay = () => {
    const random = Math.floor(Math.random() * 3 + 1);
    setMachine(random);
  };

  const playerPlay = (play) => {
    setPlayer(play);
    machinePlay();
  };

  const checkResult = (player, machine) => {
    if (player === machine) {
      setResult("Empate!");
    }
    let p = false;
    playerWin.forEach((element) => {
      if (JSON.stringify(element) === JSON.stringify([player, machine])) {
        p = true;
      }
    });

    if (p) {
      setResult("Jogador!");
      setScore({ ...score, player: score.player + 1 });
      return;
    }

    let m = false;
    machineWin.forEach((element) => {
      if (JSON.stringify(element) === JSON.stringify([player, machine])) {
        m = true;
      }
    });
    if (m) {
      setResult("Máquina!");
      setScore({ ...score, machine: score.machine + 1 });
      return;
    }
  };

  const resetGame = () => {
    setPlayer(null);
    setMachine(null);
    setResult(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="placar">
            <h3>Placar</h3>
            <div>
              <div>
                Player: <span>{score.player}</span>
              </div>
              <hr />
              <div>
                Máquina: <span>{score.machine}</span>
              </div>
            </div>
          </div>
          <hr />
          <div className="tabuleiro">
            <div>
              Jogada máquina:
              {machine && <span>{machine}</span>}
            </div>
            <hr />
            <div>
              Jogada player:
              {player && <span>{player}</span>}
            </div>
            {result && (
              <div>
                <h3>Vencedor: {result} </h3>
                <button onClick={() => resetGame()}>Jogar novamente</button>
              </div>
            )}
          </div>
          <hr />
          <div className="painel">
            {!result && <button onClick={() => playerPlay(1)}>Pedra</button>}
            {!result && <button onClick={() => playerPlay(2)}>Papel</button>}
            {!result && <button onClick={() => playerPlay(3)}>Tesoura</button>}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
