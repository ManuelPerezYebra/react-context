import { useContext } from "react"
import { StyledHeader } from "./header.styles"
import { CounterContext } from "../../context/CounterContext"

const  Header =()=>{
    const {counter} = useContext(CounterContext)
    return <StyledHeader>
        {counter}
    </StyledHeader>
    

}
export default Header