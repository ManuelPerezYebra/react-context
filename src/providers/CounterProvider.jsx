import { useState } from "react";
import { CounterContext } from "../context/CounterContext"

const CounterProvider = ({children})=>{
    const [counter, setCounter]=useState(0);
    return (<CounterContext.Provider value={{counter, setCounter}}>{children}</CounterContext.Provider>
    )
}

export default CounterProvider