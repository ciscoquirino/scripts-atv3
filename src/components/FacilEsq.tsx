import useContexto from "../hooks/useContexto";
import trevoFacil from "../assets/trevoFacil.png";
import "../styles/Esquerda.css";


function FacilEsq(){
    const sorteio = useContexto();
    let estimado = new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    });
    return(
    <div className="esq">
        <div className="cabe">
        <image>
        <img src={trevoFacil} alt="trevo Lotofácil"/>
        </image>
        <h1 className="facil">LOTOFÁCIL</h1>
        </div>
        <p>Estimativa de prêmio do próximo
            concurso. Sorteio em {sorteio.lotofacil.dataProximoConcurso} :
        </p>
        <h2 className="facil">{estimado.format(sorteio.lotofacil.valorEstimadoProximoConcurso)}</h2>

    </div>
    );
}

export default FacilEsq;