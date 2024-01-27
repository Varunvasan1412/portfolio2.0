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

TweenMax.staggerFrom("ul > li", 1, {
  y: "-50",
  opacity: 0,
  ease: Power3.easeOut,
  delay: 2.5,
  stagger: 0.25,
});

TweenMax.staggerFrom(
  ".logo > svg",
  1,
  {
    y: "-50",
    opacity: 0,
    ease: Power3.easeOut,
    delay: 10,
  },
  0.08
);

document.addEventListener("DOMContentLoaded", function () {
  TweenMax.to(".overlay", 1.4, {
    top: 0, // Slide the overlay in
    ease: Expo.easeOut,
    onComplete: function () {
      setTimeout(function () {
        // Pause for 1 second before sliding out
        TweenMax.to(".overlay", 2.5, {
          top: "-100%",
          ease: Expo.easeOut,
        });
      }, 1000); // Adjust the delay time as needed
    },
  });
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
  stagger: 5,
  delay: (el, i) => 2600 + 40 * i,
});
anime.timeline().add({
  targets: ".greet .letter",
  translateY: [100, 0],
  translateZ: 0,
  easing: "easeOutExpo",
  duration: 2000,
  stagger: 5,
  delay: (el, i) => 2600 + 40 * i,
});
