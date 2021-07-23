
const PRECISION = 10_000;

const exRate = {
  'USD':1.1808, 
  'EUR':1, 
  'PLN':4.5811, 
  'BYN':2.9919,
};                                                                      

const Amount = document.getElementById('amount').value

const currentTo = document.getElementById("currencyFrom").value

const currentFrom  = document.getElementById("currencyTo").value
console.log(Amount)
function convertAmount () {
document.getElementById("result").innerHTML = Amount
console.log(Amount)

}


