


const exRateUSD = {
  'USD':1, 
  'EUR':0.8493,
  'PLN':3.8854, 
  'BYN':2.5136,
};  

const exRateEUR = {
  'USD':1.1808, 
  'EUR':1,
  'PLN':4.5811, 
  'BYN':2.9919,
};                                                                      

const exRatePLN = {
  'USD':0.2574, 
  'EUR':0.2186,
  'PLN':1, 
  'BYN':0.6469,
};  

const exRateBYN = {
  'USD':0.3978, 
  'EUR':0.3379,
  'PLN':1.5458, 
  'BYN':1,
};  

const amountInput = document.getElementById('amount');                   
const amountResult = document.getElementById('result');        
const currencyFromSelect = document.getElementById('currencyFrom');      
const currencyToSelect = document.getElementById('currencyTo');  



function getResult() {

  document.getElementById("result").innerHTML = `Result: ${convertAmount()}  ${getSymbol()}`
}

function getSymbol () {
return document.getElementById("currencyTo").value
}

function convertAmount () {
  const Amount = document.getElementById('amount').value
  const currentFrom = document.getElementById("currencyFrom").value
  const currentTo  = document.getElementById("currencyTo").value
  let result = 0

   if (Amount ==  "" ) {
    result = 0
  }
  
  else if (currentTo === currentFrom) {
    result = Amount
  }
  
  

  else if (currentFrom === 'USD') {
    result =  ( (Amount * exRateUSD[currentTo] * exRateUSD[currentFrom] * 100000) / 100000)
  }
  
  else if (currentFrom === 'EUR') {
    result =  ( (Amount * exRateEUR[currentTo] * exRateEUR[currentFrom] * 100000) / 100000)
  }

  else if (currentFrom === 'PLN') {
    result =  ( (Amount * exRatePLN[currentTo] * exRatePLN[currentFrom] * 100000) / 100000)
  }

  else if (currentFrom === 'BYN') {
    result =  ( (Amount * exRateBYN[currentTo] * exRateBYN[currentFrom] * 100000) / 100000)
  }

  return result

  


}

