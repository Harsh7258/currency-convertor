let api = `https://v6.exchangerate-api.com/v6/${API_KEY}}/latest/USD`;

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