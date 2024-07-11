const Footer = () => {
    return (<footer className="footer">
    <div className="footer__logo-box">
      <img
        src="imgs/logo-no-background.png"
        alt="Paralax net logo"
        className="footer__logo"
      />
    </div>
    <div className="u-center">
      <div className="footer__navigation">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="#" className="footer__link">Compania</a>
          </li>

          <li className="footer__item">
            <a href="#" className="footer__link">Contate nos</a>
          </li>

          <li className="footer__item">
            <a href="#" className="footer__link">Politica de privacidade</a>
          </li>

          <li className="footer__item">
            <a href="#" className="footer__link">Termos</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>);
};
export default Footer;