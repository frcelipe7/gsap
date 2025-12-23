import './Header.css';

import logo from '../../assets/img/logo-preta.webp';
import { useEffect } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function Header() {
  useEffect(() => {
    const cards = gsap.utils.toArray('.card');
    const introCard = cards[0];
    const lastCard = cards[cards.length - 1];
    const header = document.querySelector('.header');

    ScrollTrigger.create({
      trigger: introCard,
      start: 'top top',
      end: '+=300vh',
      onUpdate: (self) => {
        const progress = self.progress;
        const headerTop = -progress * 70;

        gsap.set(header, { top: headerTop + 'px' });
      },
    });

    ScrollTrigger.create({
      trigger: lastCard,
      start: 'bottom top',
      onEnter: () => {
        gsap.to(header, { top: 0, duration: 0.5, ease: 'power2.out' });
      },
      onLeaveBack: () => {
        gsap.to(header, { top: '-70px', duration: 0.5, ease: 'power2.out' });
      },
    });

    return () => {};
  }, []);
  return (
    <header className="header">
      <img className="logo" src={logo} alt="" />

      <ul>
        <li>Home</li>
        <li>Sobre</li>
        <li>Benefícios</li>
        <li>Processos</li>
        <li>Projetos</li>
        <li>Entre em contato</li>
      </ul>
    </header>
  );
}

export default Header;
