import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Convert, Welcome } from  '../app/interfaces/transaction'
import { Observable } from "rxjs/";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  //const welcome = Convert.toWelcome(json);
  info:Welcome = {};
  load = false;
  constructor(private http:HttpClient) { 
    console.log('service running');
    
  }

  getTransactions(): Observable<Welcome>{
    return this.http.get('../assets/data/transactions.json');
  }

  /*
  getTransactions(){
    this.http.get("../assets/data/transactions.json")
    .subscribe( (resp:Welcome ) => {
      this.info=resp;
      this.load=true;
      console.log(resp);
    });

  }*/
}
