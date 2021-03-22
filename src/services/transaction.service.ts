import { EventEmitter, Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TransCont,Datum } from  '../app/interfaces/transaction'
import { Observable } from "rxjs/";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  
  transaction$ = new EventEmitter<Datum>()
  constructor(private http:HttpClient) { 
  }

  getTransactions(): Observable<TransCont>{
    return this.http.get('../assets/data/transactions.json');
  }

  addTransactions(data: Datum){
    this.transaction$.next(data)
  }

}
