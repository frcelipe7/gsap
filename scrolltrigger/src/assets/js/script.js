// import { setupMarqueeAnimation } from "./marquee";

// import { SplitText } from "gsap/SplitText"; // é pago
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "lenis";

import gsap from "https://cdn.skypack.dev/gsap";
import { ScrollTrigger } from "https://cdn.skypack.dev/gsap/ScrollTrigger";
import Lenis from "https://cdn.skypack.dev/lenis";


document.addEventListener("DOMContentLoaded", () => {
    // gsap.registerPlugin(ScrollTrigger, SplitText);
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => lenis.raf(time * 1000));

    gsap.ticker.lagSmoothing(0);

    // setupMarqueeAnimation();
});


