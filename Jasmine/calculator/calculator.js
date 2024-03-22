window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
      setupInitialValues();
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

function setupInitialValues() {
  const loanAmount = document.getElementById('loan-amount');
  const termInYears = document.getElementById('loan-years');
  const yearlyRate = document.getElementById('loan-rate');
  loanAmount.value = '0';
  termInYears.value = '0';
  yearlyRate.value = '0';
}

function update() {
  const values = getCurrentUIValues();
  displayCurrentValues(values);
  const monthlyPayment = calculateMonthlyPayment(values);
  updateMonthly(monthlyPayment);
}

function displayCurrentValues(values) {
  const monthly = document.getElementById('monthly-payment');
  monthly.innerHTML = '';
  for (const key in values) {
      if (Object.hasOwnProperty.call(values, key)) {
          const valueDiv = document.createElement('div');
          valueDiv.textContent = values[key];
          monthly.appendChild(valueDiv);
      }
  }
}

function calculateMonthlyPayment(values) {
  const P = values.amount;
  const r = values.rate / 100 / 12;
  const n = values.years * 12;
  const monthlyPayment = (P * r) / (1 - Math.pow(1 + r, -n));
  return monthlyPayment.toFixed(2); // Return the calculated value with 2 decimal places
}

function updateMonthly(monthly) {
  const monthlyElement = document.getElementById('monthly-payment');
  monthlyElement.textContent = monthly;
}