import Button from "../../components/Button/Button";
import './Hero.css';

import backgroundImage from '../../assets/images/HeroSection/background.png'

function Hero() {
  return <section>
    <img src={backgroundImage} alt="Imagem de fundo - sala de estar com sofá e plantas." />

    <h1>Vértice</h1>
    <p>A arquitetura que abraça seus sonhos</p>

    <Button className="button" text="Solicitar proposta personalizada" backgroundColor="#76891F" textColor="#FFFFFF" onClick={1} fontSize="16px"/>

    <div className="saiba_mais">
      <div className="scrolldown">
          <div className="chevrons">
              <div className="chevrondown"></div>
              <div className="chevrondown"></div>
          </div>
      </div>
      <p>Saiba mais</p>
    </div>
  </section>
}

export default Hero;
