// const BASE_URL = "https://api.exchangeratesapi.io/latest";

// const dropdowns = document.querySelector(".dropdown select");

// for(code in countryList) {
//     console.log(code, countryList(code));
// }
// for()

const BASE_URL = "https://open.er-api.com/v6/latest/";

const dropdowns = document.querySelectorAll("select");
const btn = document.querySelector("button");
const fromCurr = document.querySelector("select[name='from']");
const toCurr = document.querySelector("select[name='to']");
const msg = document.querySelector(".msg");

// Conversion Code
btn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    let amount = document.querySelector("input").value;

    if (amount === "" || amount <= 0) {
        amount = 1;
        document.querySelector("input").value = "1";
    }

    const URL = `${BASE_URL}${fromCurr.value}`;
    let response = await fetch(URL);
    let data = await response.json();

    let rate = data.rates[toCurr.value];
    let finalAmount = amount * rate;

    msg.innerText = `${amount} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
});

// Flag Change Code 

const fromImg = document.querySelector(".from img");
const toImg = document.querySelector(".to img");

function updateFlag(element, currencyCode) {
    let countryCode = countryList[currencyCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    element.src = newSrc;
}

fromCurr.addEventListener("change", (evt) => {
    updateFlag(fromImg, evt.target.value);
});

toCurr.addEventListener("change", (evt) => {
    updateFlag(toImg, evt.target.value);
});

