import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { BenefitAccount } from './class/BenefitAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log("--------PEOPLE ACCOUNT INFO--------");
console.log(peopleAccount)
console.log("------------------------------------");
peopleAccount.getDocId();
peopleAccount.deposit(1500)
peopleAccount.withdraw(1000);
peopleAccount.withdraw(800);

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log("--------COMPANY ACCOUNT INFO--------");
console.log(companyAccount)
console.log("------------------------------------");
companyAccount.deposit(350)
companyAccount.getLoan(300);

const benefitAccount: BenefitAccount = new BenefitAccount('DIO', 20)
console.log("--------BENEFIT ACCOUNT INFO--------");
console.log(benefitAccount)
console.log("------------------------------------");
benefitAccount.deposit(10);
benefitAccount.deposit(190);