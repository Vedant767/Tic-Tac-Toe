import { useState } from "react";
import { CONSTANTS } from "../constants";

const TicTacToe = () => {
  const noOfBlocks = new Array(9).fill(null);
  const [board, setBoard] = useState(noOfBlocks);
  const [player, setPlayer] = useState("O");
  const [title, setTitle] = useState(
    CONSTANTS.PLAYER_TEXT.replace("player_name", player)
  );

  const boardHandler = (index) => {
    board[index] = player;

    setBoard(board);
    playerOnClickHandler();
    const winner = checkTheWinner(player);
    console.log(winner);
    if (winner) {
      setTitle(CONSTANTS.WINNER_TEXT.replace("player_name", player));
    }
  };

  const checkTheWinner = (value) => {
    const { BOARD_WINNER_PATTERNS } = CONSTANTS;

    for (let pattern of BOARD_WINNER_PATTERNS) {
      const [a, b, c] = pattern;
      if (board[a] === value && board[b] === value && board[c] === value)
        return true;
    }
    return false;
  };

  const playerOnClickHandler = () => {
    const playerValue = player === "O" ? "X" : "O";
    setPlayer(playerValue);
  };

  const resetAction = () => setBoard(noOfBlocks);

  return (
    <div className="tic-tac-toe">
      <div className="tic-tac-toe-inner-text">
        <h3>{title}</h3>
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
