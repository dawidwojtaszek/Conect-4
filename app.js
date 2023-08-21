class Board {
  constructor() {
    let board = [];
    for (let i = 0; i < 7; i++) {
      board[i] = [];
      for (let j = 0; j < 6; j++) {
        board[i].push(0);
      }
    }
    this.board = board;
  }
  printBoard = () => {
    for (let i = 5; i >= 0; i--) {
      const row = this.board.map((e) => e[i]);
      console.log(row);
    }
  };
  setToken = (player, row) => {
    let i = this.board[row].indexOf(0);
    this.board[row][i] = player;
  };
  resetBoard = () => {};
}
class GameControl {
  constructor(playerOne, playerTwo, board) {
    this.board = board;
    this.playerOne = { name: playerOne, token: 1, score: 0 };
    this.playerTwo = { name: playerTwo, token: 2, score: 0 };
    this.activePlayer = 1;
    this.round = { nr: 1, started: 1 };
  }
  changeActivePlayer = () => {
    if (this.activePlayer === 1) {
      this.activePlayer = 2;
    } else {
      this.activePlayer = 1;
    }
  };
  checkWin = () => {
    let isWin = false;
    // =============== DIAGONAL CHECK ==================

    //--------function to check diagonal in 4x4 array
    const smallDiagonalCheckRight = (x, y) => {
      let counter = 0;
      let testValue = this.board.board[x][y];

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (i === j) {
            if (
              this.board.board[x + i][y + j] === testValue &&
              testValue != 0
            ) {
              counter++;
            }
          }
        }
      }
      return counter;
    };
    const smallDiagonalCheckLeft = (x, y) => {
      let counter = 0;
      let testValue = this.board.board[x][y + 3];

      for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
          if (i + j === 3) {
            if (
              this.board.board[x + i][y + j] === testValue &&
              testValue != 0
            ) {
              counter++;
            }
          }
        }
      }
      return counter;
    };

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        if (
          smallDiagonalCheckLeft(i, j) >= 4 ||
          smallDiagonalCheckRight(i, j) >= 4
        ) {
          isWin = true;
        }
      }
    }
    //================HORIZONTAL CHECK ======================
    for (let i = 0; i <= this.board.board.length; i++) {
      const counter1 = this.board.board[i].filter((e) => e === 1).length;
      const counter2 = this.board.board[i].filter((e) => e === 2).length;

      if (counter1 >= 4 || counter2 >= 4) {
        isWin = true;
      }
    }
    return isWin;
  };
  changeRound = () => {};
}

const board = new Board();

const game = new GameControl("asdfas", "dddd", board);
game.board.printBoard();

const testValues = () => {
  game.board.setToken(1, 0);
  game.board.setToken(1, 1);
  game.board.setToken(1, 1);
  game.board.setToken(1, 2);
  game.board.setToken(1, 2);
  game.board.setToken(1, 2);
  game.board.setToken(1, 3);
  game.board.setToken(1, 3);
  game.board.setToken(1, 3);
  game.board.setToken(1, 3);
};
console.log("first");
testValues();
game.board.printBoard();

game.checkWin();
