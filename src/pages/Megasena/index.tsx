import { ThemeProvider } from "styled-components";
import { mega } from "../../styles/theme";


import useContexto from "../../hooks/useContexto";
import Principal from "../../components/Principal";
import Menu from "../../components/Menu";


export function Megasena(){
    const sorteio = useContexto();
    sorteio.setAtivo("megasena");
    return(
    <ThemeProvider theme={mega}>
        <Menu />
        <Principal />
    </ThemeProvider>
    );
}