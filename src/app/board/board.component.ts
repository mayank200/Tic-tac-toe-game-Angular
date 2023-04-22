import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  board = Array(9).fill(null);
  currentPlayer = 'X';
  gameOver = false;
  winners:any = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  winner: any='X';
  

  constructor() { }

  ngOnInit(): void {
  }


  makeMove(index: number) {
    if (!this.board[index] && !this.gameOver) {
      this.board[index] = this.currentPlayer;
      if (this.isWinningMove()) {
        this.gameOver = true;
      } else if (this.board.every(square => square !== null)) {
        this.gameOver = true;
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }
  
  isWinningSquare(index: number) {
    return this.winners.some((combination: number[]) => combination.includes(index));
  }
  
  isWinningMove() {
    for (let i = 0; i < this.winners.length; i++) {
      const [a, b, c] = this.winners[i];
      if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        this.winner = this.currentPlayer;
        return true;
      }
    }
    return false;
  }
  
  reset() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.gameOver = false;
    this.winner = null;
  }
  
  

  

}
