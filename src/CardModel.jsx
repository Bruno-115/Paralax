function CardModel (props){
    return (
        props.data.map(data => (
              <div className="col-1-of-3" key={props.id}>
                <div className="card u-margin-bottom-g">
                  <div className="card__side card__side--front card__side--front-">
                    <div className={`card__picture card__picture--${data.id}`}>&nbsp;</div>
                    <h3 className="card__heading">
                      <span className={`card__heading-span card__heading-span--${data.id}`}>
                        <span
                          className={`card__heading-span-title card__heading-span-title-${data.id} u-margin-bottom-p`}
                          >Plano:</span
                        ><span
                          className={`card__heading-span-description card__heading-span-description-${data.id}`}
                          >{data.subtitle}</span
                        >
                        <span
                          className={`card__heading-span-type card__heading-span-type-${data.id}`}
                          >{data.title}</span
                        >
                      </span>
                    </h3>
                  </div>
                  <div className={`card__side card__side--back card__side--back-${data.id}`}>
                    <div className="card__details">
                      <p className="card__details--net card__details--net">{data.mega} Megas</p>
                      <p className="card__details--valor">
                        <span className="card__details--valor-cont">Por</span>
                        <span
                          className={`card__details--valor-price card__details--valor-price-${data.id}`}
                          >R${data.price}</span
                        >
                        <span className="card__details--valor-display">Mensal</span>
                      </p>
                      <ul>
                        <li>{data.description1}</li>
                        <li>{data.description2}</li>
                        <li>{data.description3}</li>
                      </ul>
                      <a href="#" className={`btn btn__price btn__price-${data.id}`}>Assinar</a>
                    </div>
                  </div>
                </div>
              </div>
            )
        )
    )
}


export default CardModel;