gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
        
        scrollTrigger: {
            trigger: "#learn",
            markers: false,
            pin: false,
            start: "top 75%",
            end: "bottom 45%",
            toggleActions: "restart none none restart"
        }
    })
    .fromTo("#man ", { opacity: 0 }, { y: -20, duration: 7, ease:"elastic",opacity: 1 })
    .fromTo("#react ", { x: -300,opacity: 0 }, { x: 0, y: -20, duration: 3, ease:"elastic",opacity: 1 },2)
    .fromTo("#next ", { opacity: 0, y: 100 }, { y: -20, duration: 2, ease:"elastic",opacity: 1 },4);