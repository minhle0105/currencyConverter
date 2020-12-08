function convert() {
      let amount = document.getElementById("amount").value;
      let currencyFrom = document.getElementById("currencyFrom").value;
      let currencyTo = document.getElementById("currencyTo").value;
      document.getElementById('result').innerText = "Result: " + (amount*currencyFrom)/currencyTo;
}