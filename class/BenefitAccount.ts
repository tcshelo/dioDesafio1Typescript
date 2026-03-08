import { DioAccount } from "./DioAccount"

export class BenefitAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (value: number): void => {
    const currentBalance = this.getBalance();

    this.setBalance(currentBalance + value + 10);
    console.log("Novo saldo: ", this.getBalance());
  }
}
