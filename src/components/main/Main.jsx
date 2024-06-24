import { useContext } from "react";
import { StyledButton, StyledMain } from "./main.styles";
import { CounterContext } from "../../context/CounterContext";

const Main =()=>{
    const {counter, setCounter} = useContext(CounterContext)
    return(
        <StyledMain>
            <StyledButton onClick={()=> setCounter(counter - 1)}>-1</StyledButton>
            <StyledButton onClick={()=> setCounter(counter + 1)}>+1</StyledButton>
        </StyledMain>
    )
}

export default Main;