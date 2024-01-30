gsap.registerPlugin(ScrollTrigger);

// lenis for smooth scrolling
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// main page nav tabs animation

TweenMax.staggerFrom("ul", 1, {
  y: "-50",
  opacity: 0,
  ease: Power3.easeOut,
  delay: 3.5,
});

//slider animations

document.addEventListener("DOMContentLoaded", function () {
  TweenMax.to(".overlay", 0, {
    top: 0, // Slide the overlay in
    ease: Expo.easeOut,
    onComplete: function () {
      setTimeout(function () {
        // Pause for 1 second before sliding out
        TweenMax.to(".overlay", 2.8, {
          top: "-100%",
          ease: Expo.easeOut,
        });
      }, 2000);
    },
  });
});

// overlay texts animations

var tl = gsap.timeline({ defaults: { ease: "SlowMo.easeOut" } });

tl.to(".overlay-content", { y: "0%", duration: 0.8, stagger: 0.15 });

//logo animations
tl.to(".overlay-content", { y: "0%", duration: 1.2, stagger: 0.5 });
tl.fromTo(
  ".logo svg",
  { y: "-150%" },
  { y: "0%", duration: 1.2, delay: 0.15, ease: "power3.easeOut" }
);

//hero about animations
tl.to(".p-hide", { y: "0%", duration: 0.3, stagger: 0.15 });

//mouse pointer animations
var cursor = document.querySelector(".cursor");
var cursorBlur = document.querySelector(".cursor-blur");

document.addEventListener("mousemove", function (dets) {
  cursor.style.left = dets.x + "px";
  cursor.style.top = dets.y + "px";
  cursorBlur.style.left = dets.x - 250 + "px";
  cursorBlur.style.top = dets.y - 250 + "px";
});

// hero animations
const myText = new SplitType(".greet");
const myText2 = new SplitType(".name");

gsap.to(".greet .char", {
  y: 0,
  stagger: 0.05,
  delay: 2.3,
  duration: 0.2,
});

gsap.to(".name .char", {
  y: 0,
  stagger: 0.05,
  delay: 2.3,
  duration: 0.2,
});

// warning animation
document.body.style.overflowX = "hidden";
gsap.from(".warn", {
  x: "100vw",
  duration: 1.5,
  delay: 2.5,
  ease: "power2.out",
  onComplete: function () {
    // Remove overflow-x: hidden; from the body after the animation completes
    document.body.style.overflowX = "";
  },
});
