import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { useEffect, useRef } from 'react';

import './Processes.css';

import processImage from '../../assets/img/card/card-img-3.jpg';

gsap.registerPlugin(ScrollTrigger);

function Processes() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const processes = gsap.utils.toArray('section.processes .process');

      processes.forEach((process) => {
        ScrollTrigger.create({
          trigger: process,
          start: 'top center',
          onEnter: () => process.classList.add('active'),
          onEnterBack: () => process.classList.add('active'),
          onLeaveBack: () => process.classList.remove('active'),
        });
      });

      gsap.fromTo(
        'section.processes .left .img_wrapper img',
        { y: '0%' },
        {
          y: '-60%',
          ease: 'none',
          scrollTrigger: {
            trigger: 'section.processes',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="processes" ref={containerRef}>
      <div className="left">
        <h2>Processos</h2>
        <p>
          Um processo claro e bem definido, da concepção ao lançamento, para
          garantir que cada linha de código esteja alinhada aos seus objetivos
          de negócio
        </p>

        <div className="img_wrapper">
          <img src={processImage} alt="Imagem processo" />
        </div>
      </div>
      <div className="right">
        {[
          {
            num: '01',
            title: 'Iniciação',
            description:
              'Entendemos a fundo o seu modelo de negócio, público-alvo e objetivos. Definimos o escopo exato para garantir que a solução resolva o problema certo.',
          },
          {
            num: '02',
            title: 'Protótipo e Planejamento',
            description:
              'Arquitetamos a ideia. Criamos o visual completo e a navegação do projeto para que você aprove a experiência e o design antes de qualquer código ser desenvolvido.',
          },
          {
            num: '03',
            title: 'Desenvolvimento',
            description:
              'A construção da solução. Transformamos o design aprovado em um sistema real, utilizando tecnologias modernas focadas em segurança, velocidade e performance.',
          },
          {
            num: '04',
            title: 'Testes',
            description:
              'O controle de qualidade. Realizamos testes rigorosos em diversos dispositivos para garantir estabilidade. Só entregamos quando o projeto está polido e pronto para o mercado.',
          },
        ].map((item, index) => (
          <div className="process" key={index}>
            <div className="number">{item.num}</div>

            <div className="text_container">
              <p className="title">{item.title}</p>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Processes;
