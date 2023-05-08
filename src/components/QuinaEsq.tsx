import useContexto from "../hooks/useContexto";
import trevoQuina from "../assets/trevoQuina.png";
import "../styles/Esquerda.css";


function QuinaEsq(){
    const sorteio = useContexto();
    let estimado = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    });
    return(
    <div>
        <div className="cabe">
        <image>
        <img src={trevoQuina} alt="trevo quina"/>
        </image>
        <h1 className="quina">QUINA</h1>
        </div>
        <p>Estimativa de prêmio do próximo
            concurso. Sorteio em {sorteio.quina.dataProximoConcurso} :
        </p>
        <h2 className="quina">{estimado.format(sorteio.quina.valorEstimadoProximoConcurso)}</h2>

    </div>
    );
}

export default QuinaEsq;