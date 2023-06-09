import React, { useState, useEffect } from 'react';

const CurrencyConverter = () => {
  // State variables
  const [baseCurrency, setBaseCurrency] = useState('EUR');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(1);
  const [conversionRate, setConversionRate] = useState(null);
  const [convertedAmount, setConvertedAmount] = useState(null);

  // Fetch the conversion rate when baseCurrency or targetCurrency changes
  useEffect(() => {
    fetchConversionRate();
  }, [baseCurrency, targetCurrency]);

  // Function to fetch the conversion rate from an API
  const fetchConversionRate = async () => {
    try {
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`
      );
      const data = await response.json();
      const rate = data.rates[targetCurrency];
      setConversionRate(rate);
    } catch (error) {
      console.log('Error fetching conversion rate:', error);
    }
  };

  // Event handlers for currency and amount inputs
  const handleBaseCurrencyChange = (event) => {
    setBaseCurrency(event.target.value);
  };

  const handleTargetCurrencyChange = (event) => {
    setTargetCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  // Function to convert the currency
  const convertCurrency = () => {
    const converted = amount * conversionRate;
    setConvertedAmount(converted.toFixed(2));
  };

  // JSX markup for the component
  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <label htmlFor="base-currency">Base Currency:</label>
        <select id="base-currency" value={baseCurrency} onChange={handleBaseCurrencyChange}>
          <option value="AFN">AFN: Afghan Afghani</option> {/* Afghanistan */}
          <option value="AED">AED: Emirati Dhiram</option> {/* Dubai */}
          <option value="AUD">AUD: Australian Dollar</option> {/* Australia */}
          <option value="BHD">BHD: Bahraini Dinar</option> {/* Bahrain */}
          <option value="BRL">BRL: Brazilian Real</option> {/* Brazil */}
          <option value="CAD">CAD: Canadian Dollar</option> {/* Canada */}
          <option value="CHF">CHF: Swiss Franc</option> {/* Switzerland */}
          <option value="CNY">CNY: Chinese Yuan Renminbi</option> {/* China */}
          <option value="EGP">EGP: Egyptian Pound</option> {/* Egypt */}
          <option value="EUR">EUR: Euro</option>
          <option value="GBP">GBP: Pound Sterling</option>
          <option value="IDR">IDR: Indonesian Rupiah</option> {/* Indonesia */}
          <option value="ILS">ILS: Israeli Shekel</option> {/* Israel */}
          <option value="INR">INR: Indian Rupee</option> {/* India */}
          <option value="IQD">IQD: Iraqi Dinar</option> {/* Iraq */}
          <option value="IRR">IRR: Iranian Rial</option> {/* Iran */}
          <option value="JPY">JPY: Japanese Yen</option> {/* Japan */}
          <option value="KRW">KRW: South Korean Won</option> {/* South Korea */}
          <option value="KWD">KWD: Kuwaiti Dinar</option> {/* Kuwait */}
          <option value="LKR">LKR: Sri Lankan Rupee</option> {/* Sri Lanka */}
          <option value="NZD">NZD: New Zealand Dollar</option> {/* New Zealand */}
          <option value="PKR">PKR: Pakistani Rupee</option> {/* Pakistan */}
          <option value="RUB">RUB: Russian Ruble</option> {/* Russia */}
          <option value="SAR">SAR: Saudi Riyal</option> {/* Saudi Arabia */}
          <option value="SGD">SGD: Singapore Dollar</option> {/* Singapore */}
          <option value="TRY">TRY: Turkish Lira</option> {/* Turkey */}
          <option value="USD">USD: US Dollar</option>
          <option value="ZAR">ZAR: South African Rand</option> {/* South Africa */}
        </select>
      </div>
      <div>
        <label htmlFor="target-currency">Target Currency:</label>
        <select id="target-currency" value={targetCurrency} onChange={handleTargetCurrencyChange}>
          <option value="AFN">AFN: Afghan Afghani</option> {/* Afghanistan */}
          <option value="AED">AED: Emirati Dhiram</option> {/* Dubai */}
          <option value="AUD">AUD: Australian Dollar</option> {/* Australia */}
          <option value="BHD">BHD: Bahraini Dinar</option> {/* Bahrain */}
          <option value="BRL">BRL: Brazilian Real</option> {/* Brazil */}
          <option value="CAD">CAD: Canadian Dollar</option> {/* Canada */}
          <option value="CHF">CHF: Swiss Franc</option> {/* Switzerland */}
          <option value="CNY">CNY: Chinese Yuan Renminbi</option> {/* China */}
          <option value="EGP">EGP: Egyptian Pound</option> {/* Egypt */}
          <option value="EUR">EUR: Euro</option>
          <option value="GBP">GBP: Pound Sterling</option>
          <option value="IDR">IDR: Indonesian Rupiah</option> {/* Indonesia */}
          <option value="ILS">ILS: Israeli Shekel</option> {/* Israel */}
          <option value="INR">INR: Indian Rupee</option> {/* India */}
          <option value="IQD">IQD: Iraqi Dinar</option> {/* Iraq */}
          <option value="IRR">IRR: Iranian Rial</option> {/* Iran */}
          <option value="JPY">JPY: Japanese Yen</option> {/* Japan */}
          <option value="KRW">KRW: South Korean Won</option> {/* South Korea */}
          <option value="KWD">KWD: Kuwaiti Dinar</option> {/* Kuwait */}
          <option value="LKR">LKR: Sri Lankan Rupee</option> {/* Sri Lanka */}
          <option value="NZD">NZD: New Zealand Dollar</option> {/* New Zealand */}
          <option value="PKR">PKR: Pakistani Rupee</option> {/* Pakistan */}
          <option value="RUB">RUB: Russian Ruble</option> {/* Russia */}
          <option value="SAR">SAR: Saudi Riyal</option> {/* Saudi Arabia */}
          <option value="SGD">SGD: Singapore Dollar</option> {/* Singapore */}
          <option value="TRY">TRY: Turkish Lira</option> {/* Turkey */}
          <option value="USD">USD: US Dollar</option>
          <option value="ZAR">ZAR: South African Rand</option> {/* South Africa */}
        </select>
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={handleAmountChange} />
      </div>
      <button onClick={convertCurrency}>Convert</button>
      {conversionRate && (
        <div>
          <p>Conversion Rate: 1 {baseCurrency} = {conversionRate} {targetCurrency}</p>
          <p>Converted Amount: {amount} {baseCurrency} = {convertedAmount} {targetCurrency}</p>
        </div>
      )}
    </div>
  );
};

export default CurrencyConverter;
