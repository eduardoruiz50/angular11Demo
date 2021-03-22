import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TransactionService } from 'src/services/transaction.service';
export interface DialogData {
  categoryCode: string;
  dates:{
    valuedate:Date
  }
  merchant:{
    name:string
  }
  transaction:{
    amountCurrency:{
      amount:string
    }
    type:string
  }
}

@Component({
  selector: 'app-confirm-transaction',
  templateUrl: './confirm-transaction.component.html',
  styleUrls: ['./confirm-transaction.component.css']
})
export class ConfirmTransactionComponent implements OnInit {
  transactions : any

  constructor(public dialogRef: MatDialogRef<ConfirmTransactionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public infotrans:TransactionService) { 

    }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

}
