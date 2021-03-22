import { Component, OnInit } from '@angular/core'
import { Datum,TransCont } from '../../interfaces/transaction'
import { TransactionService } from '../../../services/transaction.service'
import {MatDialog} from '@angular/material/dialog';
import {ConfirmTransactionComponent} from '../../dialogs/confirm-transaction/confirm-transaction.component'
import { FormBuilder, Validators, } from '@angular/forms';
import { TransactionResultComponent } from 'src/app/dialogs/transaction-result/transaction-result.component';

@Component({
  selector: 'app-transfer-form',
  templateUrl: './transfer-form.component.html',
  styleUrls: ['./transfer-form.component.css']
})
export class TransferFormComponent implements OnInit {
  infoIn:Datum = {dates:{},merchant:{name:''},transaction:{amountCurrency:{amount:0}}}
  transactions: any
  formTransaction :any
  ammount : any
  maxOverdrawn : number = -500

  constructor(public infotrans:TransactionService, public dialog: MatDialog,private fb: FormBuilder) {
    this.formTransaction = this.fb.group({
      nameTo: ['',Validators.required],
      ammountTo: ['',Validators.required]
    });

    infotrans.transaction$.subscribe(val =>{
      this.transactions=[]
      this.transactions=val
    })
  }

  openDialog(): void {

    if (this.formTransaction.status ==="VALID"){
      var info = {
        categoryCode: "#d51271",
        dates:{
          valueDate:new Date()
        },
        merchant:{
          name:'backbase'
        },
        transaction:{
          type:this.formTransaction.value.nameTo,
          amountCurrency:{amount:this.formTransaction.value.ammountTo}
        },

      }

        const dialogRef = this.dialog.open(ConfirmTransactionComponent, {
          width: '400px',
          height: '250px',
          data: info
        });

        dialogRef.afterClosed().subscribe(result => {
          const response=result;
          if (response !== undefined){
            
            let ammountAux = (this.ammount - this.formTransaction.value.ammountTo)
            if ( ammountAux < this.maxOverdrawn){

              const dialogRef = this.dialog.open(TransactionResultComponent, {
                width: '300px',
                height: '200px',
                data: ammountAux
              });
            }else{
              this.ammount = (this.ammount - this.formTransaction.value.ammountTo)
              this.ammount = Math.round( this.ammount * 100 + Number.EPSILON ) / 100
              this.transactions?.push(info)
              const dialogRef = this.dialog.open(TransactionResultComponent, {
                width: '300px',
                height: '200px',
                data: 0
              });
              this.formTransaction.reset();
            }
            
          }
        });
    }
    
  }

  ngOnInit(): void {
    this.ammount = 5824.76
  }
  get getControl(){
    return this.formTransaction.controls;
  }
  

}
