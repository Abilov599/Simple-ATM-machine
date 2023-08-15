const BankAccount = (customerName, customerPassword) => {
  let _customerName = customerName;
  let _customerPassword = customerPassword;
  let _balance = 0;

  const authenticate = (inputPassword) => inputPassword === _customerPassword;

  const deposit = (amount) => {
    if (amount > 0) {
      _balance += amount;
      return `Deposited $${amount}. New balance: $${_balance}`;
    } else {
      return "Invalid deposit amount.";
    }
  };

  const withdraw = (amount) => {
    if (amount > 0 && amount <= _balance) {
      _balance -= amount;
      return `Withdrawn $${amount}. New balance: $${_balance}`;
    } else {
      return "Insufficient funds or invalid withdrawal amount.";
    }
  };

  const getBalance = () => `Current balance: $${_balance}`;

  const getCustomerName = () => _customerName;

  return {
    authenticate,
    deposit,
    withdraw,
    getBalance,
    getCustomerName,
  };
};

// class BankAccount {
//   constructor(customerName, customerPassword) {
//     let _customerName = customerName;
//     let _customerPassword = customerPassword;
//     let _balance = 0;

//     this.authenticate = (inputPassword) => inputPassword === _customerPassword;

//     this.deposit = (amount) => {
//       if (amount > 0) {
//         _balance += amount;
//         return `Deposited $${amount}. New balance: $${_balance}`;
//       } else {
//         return "Invalid deposit amount.";
//       }
//     };

//     this.withdraw = (amount) => {
//       if (amount > 0 && amount <= _balance) {
//         _balance -= amount;
//         return `Withdrawn $${amount}. New balance: $${_balance}`;
//       } else {
//         return "Insufficient funds or invalid withdrawal amount.";
//       }
//     };

//     this.getBalance = () => `Current balance: $${_balance}`;

//     this.getCustomerName = () => _customerName;
//   }
// }
