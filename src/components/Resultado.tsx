import styled from "styled-components";
import useContexto from "../hooks/useContexto";


function Resultado(){
    const contexto = useContexto();
    var sorteio = contexto.ativo;
    if(sorteio==="timemania"){
        return(
            <WrapperSld>
                <BolaSld>{contexto.timemania.dezenas[0]}</BolaSld>
                <BolaSld>{contexto.timemania.dezenas[1]}</BolaSld>
                <BolaSld>{contexto.timemania.dezenas[2]}</BolaSld>
                <BolaSld>{contexto.timemania.dezenas[3]}</BolaSld>
                <BolaSld>{contexto.timemania.dezenas[4]}</BolaSld>
                <BolaSld>{contexto.timemania.dezenas[5]}</BolaSld>
                <BolaSld>{contexto.timemania.dezenas[6]}</BolaSld>
            </WrapperSld>
        );
    }else if(sorteio==="quina"){
        return(
            <WrapperSld>
                <BolaSld>{contexto.quina.dezenas[0]}</BolaSld>
                <BolaSld>{contexto.quina.dezenas[1]}</BolaSld>
                <BolaSld>{contexto.quina.dezenas[2]}</BolaSld>
                <BolaSld>{contexto.quina.dezenas[3]}</BolaSld>
                <BolaSld>{contexto.quina.dezenas[4]}</BolaSld>
            </WrapperSld>
        );
    }else{
        return(
            <WrapperSld>
                <BolaSld>{contexto.megasena.dezenas[0]}</BolaSld>
                <BolaSld>{contexto.megasena.dezenas[1]}</BolaSld>
                <BolaSld>{contexto.megasena.dezenas[2]}</BolaSld>
                <BolaSld>{contexto.megasena.dezenas[3]}</BolaSld>
                <BolaSld>{contexto.megasena.dezenas[4]}</BolaSld>
                <BolaSld>{contexto.megasena.dezenas[5]}</BolaSld>
            </WrapperSld>
        );
    };
}

const WrapperSld = styled.div`
    display: flex;
    margin-top: 2px;
    margin-left: 20px;
`;

const BolaSld = styled.div`
    border-radius: 50%;
    background-color: ${props => props.theme.bola};
    color: ${props => props.theme.bolafonte};
    text-align: center;
    font-size: 24px;
    width: min-content;
    padding: 9px;
    margin: 9px;
`;

export default Resultado;