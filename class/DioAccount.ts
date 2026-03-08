export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (amountOfMoney: number): void => {
    if (this.validateStatus()) {
      this.balance += amountOfMoney;
      console.log("Novo saldo: ", this.balance);
    }
  }

  withdraw = (cashToWithdraw: number): void => {
    if (this.validateStatus() && this.balance >= cashToWithdraw) {
      this.balance -= cashToWithdraw;
      console.log(`Dinheiro sacado com sucesso. Novo saldo: ${this.balance}`);
    } else if (!this.validateStatus()) {
      console.log("Desculpe, não é possível sacar no momento.");
    } else if (this.balance < cashToWithdraw) {
      console.log("Saldo insuficiente.");
    }
  }

  setBalance = (newBalance: number): void => {
    this.balance = newBalance;
  }

  getBalance = (): number => {
    return this.balance;
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
