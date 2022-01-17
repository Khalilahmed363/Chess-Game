import { Component, ViewChild } from '@angular/core';
// import {NgxChessBoardService} from 'ngx-chess-board';
// import {NgxChessBoardView} from 'ngx-chess-board';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // @ViewChild('board', { static: false })
  // board!: NgxChessBoardView;
  title = 'Chess-Game';

  // constructor(private ngxChessBoardService: NgxChessBoardService) { }
  ngOnInit() {
    // console.log(this.ngxChessBoardService)
    // console.log(NgxChessBoardView)
  }

//   reset() {
//     console.log(this.board)
//     this.board.reset();
// }
}
