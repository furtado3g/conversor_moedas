import { useState } from "react"

const Converter = ({
    mainCurrency,
    alternativeCurrency,
    ...props
}) =>{

    const [unconvertedValue,setUnconvertedValue] = useState(0)
    const [convertedValue,setConvetedValue] = useState(0)

    return(
        <div className="w-[33%] h-100 bg-slate-800 text-slate-100 border-slate-100 border-2 p-4 rounded-md text-center">
            <p className="text-2xl">
                {mainCurrency} para {alternativeCurrency}
            </p>
            <div className="w-100 flex flex-col text-left px-2">
                <label htmlFor="">
                    Digite o Valor
                </label>
                <input type="text" className="form-input rounded-md text-slate-900" value={unconvertedValue} onChange={e=>unconvertedValue(e.target.value)}/>
            </div>
            <div className="w-100 flex flex-col text-left px-2">
                <label htmlFor="">
                    Valor Convertido
                </label>
                <input type="text" className="form-input rounded-md text-slate-900" value={convertedValue} disabled/>
            </div>
        </div>
    )
}

export {Converter}