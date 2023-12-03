class BankAccount {
  #accountNumber;
  #accountHolderName;
  #balance;

  constructor(accountNumber, accountHolderName, balance) {
    this.#accountNumber = accountNumber;
    this.#accountHolderName = accountHolderName;
    this.#balance = balance;
  }

  showAccountDetails = () => {
    console.log(`Account Number: ${this.#accountNumber}`);
    console.log(`Account Holder Name: ${this.#accountHolderName}`);
    console.log(`Account Balance: ${this.#balance}`);
  };

  deposit = (amount) => {
    this.#balance += amount;
    this.showAccountDetails();
  };

  withdraw = (amount) => {
    if (this.#balance >= amount) {
      this.#balance -= amount;
      this.showAccountDetails();
    } else {
      console.log("Insufficient Balance");
    }
  };
}

const myBankAccount = new BankAccount("123", "Khine", 1000.0);
myBankAccount.deposit(500);

myBankAccount.withdraw(200);
