class UI {
  constructor() {
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");
    this.budgetForm = document.getElementById("budget-form");
    this.budgetInput = document.getElementById("budget-input");
    this.budgetAmount = document.getElementById("budget-amount");
    this.expenseAmount = document.getElementById("expense-amount");
    this.balance = document.getElementById("balance");
    this.balanceAmount = document.getElementById("balance-amount");
    this.expenseForm = document.getElementById("expense-form");
    this.expenseInput = document.getElementById("expense-input");
    this.amountInput = document.getElementById("amount-input");
    this.expenseList = document.getElementById("expense-list");
    this.itemList = [];
    this.itemID = 0;
  }
  // submit budget method:

  submitBudgetForm() {
    // taking value form field
    const value = this.budgetInput.value;

    // checking conditions 
    if (value === "" || value < 0) {
      this.budgetFeedback.classList.add("showItem")
      this.budgetFeedback.innerHTML = `<p>Value Cannot be Empty or Negative.</p>`;
      const self = this;

      // setting time for the removal of err msg
      setTimeout(() => {
        self.budgetFeedback.classList.remove("showItem")
      }, 3000);
    }

    // passing the value 
    else {
      this.budgetAmount.textContent = value;
      this.budgetInput.value = ``;
      this.showBalance();
    }
  }
  // show Balance 
  showBalance() {
    const expense = this.totalExpense();

    // Minus the Expense from budget total amount  
    const total = parseInt(this.budgetAmount.textContent) - expense;
    this.balanceAmount.textContent = total;

    // appling color conditions
    if (total < 0) {
      this.balance.classList.remove("showGreen", "showBlack");
      this.balance.classList.add("showRed");
    } else if (total > 0) {
      this.balance.classList.remove("showred", "showBlack");
      this.balance.classList.add("showGreen");
    } else if (total === 0) {
      this.balance.classList.remove("showred", "showGreen");
      this.balance.classList.add("showPurple");
    }
  }
  // Total Expense
  totalExpense() {
    let total = 400;
    return total;
  }
}

function eventListeners() {
  const budgetForm = document.getElementById('budget-form');
  const expenseForm = document.getElementById('expense-form');
  const expenseList = document.getElementById('expense-list');

  // new instance of ui class
  const ui = new UI();

  // budget form submit 
  budgetForm.addEventListener("submit", function (event) {
    event.preventDefault();
    ui.submitBudgetForm();
  })

  // expense form submit 
  expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();
    ui.submitExpenseForm();

  })

  // budget form submit 
  expenseList.addEventListener("click", function () {

  })
}

document.addEventListener('DOMContentLoaded', function () {
  eventListeners();
})