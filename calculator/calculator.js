window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  var loanamount = document.getElementById("loan-amount").value;
  document.getElementById("loan-amount").value = '50000';
  var loanyears = document.getElementById("loan-years").value;
  document.getElementById("loan-years").value = '5';
  var loanrate = document.getElementById("loan-rate").value;
  document.getElementById("loan-rate").value = '5';

  calculateMonthlyPayment(loanamount,loanyears,loanrate);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  updateMonthly();
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  var inputs = document.querySelectorAll('input');
  var principal = document.getElementById("loan-amount").value;
  var years = document.getElementById("loan-years").value;
  var payments = years *12;
  var interest = document.getElementById("loan-rate").value / 12 / 100;
  var k = Math.pow(1+ interest, payments);
  let monthlyPayment = principal*k*interest / (k-1);
  let result = monthlyPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');



  if(inputs !="" || inputs != 0 ){
    return result
  }
  else{
    document.getElementById("loan-amount").value = '';
    document.getElementById("loan-years").value = '';
    document.getElementById("loan-rate").value = '';
  }

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  var monthlyPayField = document.getElementById('monthly-payment');
  var paymentAmount = calculateMonthlyPayment();
  return monthlyPayField.innerHTML =`$${paymentAmount}`;
}
