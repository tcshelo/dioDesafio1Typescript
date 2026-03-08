import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (borrowing: number): void => {
    if (this.validateStatus()) {
      const currentBalance = this.getBalance();

      this.setBalance(currentBalance + borrowing);

      console.log('Voce pegou um empréstimo. Novo saldo:', this.getBalance());
    }
  }
}
