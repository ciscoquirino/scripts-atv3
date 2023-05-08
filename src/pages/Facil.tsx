
import FacilDir from "../components/FacilDir";
import FacilEsq from "../components/FacilEsq";
import { Menu } from "../components/Menu";
import "../styles/Geral.css";

export function Facil(){
    return(
        <>
        <Menu />
        <div className="geral">
            <FacilEsq />
            <FacilDir />
        </div>
        </>
    );
}