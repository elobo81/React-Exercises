import audi from './assets/audi.jpg';
import './PresentationCard.css';  
let name = "Enzo Lobo"

function PresentationCard() {
    return(
        <div className="presentation-card">
            <img src={audi} alt="Avatar" className="Avatar"/>
            <h1>
                Hola, mi nombre es {name} y estoy aprendiendo REACT JS
            </h1>    
        </div>
    );
}

export  default PresentationCard;