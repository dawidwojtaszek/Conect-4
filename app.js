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
    // =============== DIAGONAL CHECK ==================

    //--------function to check diagonal in 4x4 array
    const smallDiagonalCheck = (x, y) => {
      let counter = 0;
      let testValue = this.board.board[x][y];
      for (let i = x; i < x + 4; i++) {
        for (let j = y; j < y + 4; j++) {
          if (i === j) {
            if (this.board.board[i][j] === testValue) {
              counter++;
            }
          }
        }
      }
      return counter;
    };

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 3; j++) {
        console.log(smallDiagonalCheck(i, j));
      }
    }
  };
  playRound = () => {};
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
