import styled from "styled-components";
import useContexto from "../hooks/useContexto";

function Data(){
    const contexto = useContexto();
    var sorteio = contexto.ativo;
    if(sorteio==="timemania"){
        var tipo = contexto.timemania;
    }else if(sorteio==="quina"){
        tipo = contexto.quina;
    }else{
        tipo = contexto.megasena;
    }
    return(
        <Sld>Concurso {tipo.numeroDoConcurso} - {tipo.dataPorExtenso}</Sld>
    );
}

const Sld = styled.div`
    color: ${props => props.theme.data};
    margin-left: 30px;
`;

export default Data;