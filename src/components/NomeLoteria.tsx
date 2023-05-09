import useContexto from "../hooks/useContexto";
import trevoMega from "../assets/trevoMega.png";
import trevoQuina from "../assets/trevoQuina.png";
import trevoTime from "../assets/trevoTime.png";
import styled from "styled-components";

function NomeLoteria(){
    const sorteio = useContexto();
    if(sorteio.ativo==="timemania"){
        return(
            <WrapperSld>
            <TrevoTimeSld />
            <HeaderSld>TIMEMANIA</HeaderSld>
            </WrapperSld>
        )
    }else if(sorteio.ativo==="quina"){
        return(
            <WrapperSld>
            <TrevoQuinaSld />
            <HeaderSld>QUINA</HeaderSld>
            </WrapperSld>
        )
    }else{
        return(
            <WrapperSld>
            <TrevoMegaSld />
            <HeaderSld>MEGA-SENA</HeaderSld>
            </WrapperSld>
        )
    }
}

const TrevoTimeSld = styled.div`
    background-image: url(${trevoTime});
    height: 35px;
    width: 35px;
`;

const TrevoQuinaSld = styled.div`
    background-image: url(${trevoQuina});
    height: 35px;
    width: 35px;
`;

const TrevoMegaSld = styled.div`
    background-image: url(${trevoMega});
    height: 35px;
    width: 35px;
`;

const HeaderSld = styled.div`
    color: ${props => props.theme.loteria};
    font-size: 1.6rem;
    font-weight: bold;
    padding-left: 10px;
`;

const WrapperSld = styled.div`
    display: flex;
    padding: 10px;
`;

export default NomeLoteria;