import { useState, useEffect } from "react";
import { FaHandPaper, FaHandScissors, FaHandRock } from "react-icons/fa";
import "./App.css";
import { playerWin, machineWin } from "./winConditions";
import Container from "./components/Container";
import Placar from "./components/Placar";
import PlacarBox from "./components/PlacarBox";
import Tabuleiro from "./components/Tabuleiro";
import Painel from "./components/Painel";
import Player from "./components/Player";
import ButtonPlay from "./components/ButtonPlay";

function App() {
  const [player, setPlayer] = useState(null);
  const [machine, setMachine] = useState(null);
  const [score, setScore] = useState({ player: 0, machine: 0 });
  const [result, setResult] = useState("");

  useEffect(() => {
    if (player && machine) {
      checkResult(player, machine);
    }
  }, [player]);

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
      return;
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
        <Container>
          <Placar>
            <h4>Placar</h4>
            <PlacarBox>
              <Player name={"Jogador"} score={score.player} />
              <Player name={"Bot"} score={score.machine} />
            </PlacarBox>
          </Placar>
          <Tabuleiro>
            <div>
              <div>
                Jogada máquina:
                {machine && <span>{machine}</span>}
              </div>
              <hr />
              <div>
                Jogada player:
                {player && <span>{player}</span>}
              </div>
            </div>
            <hr />
            <div>
              <h3>Vencedor: {result} </h3>
              <button disabled={result ? false : true} onClick={resetGame}>
                Jogar novamente
              </button>
            </div>
          </Tabuleiro>
          <Painel>
            <ButtonPlay
              disabled={!result ? false : true}
              func={playerPlay}
              number={1}
            >
              <FaHandRock />
            </ButtonPlay>
            <ButtonPlay
              disabled={!result ? false : true}
              func={playerPlay}
              number={2}
            >
              <FaHandPaper />
            </ButtonPlay>
            <ButtonPlay
              disabled={!result ? false : true}
              func={playerPlay}
              number={3}
            >
              <FaHandScissors />
            </ButtonPlay>
          </Painel>
        </Container>
      </header>
    </div>
  );
}

export default App;
