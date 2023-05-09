import { Resultado } from "./ResultadoProps";

export interface LoteriaProps{
    megasena: Resultado;
    quina: Resultado;
    timemania: Resultado;
    ativo: String;
    setAtivo: Function;
  }