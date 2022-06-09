import { useState } from "react";
import { Converter } from "./components/converter";
import { CurrencySelector } from "./components/currencySelector";

function App() {
  const [mainCurrency, setMainCurrency] = useState("");
  const [firstCurrency, setFirstCurrency] = useState("");
  const [secondCurrency, setSecondCurrency] = useState("");
  const [lastCurrency, setLastCurrency] = useState("");

  const currencies = [
    {
      id: "BRL",
      description: "Real",
    },
    {
      id: "USD",
      description: "Dolar Americano",
    },
    {
      id: "JPY",
      description: "Iene",
    },
    {
      id: "EUR",
      description: "Euro",
    },
  ];

  return (
    <div className=" w-100 h-screen bg-slate-700 text-slate-50 p-5">
      <div className="container m-auto flex flex-col items-center">
        <h1 className="text-3xl ">Conversor de moedas</h1>
        <div className="xl:container-sm md:container-md sm:container h-50 p-10 bg-slate-800 text-slate-50 mt-2 rounded-md border-slate-50 border-2 flex flex-row">
          <CurrencySelector
            label="Sua Moeda"
            value={mainCurrency}
            handleWithCurrencyChanged={(e) => setMainCurrency(e.target.value)}
            options={currencies}
          />
          <CurrencySelector
            label="Moeda 1"
            value={firstCurrency}
            handleWithCurrencyChanged={(e) => setFirstCurrency(e.target.value)}
            options={currencies}
          />
          <CurrencySelector
            label="Moeda 2"
            value={secondCurrency}
            handleWithCurrencyChanged={(e) => setSecondCurrency(e.target.value)}
            options={currencies}
          />
          <CurrencySelector
            label="Moeda 3"
            value={lastCurrency}
            handleWithCurrencyChanged={(e) => setLastCurrency(e.target.value)}
            options={currencies}
          />
        </div>
      </div>
      <div className="xl:container-sm md:container-md sm:container pt-8 flex flex-row space-x-5 m-auto">
        <Converter mainCurrency={mainCurrency} alternativeCurrency={firstCurrency} />
        <Converter mainCurrency={mainCurrency} alternativeCurrency={secondCurrency} />
        <Converter mainCurrency={mainCurrency} alternativeCurrency={lastCurrency} />
      </div>
      <div className="xl:container-sm md:container-md sm:container pt-8 flex flex-row space-x-5 m-auto">
        <Converter mainCurrency={firstCurrency} alternativeCurrency={mainCurrency} />
        <Converter mainCurrency={secondCurrency} alternativeCurrency={mainCurrency} />
        <Converter mainCurrency={lastCurrency} alternativeCurrency={mainCurrency} />
      </div>
    </div>
  );
}

export default App;
