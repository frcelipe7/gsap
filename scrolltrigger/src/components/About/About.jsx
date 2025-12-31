import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

import './About.css';

import logo from '../../assets/img/logo-preta.webp';
import imagemPrincipal from '../../assets/img/about/raphael.png';

import projeto1 from '../../assets/img/about/bioquality1.png';
import projeto2 from '../../assets/img/about/bioquality2.png';
import projeto3 from '../../assets/img/about/caminhos-e-trilhas.png';
import projeto4 from '../../assets/img/about/carajas-experience.png';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const config = [
        {
          selector: '.pjt1',
          startRotate: -15,
          endRotate: 5,
          yDist: -180,
        },
        {
          selector: '.pjt2',
          startRotate: 15,
          endRotate: 2,
          yDist: -100,
        },
        {
          selector: '.pjt3',
          startRotate: -10,
          endRotate: 2,
          yDist: -80,
        },
        {
          selector: '.pjt4',
          startRotate: -3,
          endRotate: -20,
          yDist: -220,
        },
      ];

      config.forEach((item) => {
        gsap.fromTo(
          item.selector,
          {
            rotation: item.startRotate,
            y: 0,
          },
          {
            rotation: item.endRotate,
            y: item.yDist,
            ease: 'none',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" ref={containerRef}>
      <div className="left">
        <div className="light l1"></div>
        <div className="light l2"></div>
        <div className="light l3"></div>

        <div className="main_img">
          <img
            className="imagemPrincipal"
            src={imagemPrincipal}
            alt="Minha imagem"
          />
          <div className="sombra"></div>
        </div>

        <img className="pjt1" src={projeto1} alt="projeto bioquality 1" />
        <img className="pjt2" src={projeto2} alt="projeto bioquality 2" />
        <img className="pjt3" src={projeto3} alt="projeto caminhos e trilhas" />
        <img className="pjt4" src={projeto4} alt="projeto carajas experience" />
      </div>
      <div className="right">
        <div className="logo">
          <img src={logo} alt="logo raphael tecnologia" />
        </div>

        <div className="main_text">
          <p>
            <span>
              Especialista em transformar problemas complexos em software
              eficiente.
            </span>{' '}
            Ajudo empresas a escalar através de desenvolvimento de software e
            arquitetura de dados inteligente.
            <br />
            <br /> Se o seu negócio precisa de uma{' '}
            <span>infraestrutura digital robusta e personalizada,</span> eu sou
            a pessoa certa para construí-la.
          </p>
        </div>

        <button className="cta">Começar meu projeto</button>
      </div>
    </section>
  );
}

export default About;
