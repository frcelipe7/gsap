import gsap from 'gsap';

import './Hero.css';
import { useEffect } from 'react';
import SplitType from 'split-type';

import empresasImg from '../../assets/img/hero/empresas.webp';

function Hero() {
  useEffect(() => {
    const text = gsap.utils.toArray('section.hero h1.title');
    text.forEach((t) => {
      const split = new SplitType(t, {
        types: 'chars',
        charClass: 'char',
        tagName: 'div',
      });

      if (split.chars) {
        split.chars.forEach((char) => {
          char.innerHTML = `<span>${char.textContent}</span>`;
        });
      }
    });

    const textChars = text[0].querySelectorAll('.char span');
    gsap.to(textChars, {
      y: '0%',
      duration: 0.75,
      stagger: 0.015,
      ease: 'power4.out',
    });

    return () => {};
  }, []);

  return (
    <section className="hero">
      <div className="left">
        <div className="empresas_container">
          <img src={empresasImg} alt="" />
          <p>A sua empresa pode ser a próxima</p>
        </div>
        <h1 className="title">
          sua empresa pode crescer <br /> muito mais no digital
        </h1>
        <p className="intro_text">
          Soluções únicas, estratégicas e desenvolvidas sob medida para elevar
          sua marca ao mais alto nível
        </p>
        <div className="buttons">
          <button className="cta main_button">Quero meu projeto</button>
          <button className="cta">Saiba mais</button>
        </div>
      </div>

      <div className="right"></div>
    </section>
  );
}

export default Hero;
