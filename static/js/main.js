console.log("Hello from main.js!");
gsap.registerPlugin(ScrollTrigger);


var timeline = gsap.timeline();

// Add animations to the timeline
timeline.to('.dot',{
  scale:2,
  duration: 1,
  backgroundColor:"transparent",
  border:"2px solid #682ae9",
  ease:"power1.out",
}).to('.dot',{
    scale:1.5,
    duration: 1,
    backgroundColor:"#682ae9",
    border:"none",
    ease:"power1.in",
  }).to('.dot',{
  scale:2,
  duration: 1,
  backgroundColor:"transparent",
  border:"2px solid #682ae9",
  ease:"power1.out",})
  .to('.dot',{
    scale:1,
    duration: 1,
    backgroundColor:"#682ae9",
    border:"none",
    ease:"power1.in",})
  .from('.line',{
    y:+500,
    duration: 1,
  })
  .from(".ltl",{
  opacity: 0,
  rotationX:90,
  rotateY: -30,
  y: -60,
  duration: 2, // Animation duration in seconds
  ease: "power2.out", // Easing function
}).from(".searchBox",{
  x:-1000,
  duration: 1, // Animation duration in seconds
  ease: "power2.out",
}).from(".abt", {
  opacity: 0,
  rotationX: -90,
  rotateY: -30,
  y: +60,
  duration: 7,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".wnw",
    start: "top 50%",
    end: "top 10%",
  },
})




