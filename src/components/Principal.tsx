import styled from "styled-components";
import Direita from "./Direita";
import Esquerda from "./Esquerda";


function Principal(){
    return(
        <>
        <WrapperSld>
            <Esquerda />
            <Direita />
        </WrapperSld>
        </>
    );
}

const WrapperSld = styled.div`
    display: flex;
`;

export default Principal;