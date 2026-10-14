class BankAccount {
  constructor () {
    this.balance = 0,
    this.transactions = []
  }

  deposit (amount) {
    if (amount > 0) {
      const transaction = {type: "deposit", amount: amount};
      this.transactions.push(transaction);
      this.balance += amount;
      return `Successfully deposited $${amount}. New balance: $${this.balance}`
    } else if (amount <= 0) {
      return "Deposit amount must be greater than zero."
    }
  }

  withdraw (amount) {
    if (amount > 0 && amount <= this.balance) {
      const transaction = {type: "withdraw", amount: amount};
      this.transactions.push(transaction);
      this.balance -= amount;
      return `Successfully withdrew $${amount}. New balance: $${this.balance}`
    } else if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount."
    }
  }

  checkBalance () {
    return `Current balance: $${this.balance}`
  }

  listAllDeposits () {
    let deposits = `Deposits: `
    this.transactions.forEach(transaction => {
      if (transaction.type === "deposit") {
        deposits += `${transaction.amount},`
      }
    })
    deposits = deposits.slice(0, deposits.length - 1)
    return deposits
  }
  listAllWithdrawals  () {
    let withdrawals = `Withdrawals: `
    this.transactions.forEach(transaction => {
      if (transaction.type === "withdraw") {
        withdrawals += `${transaction.amount},`
      }
    })
    withdrawals = withdrawals.slice(0, withdrawals.length - 1)
    return withdrawals
  }
}

const myAccount = new BankAccount;
myAccount.deposit(10);
myAccount.deposit(75);
myAccount.deposit(90);
myAccount.withdraw(20);
myAccount.withdraw(50);

console.log(myAccount.checkBalance())