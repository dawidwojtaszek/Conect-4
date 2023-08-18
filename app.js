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
}

const board = new Board();
board.printBoard();
console.log(board.board);
