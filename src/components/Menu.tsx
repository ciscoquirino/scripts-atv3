import { NavLink } from "react-router-dom";
import "../styles/Menu.css";

export function Menu() {
    return (
        <div className="menu">
            <NavLink 
            to="/lotofacil"
            style={({ isActive }) => {
                return {
                color: isActive ? "#aaa" : "#930089",
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
        </div>
    )
}