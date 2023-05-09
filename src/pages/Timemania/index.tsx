import { ThemeProvider } from "styled-components";
import { timemania } from "../../styles/theme";


import useContexto from "../../hooks/useContexto";
import Principal from "../../components/Principal";
import Menu from "../../components/Menu";


export function Timemania(){
    const sorteio = useContexto();
    sorteio.setAtivo("timemania");
    return(
    <ThemeProvider theme={timemania}>
        <Menu /> 
        <Principal />
    </ThemeProvider>
    );
}