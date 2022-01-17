import { Component,ChangeDetectionStrategy, OnInit , ViewChild, EventEmitter, Output, Input,OnChanges } from '@angular/core';
import {
  MoveChange,
  NgxChessBoardComponent,
  PieceIconInput,
  NgxChessBoardService,
  NgxChessBoardView
} from 'ngx-chess-board';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardViewComponent implements OnInit {
  @ViewChild('board', { static: false })
  // @ViewChild('.user') aUser:ElementRef;
  board!: NgxChessBoardView;
  // @Output() public undo = new EventEmitter<void>();
  @Input() change: any;
  @Output() public moveCallback = new EventEmitter();
  @Output() public reset = new EventEmitter();
  @Output() public undo = new EventEmitter();

  item: any;
  // public darkTileColor = 'rgb(71, 97, 61)';
  public darkTileColor = 'rgb(192, 199, 103)';
    public lightTileColor = '#c71a0e';
    // public lightTileColor = '#BAA378';
    public size = 400;
    public dragDisabled = false;
    public drawDisabled = false;
    public lightDisabled = false;
    public darkDisabled = false;
    public freeMode = false;
  // @ViewChild('iframe') iframe: ElementRef;


  constructor(private ngxChessBoardService: NgxChessBoardService) {
   }

  ngOnInit() {
    // console.log(this.ngxChessBoardService)
    // console.log()

    console.log(this.board)
    // console.log()
  }


history (check: MoveChange){
console.log(check)
}
  resetBoard(e: any) {
    this.history(e)
    console.log(this.board)
    this.reset.emit();
    this.board.reset();
}
 undoTask(e: any){
   this.undo.emit();
  this.board.undo();
}

}
