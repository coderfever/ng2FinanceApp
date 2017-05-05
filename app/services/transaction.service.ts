import { Injectable } from '@angular/core';

export class Transaction {
  constructor(
    public id: number,
    public transactionDate: string,
    public storeName: string,
    public amount: number,
    public category: string
  ) {}
}

const Transactions : Transaction[] = [
  new Transaction(123, '2017-03-19', 'Boston', 12, "Restuarant"),
  new Transaction(124, '2017-03-20', 'Charlis', 13.00, "Grocery"),
  new Transaction(125, '2017-03-18', 'alphaa', 23.00, "Grocery"),
];

@Injectable()
export class TransactionService {
  getTransactions() {
    return new Promise<Transaction[]>(resolve => {
      setTimeout(() => { resolve(Transactions); }, 500);
    });
  }

  // getTransaction(id: number | string) {
  //   return this.getTransactions()
  //     .then(transaction =>)
  // }
}
