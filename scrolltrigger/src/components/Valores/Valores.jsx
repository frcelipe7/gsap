import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Valores.css';
import { useEffect } from 'react';
import SplitType from 'split-type';

import projetosImg from '../../assets/img/valores/projetos.png';
import chess from '../../assets/img/valores/chess.png';
import diamont from '../../assets/img/valores/diamont.png';
import fountain_pen from '../../assets/img/valores/fountain_pen.png';
import growth from '../../assets/img/valores/growth.png';
import handshake from '../../assets/img/valores/handshake.png';
import verified from '../../assets/img/valores/verified.png';

const iconeValores = [
  chess,
  handshake,
  verified,
  growth,
  fountain_pen,
  diamont,
];

function Valores() {
  useEffect(() => {
    const text = gsap.utils.toArray('h2.frase');
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

    text.forEach((t) => {
      const textChars = t.querySelectorAll('.char span');
      gsap.to(textChars, {
        y: '0%',
        duration: 0.75,
        stagger: 0.015,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: t,
          start: 'top bottom',
          scrub: true,
        },
      });
    });

    return () => {};
  }, []);

  return (
    <section className="valores">
      <h2 className="frase">
        Cada negócio possui um DNA próprio. <br />
        Cada projeto é único. Tudo é projetado para <br />
        servir aos objetivos da sua empresa.
      </h2>

      <div className="projetos_img">
        <img src={projetosImg} alt="Imagem projetos computadores" />
      </div>

      <div className="valores_container">
        <h3>Valores</h3>
        <div className="icones_container">
          <div className="icone major">
            <img src={iconeValores[0]} alt="" />
            <p>Estratégia Antes do Código</p>
          </div>
          <div className="icone">
            <img src={iconeValores[1]} alt="" />
            <p>Transparência e Parceria</p>
          </div>
          <div className="icone">
            <img src={iconeValores[2]} alt="" />
            <p>Qualidade como Padrão</p>
          </div>
          <div className="icone minor">
            <img src={iconeValores[3]} alt="" />
            <p>Impacto Real</p>
          </div>
          <div className="icone minor">
            <img src={iconeValores[4]} alt="" />
            <p>Soluções Sob-Medida</p>
          </div>
          <div className="icone">
            <img src={iconeValores[5]} alt="" />
            <p>Exclusividade e Detalhe</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Valores;
