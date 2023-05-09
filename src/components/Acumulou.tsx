import styled from "styled-components";
import useContexto from "../hooks/useContexto";


function Acumulou(){
    const contexto = useContexto();
    const acumulado = function (g:number) {
        if(g === 0){
            return("ACUMULOU!");
        }
        else if(g === 1){
            return("1 GANHADOR");
        }
        else{
            return(`${g} GANHADORES`)
        }
    }
    var sorteio = contexto.ativo;
    if(sorteio==="timemania"){
        var tipo = contexto.timemania;
    }else if(sorteio==="quina"){
        tipo = contexto.quina;
    }else{
        tipo = contexto.megasena;
    }
    return(
        <Sld>{acumulado(tipo.quantidadeGanhadores)}</Sld>
    );
}

const Sld = styled.div`
    color: ${props => props.theme.acumulou};
    font-size: 1.6rem;
    font-weight: bold;
    padding: 25px;
    margin-left: 5px;
`;

export default Acumulou;