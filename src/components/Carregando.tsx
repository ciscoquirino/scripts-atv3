import styled from "styled-components";

function Carregando(){
    return(
        <Sld>Carregando...</Sld>
    )
}

const Sld = styled.div`
    font-size: 30px;
    color: black;
    position: absolute;
    top: 40%;
    left: 40%;
`;

export default Carregando;