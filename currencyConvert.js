function convert() {
     let amount = document.getElementById("amount").value;
     let currencyFrom = document.getElementById("currencyFrom").value;
     let currencyTo = document.getElementById("currencyTo").value;
     if (currencyFrom == "VND") {
           if (currencyTo == "VND") {
                 document.getElementById('result').innerText = "Result: " + amount + " VND.";
           }
           else{
                 document.getElementById('result').innerText = "Result: " + amount/23.160 + " USD.";
           }
     }
      else {
            if (currencyTo == "USD") {
                  document.getElementById('result').innerText = "Result: " + amount + " USD."; 
            }
            else {
                  document.getElementById('result').innerText = "Result: " + amount * 23.160 + " VND."
            }
      } 
}