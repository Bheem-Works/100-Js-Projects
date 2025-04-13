function calculateLoan() {
  let loanAmount = document.getElementById("loan-amount").value;
  let interestAmount = document.getElementById("interest-rate").value;
  let monthsToPay = document.getElementById("months-to-pay").value;
  let interest = (loanAmount * (interestAmount * 0.01)) / monthsToPay;
  let monthlyPayement = (loanAmount / monthsToPay + interest).toFixed(2);
  document.getElementById(
    "payment"
  ).innerHTML = `Monthly payement: ${monthlyPayement}`;
}