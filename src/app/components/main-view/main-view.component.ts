import { Component, OnInit,  ViewChild } from '@angular/core';
import {NgxChessBoardService} from 'ngx-chess-board';
import {NgxChessBoardView} from 'ngx-chess-board';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  @ViewChild('board', { static: false })
  board!: NgxChessBoardView;
  title: string = 'Chess Game';
  change: any;
  constructor() { }

  ngOnInit(): void {
  }


  moveCallback(e : any){
    console.log(e)
    this.change = 'State changed';
  }

    reset(e: any) {

    console.log(this.board,e)
    alert('Resetting board');
    // this.board.reset();
}

   undo(e: any){
   this.change = 'State Revert'
  // this.board.undo();
  }



}
