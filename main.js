TweenMax.staggerFrom(
  ".navbar > div",
  0.8,
  {
    x: "-80",
    opacity: 0,
    ease: Power3.easeOut,
    delay: 1,
  },
  0.08
);

TweenMax.staggerTo(
  ".navbar > div",
  0.8,
  {
    x: "80",
    opacity: 0,
    ease: Power3.easeOut,
    delay: 4,
  },
  0.04
);

TweenMax.to(".overlay", 1.2, {
  top: "-100%",
  ease: Expo.easeOut,
  delay: 2.5,
});

var textWrapper1 = document.querySelector(".name");
var textWrapper2 = document.querySelector(".greet");
textWrapper1.innerHTML = textWrapper1.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);
textWrapper2.innerHTML = textWrapper2.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline().add({
  targets: ".name .letter",
  translateY: [100, 0],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 2000,
  delay: (el, i) => 2600 + 40 * i,
});
anime.timeline().add({
  targets: ".greet .letter",
  translateY: [100, 0],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 2000,
  delay: (el, i) => 2600 + 40 * i,
});
