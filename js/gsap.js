gsap.fromTo("h1", { color: "white", y: -200 }, { duration: 3, y: 0, color: "blue" })
gsap.fromTo("#thinking-cap", { y: -200, x: 0 }, { duration: 3, y: -150, x: -112 })
gsap.to("#thinking-cap", { stroke: "silver", repeat: 3, strokeWidth: "15", fill: "black" }, 3)