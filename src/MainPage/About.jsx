import "../../css/style.css";
const About = () => {
    return(
<section className="sobre" id="sobre-nos">
      <div className="sobre__text">
        <h2 className="secondary__header secondary__header-1 u-center">
          Sobre nós
        </h2>
      </div>

      <div className="sobre__baixo row sobre__padding">
        <div className="col-1-of-2 sobre__baixo-ilustra">
          <img
            src="imgs/sobre-photo.png"
            alt="foto de planetas e estrelas"
            className="sobre__baixo-ilustra-photo"
          />
        </div>

        <div className="col-1-of-2 sobre__baixo-text u-margin-top-p">
          <p className="sobre__text-info">
            Na Paralax, nossa paixão é entregar uma conexão de internet
            excepcional que redefine a maneira como você vivencia o mundo
            digital. Combinando tecnologia de ponta e atendimento ao cliente de
            primeira linha, estamos comprometidos em proporcionar uma
            experiência de internet rápida, confiável e envolvente. Nossa equipe
            dedicada trabalha incansavelmente para garantir que você tenha
            acesso contínuo a uma rede de alta velocidade, permitindo que você
            explore, compartilhe e se conecte com facilidade. Acreditamos que a
            conectividade não deve ser apenas funcional, mas também inspiradora,
            capacitando você a alcançar mais e a explorar novas fronteiras. Na
            Paralax, estamos unidos por uma visão comum: enriquecer sua vida
            digital. Ao escolher a Paralax como sua provedora de internet, você
            está escolhendo uma jornada online emocionante e sem limites.
            Bem-vindo a um mundo onde a velocidade encontra a inovação, e sua
            experiência digital é nossa prioridade número um.
          </p>
        </div>
      </div>
    </section>
    );
}

export default About