// ! Global variables
const income = document.getElementById("income");
const balance = document.getElementById("balance");

// ! Calculate total expenses and balance
function calculate() {
  const inputEle = document.querySelectorAll(".expense-input-field input");
  const incomeAmount = parseFloat(income.value);

  let expense = 0;
  inputEle.forEach((x) => {
    // ! x means single input element
    // ! when user don't put expense
    x = x.value === "" ? 0 : x.value; // ! x.value means single input value
    expense += parseInt(x);
  });

  if (incomeAmount < expense || income.value === "") {
    alert("Somethign went wrong");
    return;
  } else {
    update("totalExpense", expense);
    update("balance", incomeAmount - expense);
  }
}

// ! Calcultate saving and remaining amount
function savingAmount() {
  let parcent = document.getElementById("savingPercentage").value;
  parcent = parcent === "" ? 0 : parcent;
  const incomeAmount = parseFloat(income.value);
  const balanceAmount = parseFloat(balance.innerText);
  const parcentAmount = (parseInt(parcent) * incomeAmount) / 100;

  if (parcentAmount > balanceAmount || income.value === "") {
    alert("Somethign went wrong");
    return;
  } else {
    update("parcentageAmount", parcentAmount);
    update("remainingBalance", balanceAmount - parcentAmount);
  }
}

// ! Update amount into DOM
function update(id, amount) {
  document.getElementById(id).innerText = amount;
}

// ! Event Listener
document.getElementById("calculate").addEventListener("click", calculate);
document.getElementById("save").addEventListener("click", savingAmount);
