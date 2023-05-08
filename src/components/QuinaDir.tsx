import useContexto from "../hooks/useContexto";
import "../styles/Direita.css"


export default function QuinaDir(){
    const sorteio = useContexto();
    const acumulado = function (g:number) {
        if(g === 0){
            return("ACUMULOU!");
        }
        else if(g === 1){
            return("1 GANHADOR");
        }
        else{
            return(`${g} GANHADORES`)
        }
    }
    const dezenas:string[] = {...sorteio.quina.dezenas};
    return(
        <>
        <div>
        <div className="bs">
        <div className="bq">{dezenas[0]}</div>
        <div className="bq">{dezenas[1]}</div>
        <div className="bq">{dezenas[2]}</div>
        <div className="bq">{dezenas[3]}</div>
        <div className="bq">{dezenas[4]}</div>
        </div>
        <h2 className="d">{acumulado(sorteio.quina.quantidadeGanhadores)}</h2>
        <p className="pd">
            Concurso {sorteio.quina.numeroDoConcurso} - {sorteio.quina.dataPorExtenso}
        </p>
        </div>
        </>
    )
}