import { useState } from "react";
import { CONSTANTS } from "../constants";

const TicTacToe = () => {
  const noOfBlocks = new Array(9).fill(null);
  const [board, setBoard] = useState(noOfBlocks);
  const [player, setPlayer] = useState("O");

  const boardHandler = (index) => {
    board[index] = player;

    setBoard(board);
    const playerValue = player === "O" ? "X" : "O";
    setPlayer(playerValue);
  };

  const resetAction = () => setBoard(noOfBlocks);

  return (
    <div className="tic-tac-toe">
      <div className="tic-tac-toe-inner-text">
        <h3>{CONSTANTS.PLAYER_TEXT.replace("player_name", player)}</h3>
        <button onClick={resetAction}>{CONSTANTS.BUTTON_TEXT}</button>
      </div>
      <div className="board">
        {board.map((value, index) => {
          return (
            <button
              className="board-block"
              onClick={() => boardHandler(index)}
              disabled={value !== null}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
