import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import { useEffect } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Valores from './components/Valores/Valores';
import Projects from './components/Projects/Projects';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    lenis.on('scroll', ScrollTrigger.update);

    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Valores />
      <Projects />
      <Valores />
      <Valores />
    </>
  );
}

export default App;
