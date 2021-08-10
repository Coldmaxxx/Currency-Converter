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

function getResult() {
  document.getElementById("result").innerHTML = `Result: ${convertAmount()}  ${getSymbol()}`
}

function getSymbol () {
return document.getElementById("currencyTo").value
}

function convertAmount () {
  const volume = document.getElementById('amount').value
  const currentFrom = document.getElementById("currencyFrom").value
  const currentTo  = document.getElementById("currencyTo").value
  let result = 0

   if (volume ==  "" ) {
    result = 0
  }
  
  else if (currentTo === currentFrom) {
    result = volume
  }
  
  else if (currentFrom === 'USD') {
    result =  (Math.round ( (volume * exRateUSD[currentTo] * exRateUSD[currentFrom] * 100) ) / 100)
  }
  
  else if (currentFrom === 'EUR') {
    result =  (Math.round  ( (volume * exRateEUR[currentTo] * exRateEUR[currentFrom] * 100) ) / 100)
  }

  else if (currentFrom === 'PLN') {
    result =  (Math.round ( (volume * exRatePLN[currentTo] * exRatePLN[currentFrom] * 100) ) / 100)
  }

  else if (currentFrom === 'BYN') {
    result = (Math.round ( (volume * exRateBYN[currentTo] * exRateBYN[currentFrom] * 100) ) / 100)
  }

  return result

}

function doReset() {
  document.getElementById("amount").value = ""
  document.getElementById("result").innerHTML = "Result:"
  document.getElementById("currencyFrom").selectedIndex = "0"
  document.getElementById("currencyTo").selectedIndex = "0"
}
