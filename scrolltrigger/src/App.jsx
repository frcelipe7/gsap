import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import { useEffect } from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Solution from './components/Solutions/Solution';
import Valores from './components/Valores/Valores';
import Projects from './components/Projects/Projects';
import Processes from './components/Processes/Processes';
import Footer from './components/Footer/Footer';

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
      <About />
      <Solution />
      <Valores />
      <Projects />
      <Processes />
      <Footer />
    </>
  );
}

export default App;
