import gsap from "gsap";

export function setupMarqueeAnimation() {
    // CORREÇÃO 1: Mudado de h1 para h2 (baseado no seu código anterior)
    const marqueeItems = gsap.utils.toArray(".marquee h2");
    
    if (marqueeItems.length > 0) {
        // Cria o loop
        const tl = horizontalLoop(marqueeItems, {
            repeat: -1,
            paddingRight: 30, // Espaço entre o fim da frase e o começo da próxima
            speed: 1, // Controle a velocidade aqui
        });

        // CORREÇÃO 2: Retornamos a timeline para o React poder controlar/limpar
        return tl; 
    }
}

/* * Helper function from GreenSock
 * Essa função calcula matematicamente a posição de cada item para criar um loop infinito perfeito
 */
function horizontalLoop(items, config) {
    items = gsap.utils.toArray(items);
    config = config || {};
    let tl = gsap.timeline({
        repeat: config.repeat,
        paused: config.paused,
        defaults: { ease: "none" },
        onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100),
    });
    
    let length = items.length;
    let startX = items[0].offsetLeft;
    let widths = [];
    let xPercents = [];
    let curIndex = 0;
    let pixelsPerSecond = (config.speed || 1) * 100;
    
    // Variáveis auxiliares
    let snap = config.snap === false ? (v) => v : gsap.utils.snap(config.snap || 1); 
    let totalWidth, curX, distanceToStart, distanceToLoop, item, i;

    gsap.set(items, {
        xPercent: (i, el) => {
            let w = (widths[i] = parseFloat(gsap.getProperty(el, "width", "px")));
            // CORREÇÃO 3: Corrigido "getPropoerty" para "getProperty"
            xPercents[i] = snap(
                (parseFloat(gsap.getProperty(el, "x", "px")) / w) * 100 + gsap.getProperty(el, "xPercent")
            );
            return xPercents[i];
        }
    });

    gsap.set(items, { x: 0 });
    
    totalWidth =
        items[length - 1].offsetLeft +
        (xPercents[length - 1] / 100) * widths[length - 1] -
        startX +
        items[length - 1].offsetWidth *
        gsap.getProperty(items[length - 1], "scaleX") +
        (parseFloat(config.paddingRight) || 0);

    for (i = 0; i < length; i++) {
        item = items[i];
        curX = (xPercents[i] / 100) * widths[i];
        distanceToStart = item.offsetLeft + curX - startX;
        distanceToLoop =
            distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
        
        tl.to(
            item,
            {
                xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
                duration: distanceToLoop / pixelsPerSecond,
            },
            0
        ).fromTo(
            item,
            {
                xPercent: snap(
                    ((curX - distanceToLoop + totalWidth) / widths[i]) * 100
                ),
            },
            {
                xPercent: xPercents[i],
                duration:
                    (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
                immediateRender: false,
            },
            distanceToLoop / pixelsPerSecond
        );
    }
    
    // Inicia o movimento
    tl.progress(1, true).progress(0, true);
    
    if (config.reversed) {
        tl.vars.onReverseComplete();
        tl.reverse();
    }
    
    return tl;
}