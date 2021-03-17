import { Component } from '@angular/core';
import { TransactionService } from '../services/transaction.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular11Demo';
  transactions:any;
  constructor(public infotrans:TransactionService){
    console.log('infotrans...',infotrans);
    infotrans.getTransactions().subscribe(data =>{
      this.transactions = data.data;
      console.log('transactions--->',this.transactions)
    })
  }

}
