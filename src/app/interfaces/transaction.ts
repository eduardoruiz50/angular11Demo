// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface TransCont {
    data?: Datum[];
}

export interface Datum {
    categoryCode?: string;
    dates:        Dates;
    transaction?:  Transaction;
    merchant?:     Merchant;
}

export interface Dates {
    valueDate?: Date | number;
}

export interface Merchant {
    name?:          string;
    accountNumber?: AccountNumber;
}

export enum AccountNumber {
    Si64397745065188826 = "SI64397745065188826",
}

export interface Transaction {
    amountCurrency?:       AmountCurrency;
    type?:                 string;
    creditDebitIndicator?: CreditDebitIndicator;
}

export interface AmountCurrency {
    amount?:       number | string;
    currencyCode?: CurrencyCode;
}

export enum CurrencyCode {
    Eur = "EUR",
}

export enum CreditDebitIndicator {
    Crdt = "CRDT",
    Dbit = "DBIT",
}
