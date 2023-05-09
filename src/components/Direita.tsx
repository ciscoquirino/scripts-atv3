import styled from "styled-components";
import Acumulou from "./Acumulou";
import Data from "./Data";
import Resultado from "./Resultado";

function Direita(){
    return(
        <WrapperSld>
            <Resultado />
            <Acumulou />
            <Data />
        </WrapperSld>
    );
}

const WrapperSld = styled.div`
    max-width: 60%;
    align-items: start;
`;

export default Direita;