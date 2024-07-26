const amountInput = document.getElementById('amount');
const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');
const resultElement = document.getElementById('result');

// Replace with actual exchange rates
const exchangeRates = {
    USD: { CNY: 6.8, KHR: 4100, THB: 35 },
    CNY: { USD: 0.147, KHR: 602, THB: 5.1 },
    KHR: { USD: 0.00024, CNY: 0.00166, THB: 0.0085 },
    THB: { USD: 0.0286, CNY: 0.196, KHR: 117 }
};

function convert() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;

    const result = amount * exchangeRates[fromCurrency][toCurrency];
    resultElement.textContent = `${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}`;
}
