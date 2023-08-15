const form = document.querySelector("#personal");
const panel = document.querySelector("#panel");
let h1 = document.querySelector("h1");
const depositBtn = document.querySelector("#deposit");
const withdrawBtn = document.querySelector("#withdraw");
const showBalanceBtn = document.querySelector("#balance");
let user = null;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const customerName = this.customerName.value;
  const customerPassword = this.customerPassword.value;
  if (customerName && customerPassword) {
    user = BankAccount(customerName, customerPassword);
    e.target.style.display = "none";
    panel.classList.remove("hide");
    h1.textContent = "Hi, " + user.getCustomerName();
  } else {
    alert("Please fill required field");
  }
});

depositBtn.addEventListener("click", function () {
  let amount = +prompt("Please, type your amount");
  alert(user.deposit(amount));
});

withdrawBtn.addEventListener("click", function () {
  let amount = +prompt("Please, type your amount");
  alert(user.withdraw(amount));
});

showBalanceBtn.addEventListener("click", function () {
  alert(user.getBalance());
});
