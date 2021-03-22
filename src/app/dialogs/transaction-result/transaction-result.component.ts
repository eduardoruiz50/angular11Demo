import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface DialogData {}
@Component({
  selector: 'app-transaction-result',
  templateUrl: './transaction-result.component.html',
  styleUrls: ['./transaction-result.component.css']
})
export class TransactionResultComponent implements OnInit {
  message :string =""
  constructor(public dialogRef: MatDialogRef<TransactionResultComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
    this.message = this.data === 0 ? "Transaction Successful!":"transaction cancelled...could be overdrawn by $"+this.data
  }

}
