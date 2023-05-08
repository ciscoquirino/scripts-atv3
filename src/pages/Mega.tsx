import MegaDir from "../components/MegaDir";
import MegaEsq from "../components/MegaEsq";
import { Menu } from "../components/Menu";
import "../styles/Geral.css";

export function Mega(){
    return(
        <>
        <Menu />
        <div className="geral">
            <MegaEsq />
            <MegaDir />
        </div>
        </>
    );
}