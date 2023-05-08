import useContexto from "../hooks/useContexto";
import "../styles/Direita.css"


export default function FacilDir(){
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
    const dezenas:string[] = {...sorteio.lotofacil.dezenas};
    return(
        <>
        <div>
        <table>
            <tr>
            <td>{dezenas[0]}</td>
            <td>{dezenas[1]}</td>
            <td>{dezenas[2]}</td>
            <td>{dezenas[3]}</td>
            <td>{dezenas[4]}</td>
            </tr>
            <tr>
            <td>{dezenas[5]}</td>
            <td>{dezenas[6]}</td>
            <td>{dezenas[7]}</td>
            <td>{dezenas[8]}</td>
            <td>{dezenas[9]}</td>
            </tr>
            <tr>
            <td>{dezenas[10]}</td>
            <td>{dezenas[11]}</td>
            <td>{dezenas[12]}</td>
            <td>{dezenas[13]}</td>
            <td>{dezenas[14]}</td>
            </tr>
        </table>
        <h2 className="d">{acumulado(sorteio.lotofacil.quantidadeGanhadores)}</h2>
        <p className="pd">
            Concurso {sorteio.lotofacil.numeroDoConcurso} - {sorteio.lotofacil.dataPorExtenso}
        </p>
        </div>
        </>
    )
}