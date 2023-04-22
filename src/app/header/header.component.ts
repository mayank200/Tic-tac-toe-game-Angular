import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'Tic Tac Toe';
  instructions = 'Click on any square to make a move. Get three in a row to win!';

  constructor() { }

  ngOnInit(): void {
  }

}
