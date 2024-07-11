import "../../css/style.css";
import { NavLink } from "react-router-dom";
import CardData from './CardData.json';
import CardModel from './../CardModel'

const Card = () => {
  return( 
    <section className="price" id="price">
            <div className="secondary__header price__title u-center u-margin-bottom-g">
                Planos
            </div>
    <div className="row">
    <CardModel data={CardData} />
    </div>
    </section>
)};

export default Card;

