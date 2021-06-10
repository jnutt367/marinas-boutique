gsap.registerPlugin(ScrollTrigger)

let tl = gsap.timeline({
        
        scrollTrigger: {
            trigger: "#learn",
            markers: false,
            pin: false,
            start: "top 75%",
            end: "bottom 45%",
            toggleActions: "restart none none reverse"
        }
    })
    .fromTo("#man ", { opacity: 0 }, { y: -20, duration: 7, ease:"elastic",opacity: 1 }, 2);