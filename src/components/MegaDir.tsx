import useContexto from "../hooks/useContexto";
import "../styles/Direita.css"


export default function MegaDir(){
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
    const dezenas:string[] = {...sorteio.megasena.dezenas};
    return(
        <>
        <div className="megadir">
        <div className="bs">
        <div className="b">{dezenas[0]}</div>
        <div className="b">{dezenas[1]}</div>
        <div className="b">{dezenas[2]}</div>
        <div className="b">{dezenas[3]}</div>
        <div className="b">{dezenas[4]}</div>
        <div className="b">{dezenas[5]}</div>
        </div>
        <h2 className="d">{acumulado(sorteio.megasena.quantidadeGanhadores)}</h2>
        <p className="pd">
            Concurso {sorteio.megasena.numeroDoConcurso} - {sorteio.megasena.dataPorExtenso}
        </p>
        </div>
        </>
    )
}