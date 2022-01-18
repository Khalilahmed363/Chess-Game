import {
  Component,
  OnInit,
  ViewChild,
  EventEmitter,
  Output,
  Input,
  HostListener,
  AfterViewChecked,
  ElementRef,
} from '@angular/core';
import {
  MoveChange,
  NgxChessBoardComponent,
  PieceIconInput,
  NgxChessBoardService,
  NgxChessBoardView,
} from 'ngx-chess-board';
import { MainViewComponent } from '../main-view/main-view.component';

@Component({
  selector: 'app-board-view',
  templateUrl: './board-view.component.html',
  styleUrls: ['./board-view.component.css'],
})
export class BoardViewComponent implements OnInit {
  @ViewChild('board', { static: false })
  // @ViewChild('.user') aUser:ElementRef;
  board!: NgxChessBoardView;
  // @HostListener('window:message', ['$event'])
  @Input() change: any;
  @Input() player!: string;
  @Input() backGround!: string;
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
  @ViewChild('iframe') iframe!: ElementRef;

  constructor(private ngxChessBoardService: NgxChessBoardService) {
    if (window.addEventListener) {
      window.addEventListener("message", this.receiveMessage, false);
    } else {
       (<any>window).attachEvent("onmessage", this.receiveMessage);
    }
  }


  ngOnInit() {
    console.log(this.backGround)
  }


  receiveMessage(event: any)
    {
      console.log('in recieve message',event)
    //  return;
      // if (event.origin !== "http://localhost:3000")
      //   return;
      // localStorage.setItem("token", event.data.token);
      // localStorage.setItem("username", event.data.username);
      // window.postMessage("I am from Board", "*");
      // return
      // console.log(event)
    }

    // ngAfterViewChecked() {

    //   console.log('ngAfterViewChecked')
    // }




  // history(check: MoveChange) {
  //   console.log(check);
  // }
  resetBoard(e: any) {
    // this.history(e);
    console.log(e);
    this.reset.emit(e);
    this.board.reset();
  }
  undoTask(e: any) {
    this.undo.emit();
    this.board.undo();
  }
}
