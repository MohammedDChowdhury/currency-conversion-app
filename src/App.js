import React, { useEffect, useState } from "react";
import "./App.css";
import CurrencyRow from "./CurrencyRow";

const BASE_URL = "https://api.exchangerate.host/latest";
function App() {
  const [currencyOptions, currencySelector] = useState([]);
  console.log(currencyOptions);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        currencySelector([data.base, ...Object.keys(data.rates)]);
      });
  }, []);
  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow currencyOptions={currencyOptions} />
      <div className="equals">=</div>

      <CurrencyRow currencyOptions={currencyOptions} />
    </>
  );
}

export default App;
