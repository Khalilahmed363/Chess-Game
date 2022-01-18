import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-reset-confirmation',
  templateUrl: './reset-confirmation.component.html',
  styleUrls: ['./reset-confirmation.component.css']
})
export class ResetConfirmationComponent implements OnInit {

  endMessage: string = 'Game End';
  resetMessage: string = 'Create New Game';

  constructor(public dialogRef: MatDialogRef<ResetConfirmationComponent>) { }
  // public confirmMessage:string;

  ngOnInit(): void {
  }

}
