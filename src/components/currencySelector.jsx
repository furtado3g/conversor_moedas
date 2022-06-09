const CurrencySelector = ({
  label,
  value,
  options,
  handleWithCurrencyChanged,
  ...props
}) => {
  return (
    <div className="my-2 flex flex-col w-[25%] p-2">
      <label htmlFor="" className="text-md mb-1">
        {label}
      </label>
      <select 
        className="form-select rounded-md placeholder:text-slate-900 text-slate-900"
        value={value}
        onChange={handleWithCurrencyChanged}  
      >
        <option value="Selecione">Selecione</option>
        {options.map(i=>{
            return <option value={i.id}>{i.description}</option>
        })}
      </select>
    </div>
  );
};

export {CurrencySelector}