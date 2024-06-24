import { GlobalStyles } from "./GlobalStyles/GlobalStyles";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import CounterProvider from "./providers/CounterProvider";

const App = () => {
	
	return <>
	<GlobalStyles></GlobalStyles>
	<CounterProvider>

		<Header />
		<Main/>
	</CounterProvider>
	
	
	
	</> 
	
};

export default App;
