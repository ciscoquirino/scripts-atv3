import useContexto from "../hooks/useContexto";
import styled from "styled-components";

function Estimativa(){
    const contexto = useContexto();
    let estimado = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    });
    var sorteio = contexto.ativo;
    if(sorteio==="timemania"){
        var tipo = contexto.timemania;
    }else if(sorteio==="quina"){
        tipo = contexto.quina;
    }else{
        tipo = contexto.megasena;
    }

    return(
        <WrapperSld>
            <PSld>Estimativa de prêmio do próximo concurso. Sorteio em {tipo.dataProximoConcurso}</PSld>
            <ValorSld>{estimado.format(tipo.valorEstimadoProximoConcurso)}</ValorSld>
        </WrapperSld>
    )
}

const PSld = styled.div`
    color:  ${props => props.theme.data};
    padding: 20px;
    padding-left: 0px;
`;

const ValorSld = styled.div`
    color:  ${props => props.theme.estimativa};
    font-size: 1.3rem;
    font-weight: bold;
    padding-top:17px;
`;

const WrapperSld = styled.div`
    margin-left: 60px;
`;


export default Estimativa;