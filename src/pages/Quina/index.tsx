import { ThemeProvider } from "styled-components";
import { quina } from "../../styles/theme";


import useContexto from "../../hooks/useContexto";
import Principal from "../../components/Principal";
import Menu from "../../components/Menu";


export function Quina(){
    const sorteio = useContexto();
    sorteio.setAtivo("quina");
    return(
    <ThemeProvider theme={quina}>
        <Menu />
        <Principal />
    </ThemeProvider>
    );
}