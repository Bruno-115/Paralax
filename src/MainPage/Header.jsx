
import "../../css/style.css";
import headerVideo from '../../imgs/Header.mp4'
const Header = (props) => {
  return (
    
    <header className="header u-center">
      <div className="header__background">
        <video src={headerVideo} autoPlay loop muted className="header__background-video"/>
      </div>

      <h1 className="header__primary header__primary-aling u-margin-bottom-m">
        <span className="header__primary-title">Paralax</span>
        <span className="header__primary-subtitle">net</span>
        <span className="header__primary-text u-margin-top-m">
          Navegue Além dos Limites: Sua Jornada Digital Começa Aqui
        </span>
      </h1>

      <div className="header__primary-aling u-margin-bottom-m">
        <a
          href="#price"
          className="btn btn__header btn__header-primary header__primary-aling btn__header-blue"
        >
          Planos
        </a>
        <a
          href="#sobre-nos"
          className="btn btn__header btn__header-secondary header__primary-aling btn__header-white"
        >
          Sobre nós
        </a>
      </div>
    </header>
  );
};

export default Header;
