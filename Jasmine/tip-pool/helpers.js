// helpers.js

// Function to sum the total of bill amounts or tip amounts
function sumPaymentTotal(type) {
  let total = 0;

  // Check if type is valid and allPayments is defined
  if (type && allPayments) {
    for (let key in allPayments) {
      let payment = allPayments[key];

      // Add the amount of the specified type to the total
      total += Number(payment[type]) || 0;
    }
  }

  return total;
}

// Function to calculate the tip percentage
function calculateTipPercent(billAmt, tipAmt) {
  if(typeof billAmt === 'number' && typeof tipAmt === 'number' && billAmt > 0){
    return Math.round((tipAmt / billAmt) * 100);
  } else {
    return 0;
  }
}

// Function to append a new td element to the given tr element with the provided value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

// Export the functions to make them accessible in other files if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { sumPaymentTotal, calculateTipPercent, appendTd };
}
