import { Component, OnInit } from '@angular/core';
import { TransactionService } from 'src/services/transaction.service';

@Component({
  selector: 'app-transfer-grid',
  templateUrl: './transfer-grid.component.html',
  styleUrls: ['./transfer-grid.component.css']
})
export class TransferGridComponent implements OnInit {
  transactions : any
  searchText = '';
  constructor(public infotrans:TransactionService) { }

  ngOnInit(): void {
    this.infotrans.transaction$.subscribe( value =>{
      this.transactions = value
      this.sortGrid('date')
    })
    
  }
  parseDate(date : any){
    const dateVal = Date.parse(date)
    let dateAux = new Date(date)
    const result = dateAux.toLocaleString('en-US',{ month: 'short', day: 'numeric' });
    return result
  }
  getIcon(name : any){
    let result = name.replaceAll(' ','-')
    result = '../../../assets/icons/'+result.toLowerCase()+'.png'
    return result
  }

  sortGrid(sortField:any){
    switch (sortField){
      case 'ammount':
        this.transactions.sort((a: { transaction: { amountCurrency: { amount: string; }; }; }, 
                                b: { transaction: { amountCurrency: { amount: string; }; }; }) => 
                                parseFloat(b.transaction.amountCurrency.amount) - 
                                parseFloat(a.transaction.amountCurrency.amount));
        break
      case 'beneficiary':
        this.transactions.sort((a: any, b: any) => 
                                a.merchant.name.localeCompare(b.merchant.name, undefined, { caseFirst: "upper" }));
        break
      case 'date':
        this.transactions.sort((a: any, b: any) => new Date(b.dates.valueDate).getTime() - new Date(a.dates.valueDate).getTime());
        break        
    }
  }
}
