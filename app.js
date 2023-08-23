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
  resetBoard = () => {
    let board = [];
    for (let i = 0; i < 7; i++) {
      board[i] = [];
      for (let j = 0; j < 6; j++) {
        board[i].push(0);
      }
    }
    this.board = board;
  };
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
    const diagonalCheck = () => {
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
    };
    //--------function to check diagonal in 4x4 array

    const verticalCheck = () => {};

    for (let i = 0; i < 7; i++) {
      for (let j = 0; j < 3; j++) {
        let counter = 0;
        let testValue = this.board.board[i][j];
        for (let x = 0; x < 4; x++) {
          if (testValue === this.board.board[i][x + j] && testValue != 0) {
            counter++;
          }
        }
        if (counter === 4) {
          isWin = true;
        }
      }
    }

    //================HORIZONTAL CHECK ======================
    const horizontalCheck = () => {
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 4; j++) {
          let counter = 0;
          let testValue = this.board.board[j][i];
          for (let x = 0; x < 4; x++) {
            if (testValue === this.board.board[j + x][i] && testValue != 0) {
              counter++;
            }
          }
          if (counter === 4) {
            isWin = true;
          }
        }
      }
    };

    horizontalCheck();
    verticalCheck();
    diagonalCheck();
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
  game.board.setToken(2, 3);
  game.board.setToken(2, 3);
  game.board.setToken(1, 3);
  game.board.setToken(2, 3);
  game.board.setToken(2, 4);
  game.board.setToken(1, 4);
};
console.log("first");
testValues();
game.board.printBoard();

console.log(game.checkWin());
