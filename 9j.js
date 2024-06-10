let calculation = localStorage.getItem('calculation') || '';

function updateCalculation(value) {
  calculation += value;
  display()
  localStorage.setItem('calculation', calculation);
}
function display() {
  document.querySelector(".js-calculation").innerHTML = calculation;
}

// Optional: you can also create a function in order
// to reuse this code.
function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}