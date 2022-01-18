import { Component, OnInit,  ViewChild } from '@angular/core';
import {NgxChessBoardService} from 'ngx-chess-board';
import {NgxChessBoardView} from 'ngx-chess-board';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ResetConfirmationComponent } from "../reset-confirmation/reset-confirmation.component";

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  @ViewChild('board', { static: false })
  board!: NgxChessBoardView;
  dialogRef!: MatDialogRef<ResetConfirmationComponent>;
  title: string = 'Chess Game';
  change: any;
  constructor(public dialog: MatDialog) {
    if (window.addEventListener) {
      window.addEventListener("message", this.receiveMessage.bind(this), false);
    } else {
       (<any>window).attachEvent("onmessage", this.receiveMessage.bind(this));
    }
  }

  ngOnInit(): void {
  }

  receiveMessage(event: any)
  {
    console.log('in recieve message',event)


    if (event.origin !== "http://localhost:3000")
      return;
    // localStorage.setItem("token", event.data.token);
    // localStorage.setItem("username", event.data.username);
    // window.postMessage("success", "*");
    // // return
    // console.log(event)
  }

  openConfirmationDialog() {
    // console.log('hahhfksdash')
    let data = JSON.stringify({"name": 'Khalil'})
    console.log(data)
    window.postMessage(data, "*");
    console.log('here')


    // this.dialogRef = this.dialog.open(ResetConfirmationComponent, {
    //   width: '300px',
    //   height: '150px',
    //   disableClose: true
    // });
    // // this.dialogRef.componentInstance.confirmMessage = "Are you sure you want to delete?"

    // this.dialogRef.afterClosed().subscribe(result => {
    //   console.log(result)
    //   if(result) {
    //     // do confirmation actions
    //   }
    //   // this.dialogRef = null;
    // });
  }

  moveCallback(e : any){
    console.log(e)
    if(e.checkmate == true){
      this.openConfirmationDialog();
    }
  }

    reset(e: any) {
      console.log(e)
    // alert('Resetting board');
    // this.board.reset();
}

   undo(e: any){
  // this.board.undo();
  }



}
