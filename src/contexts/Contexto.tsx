import { createContext, useEffect, useState } from "react";
import { LoteriaProps, } from "../types/LoteriaProps";
import Loteria from "../services/Loteria";
import { Resultado } from "../types/ResultadoProps";


const Contexto = createContext({} as LoteriaProps);

function Provider({ children }: any) {
    const [megasena, setMegasena] = useState({} as Resultado);
    const [quina, setQuina] = useState({} as Resultado);
    const [lotofacil, setLotofacil] = useState({} as Resultado);


    useEffect(() => {
        (
            async () => {
                const resp = await Loteria.get();
                setMegasena(resp.megasena);
                setQuina(resp.quina);
                setLotofacil(resp.lotofacil);
            }
        )();
    }, []);

    return (
        <Contexto.Provider value={{megasena, quina, lotofacil}}>
            {children}
        </Contexto.Provider>
    );
}

export { Contexto, Provider };