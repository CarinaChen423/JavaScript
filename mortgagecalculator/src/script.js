// Get references to HTML elements
const houseValueInput = document.getElementById('houseValue');
const downPaymentInput = document.getElementById('downPayment');
const interestRateInput = document.getElementById('interestRate');
const loanTermInput = document.getElementById('loanTerm');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

// Event listener for the "Calculate" button
calculateButton.addEventListener('click', calculateMortgage);

function calculateMortgage() {
    // Get user input values
    const houseValue = parseFloat(houseValueInput.value);
  const downPayment = parseFloat(downPaymentInput.value);
    const annualInterestRate = parseFloat(interestRateInput.value) / 100;
    const loanTerm = parseFloat(loanTermInput.value);

    // Calculate monthly interest rate and number of payments
    const monthlyInterestRate = annualInterestRate / 12;
    const numberOfPayments = loanTerm * 12;

    // Calculate monthly mortgage payment
    const monthlyPayment = ((houseValue - downPayment) * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
  
 // if / else statement to check whether the result is not < 0 or NaN
            if (isNaN(monthlyPayment) || monthlyPayment == 0 || monthlyPayment < 0) {
   resultDiv.innerHTML = `<p>Please, provide valid amounts</p>`;
 } else {
     // Display the result
    resultDiv.innerHTML = `<p>Your monthly mortgage payment is: <strong>$${monthlyPayment.toFixed(2)}</strong></p>`;
 }
  
// Get references to the "Clear" button
const clearButton = document.getElementById('clear');

// Event listener for the "Clear" button
clearButton.addEventListener('click', clearInputs);

// Function to clear input fields
function clearInputs() {
    houseValueInput.value = '';
    downPaymentInput.value = '';
    interestRateInput.value = '';
    loanTermInput.value = '';
    resultDiv.innerHTML = ''; // Clear the result message
}
 
  
     
}
