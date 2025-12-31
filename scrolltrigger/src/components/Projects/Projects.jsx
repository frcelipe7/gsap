import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import SplitType from 'split-type';

import { useEffect } from 'react';

import { setupMarqueeAnimation } from '../../assets/js/marquee';

import './Projects.css';
import minhaFotoInicioProjetos from '../../assets/img/portfolio/minha.png';
import portfolioProject1 from '../../assets/img/portfolio/carajas.png';
import portfolioProject2 from '../../assets/img/portfolio/mais-cuidado.png';
import portfolioProject3 from '../../assets/img/portfolio/vertice.png';

function Projects() {
  useEffect(() => {
    const cards = gsap.utils.toArray('section.cards .card');
    const introCard = cards[0];
    const lastCard = cards[cards.length - 1];

    gsap.fromTo(
      'body',
      {
        backgroundColor: '#0f0f0f',
      },
      {
        backgroundColor: '#f2f2f2',
        color: '#000000',
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: lastCard,
          start: 'top top',
          end: '+=100vh',
          scrub: true,
        },
      }
    );

    gsap.fromTo(
      'body',
      {
        backgroundColor: '#f2f2f2',
      },
      {
        backgroundColor: '#0f0f0f',
        color: '#f2f2f2',
        ease: 'none',
        scrollTrigger: {
          trigger: introCard,
          start: 'top top',
          end: '+=300vh',
          scrub: true,
        },
      }
    );

    const splitInstances = [];

    const titles = gsap.utils.toArray('.card-title h1');
    titles.forEach((title) => {
      const split = new SplitType(title, {
        types: 'chars',
        charClass: 'char',
        tagName: 'div',
      });

      splitInstances.push(split);

      if (split.chars) {
        split.chars.forEach((char) => {
          char.innerHTML = `<span>${char.textContent}</span>`;
        });
      }
    });

    const cardImgWrapper = introCard.querySelector('.card-img');
    const cardImg = cardImgWrapper.querySelector('img');
    gsap.set(cardImgWrapper, { scale: 0.5, borderRadius: '400px' });
    gsap.set(cardImg, { scale: 1.5 });

    function animateContentIn(titleChars, description) {
      gsap.to(titleChars, {
        x: '0%',
        duration: 0.75,
        stagger: 0.02,
        ease: 'power4.out',
      });
      gsap.to(description, {
        x: 0,
        opacity: 1,
        duration: 0.75,
        delay: 0.1,
        ease: 'power4.out',
      });
    }

    function animateContentOut(titleChars, description) {
      gsap.to(titleChars, { x: '100%', duration: 0.5, ease: 'power4.out' });
      gsap.to(description, {
        x: '40px',
        opacity: 0,
        duration: 0.5,
        delay: 0.1,
        ease: 'power4.out',
      });
    }

    const marquee = introCard.querySelector('.card-marquee .marquee');
    const titleChars = introCard.querySelectorAll('.char span');
    const description = introCard.querySelector('.card-description');

    ScrollTrigger.create({
      trigger: introCard,
      start: 'top top',
      end: '+=300vh',
      onUpdate: (self) => {
        const progress = self.progress;
        const imgScale = 0.5 + progress * 0.5;
        const borderRadius = 400 - progress * 375;
        const innerImgScale = 1.5 - progress * 0.5;

        gsap.set(cardImgWrapper, {
          scale: imgScale,
          borderRadius: borderRadius + 'px',
        });
        gsap.set(cardImg, { scale: innerImgScale });

        if (imgScale >= 0.5 && imgScale <= 0.75) {
          const fadeProgress = (imgScale - 0.5) / (0.75 - 0.5);
          gsap.set(marquee, { opacity: 1 - fadeProgress });
        } else if (imgScale < 0.5) {
          gsap.set(marquee, { opacity: 1 });
        } else if (imgScale > 0.75) {
          gsap.set(marquee, { opacity: 0 });
        }

        if (progress >= 1 && !introCard.contentRevealed) {
          introCard.contentRevealed = true;
          animateContentIn(titleChars, description);
        }

        if (progress < 1 && introCard.contentRevealed) {
          introCard.contentRevealed = false;
          animateContentOut(titleChars, description);
        }
      },
    });

    cards.forEach((card, index) => {
      const isLastCard = index === cards.length - 1;
      ScrollTrigger.create({
        trigger: card,
        start: 'top top',
        end: isLastCard ? '+=100vh' : 'top top',
        endTrigger: isLastCard ? null : cards[cards.length - 1],
        pin: true,
        pinSpacing: isLastCard,
      });
    });

    cards.forEach((card, index) => {
      if (index < cards.length - 1) {
        const cardWrapper = card;
        ScrollTrigger.create({
          trigger: cards[index + 1],
          start: 'top bottom',
          end: 'top top',
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(cardWrapper, {
              scale: 1 - progress * 0.25,
              opacity: 1 - progress,
            });
          },
        });
      }
    });

    cards.forEach((card, index) => {
      if (index > 0) {
        const cardImg = card.querySelector('.card-img img');
        const imgContainer = card.querySelector('.card-img');
        ScrollTrigger.create({
          trigger: card,
          start: 'top bottom',
          end: 'top top',
          onUpdate: (self) => {
            const progress = self.progress;
            gsap.set(cardImg, { scale: 2 - progress });
            gsap.set(imgContainer, {
              borderRadius: 150 - progress * 125 + 'px',
            });
          },
        });
      }
    });

    const marqueeTimeline = setupMarqueeAnimation();

    return () => {
      splitInstances.forEach((s) => s.revert());
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (marqueeTimeline) marqueeTimeline.kill();
    };
  }, []);

  return (
    <>
      <section className="cards">
        <div className="card">
          <div className="card-marquee">
            <div className="marquee">
              <h2>Next Level // </h2>
              <h2>Custom Software // </h2>
              <h2>High Performance // </h2>
              <h2>Isn't Just Code // </h2>
            </div>
          </div>

          <div className="card-wrapper">
            <div className="card-content">
              <div className="card-title">
                <h1>PROJETOS</h1>
              </div>
              <div className="card-description">
                <p>
                  Conheça alguns dos projetos que levam a nossa assinatura. Veja
                  como transformamos desafios de negócios em experiências
                  digitais de alto impacto.
                  <br /> <br />
                  Inspire-se nesses resultados e traga a sua empresa para o
                  próximo nível!
                </p>
              </div>
            </div>
            <div className="card-img">
              <img src={minhaFotoInicioProjetos} alt="" />
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src={portfolioProject1} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src={portfolioProject2} alt="" />
          </div>
        </div>

        <div className="card">
          <div className="card-img">
            <img src={portfolioProject3} alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
