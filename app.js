let api = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`;

const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

currencies.forEach((curr) => {
    const option = document.createElement("option");
    option.value = curr;
    option.text = curr;
    fromDropDown.add(option);
})

currencies.forEach((curr) => {
    const option = document.createElement("option");
    option.value = curr;
    option.text = curr;
    toDropDown.add(option);
})

// setting default values
fromDropDown.value = "USD";
toDropDown.value = "INR";

let convertCurrency = () => {
    // create refernces
    const amount = document.querySelector("#amount").value;
    const formCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;

    // if amount input filed is not empty 
    if(amount.length != 0){
        fetch(api).then((res) => res.json())
        .then((data) => {
            let fromExchangeRate = data.conversion_rates[formCurrency];
            let toExchangeRate = data.conversion_rates[toCurrency];
            const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;

            result.innerHTML = `${amount} ${formCurrency} = ${convertedAmount.toFixed(2)}`
        });
    }else{
        alert("Please fill in the amount")
    }
};

document.querySelector("#convert-button").addEventListener('click', convertCurrency);
window.addEventListener('load', convertCurrency);