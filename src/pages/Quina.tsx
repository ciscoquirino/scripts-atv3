import { Menu } from "../components/Menu";
import QuinaDir from "../components/QuinaDir";
import QuinaEsq from "../components/QuinaEsq";
import "../styles/Geral.css";

export function Quina(){
    return(
    <>
        <Menu />
        <div className="geral">
            <QuinaEsq />
            <QuinaDir />
        </div>
    </>
    );
}