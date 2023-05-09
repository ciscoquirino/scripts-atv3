import { NavLink } from "react-router-dom";
import styled from "styled-components";


function Menu() {
    return (
        <WrapperSld>
            <NavLink 
            to="/timemania"
            style={({ isActive }) => {
                return {
                color: isActive ? "#aaa" : "#00ff48",
                textDecoration: "none",
                pointerEvents: isActive ? "none" : "auto",
                marginLeft: 15 };
            }}
            >Lotofácil </NavLink>
            <NavLink to="/megasena" 
            style={({ isActive }) => {
                return {
                color: isActive ? "#aaa" : "#209869",
                textDecoration: "none",
                pointerEvents: isActive ? "none" : "auto",
                marginLeft: 10 };
            }}
            >Megasena </NavLink>
            <NavLink to="/quina" 
            style={({ isActive }) => {
                return {
                color: isActive ? "#aaa" : "#260085",
                textDecoration: "none",
                pointerEvents: isActive ? "none" : "auto",
                marginLeft: 10 };
            }}
            >Quina </NavLink>
        </WrapperSld>
    )
}

const WrapperSld = styled.div`
    display: flex;
`;

export default Menu;