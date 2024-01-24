const hero = new SplitType(".hero");

gsap.to(".char", {
  y: 0,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.1,
});

gsap.to(".hero-caption", {
  y: 0,
  stagger: 0.05,
  delay: 1,
  duration: 0.1,
});
