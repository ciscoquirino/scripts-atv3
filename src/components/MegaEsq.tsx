import useContexto from "../hooks/useContexto";
import trevoMega from "../assets/trevoMega.png";
import "../styles/Esquerda.css";


function MegaEsq(){
    const sorteio = useContexto();
    let estimado = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    });
    return(
    <div className="esq">
        <div className="cabe">
        <image>
        <img src={trevoMega} alt="trevo mega-sena"/>
        </image>
        <h1>MEGA-SENA</h1>
        </div>
        <p>Estimativa de prêmio do próximo
            concurso. Sorteio em {sorteio.megasena.dataProximoConcurso} :
        </p>
        <h2>{estimado.format(sorteio.megasena.valorEstimadoProximoConcurso)}</h2>

    </div>
    );
}

export default MegaEsq;