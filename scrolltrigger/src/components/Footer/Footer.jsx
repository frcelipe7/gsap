import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import './Footer.css';
import logo from '../../assets/img/logo-preta.webp';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_brand">
          <img src={logo} alt="Raphael Tecnologia" className="footer_logo" />
          <p className="footer_bio">
            Transformando problemas complexos em software eficiente.
            Especialista em automação e arquitetura de dados.
          </p>

          <div className="footer_socials">
            <a
              href="https://www.instagram.com/feliperaphael.tecnologia/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faInstagram} />
              <span>Instagram</span>
            </a>
            <a
              href="https://www.instagram.com/feliperaphael.tecnologia/"
              target="_blank"
            >
              <FontAwesomeIcon icon={faWhatsapp} />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="footer_nav">
          <h4>Navegação</h4>
          <ul>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#services">Serviços</a>
            </li>
            <li>
              <a href="#processes">Processos</a>
            </li>
            <li>
              <a href="#portfolio">Portfólio</a>
            </li>
          </ul>
        </div>

        <div className="footer_contact">
          <h4>Vamos conversar?</h4>
          <p>Pronto para escalar seu negócio com tecnologia?</p>
          <a
            href="mailto:contato@feliperaphael.com.br"
            className="contact email"
          >
            <span className="material-symbols-outlined">mail</span>
            contato@feliperaphael.com.br
          </a>

          <a className="contact phone">
            <span className="material-symbols-outlined">phone</span>
            +55 (94) 9 9149-6505
          </a>
          <button className="footer_cta">Começar Projeto</button>
        </div>
      </div>

      <div className="footer_bottom">
        <p>
          &copy; {currentYear} Felipe Raphael Tecnologia. Todos os direitos
          reservados.
        </p>
        <div className="footer_legal">
          <a href="/privacidade">Privacidade</a>
          <a href="/termos">Termos de Uso</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
