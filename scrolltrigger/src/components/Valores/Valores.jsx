import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './Valores.css';
import { useEffect } from 'react';
import SplitType from 'split-type';

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
    <>
      <h2 className="frase">
        Cada negócio possui um DNA próprio. <br />
        Cada projeto é único. Tudo é projetado para <br />
        servir aos objetivos da sua empresa.
      </h2>
    </>
  );
}

export default Valores;
