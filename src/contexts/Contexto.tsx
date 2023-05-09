import { createContext, useEffect, useState } from "react";
import { LoteriaProps, } from "../types/LoteriaProps";
import Loteria from "../services/Loteria";
import { Resultado } from "../types/ResultadoProps";


const Contexto = createContext({} as LoteriaProps);

function Provider({ children }: any) {
    const [megasena, setMegasena] = useState({} as Resultado);
    const [quina, setQuina] = useState({} as Resultado);
    const [timemania, setTimemania] = useState({} as Resultado);
    const [ativo, setAtivo] = useState("megasena");


    useEffect(() => {
        (
            async () => {
                const resp = await Loteria.get();
                setMegasena(resp.megasena);
                setQuina(resp.quina);
                setTimemania(resp.timemania);
            }
        )();
    }, []);

    return (
        <Contexto.Provider value={{megasena, quina, timemania, ativo, setAtivo}}>
            {children}
        </Contexto.Provider>
    );
}

export { Contexto, Provider };