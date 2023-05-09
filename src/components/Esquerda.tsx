import styled from "styled-components";
import Estimativa from "./Estimativa";
import NomeLoteria from "./NomeLoteria";

function Esquerda(){
    return(
        <WrapperSld>
            <NomeLoteria />
            <Estimativa />
        </WrapperSld>
    )
}

const WrapperSld = styled.div`
    width: 40%;
`;

export default Esquerda;