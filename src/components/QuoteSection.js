import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faQuoteLeft} from "@fortawesome/free-solid-svg-icons"


export default function QuoteSection(){
   return(
    <div className="section quote">
        <p className=" quote-texto" ><FontAwesomeIcon icon={faQuoteLeft} />La Dolce Vita no solo es un nombre, es una filosofía: comer bien, disfrutar más y vivir con pasión. </p> 
        <p className="quote-autor">— Inspiración de la casa</p>

        </div>
   )
}