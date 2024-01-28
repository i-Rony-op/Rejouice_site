var time = gsap.timeline();
time.from("#loader h2", {
  x: 50,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});
time.to("#loader", {
  opacity: 0,
  duration: 1,
  delay: 0.7,
  display: "none",
});
time.from("#page1-content h1 span", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 1,
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 780,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
function cursorAnimation() {
  var page1 = document.querySelector("#page1");

  page1.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });
  page1.addEventListener("mouseenter", function () {
    gsap.to("#cursor", {
      scale: 1,
      opacity: 1,
    });
  });
  page1.addEventListener("mouseleave", function () {
    gsap.to("#cursor", {
      scale: 0,
      opacity: 0,
    });
  });
}
cursorAnimation();

var page4 = document.querySelector("#video-cont");
var take_cur = document.querySelector("#take-cursor");
page4.addEventListener("mousemove", function (dets) {
  take_cur.style.opacity = 1;
  take_cur.style.left = dets.clientX + "px";
  take_cur.style.top = dets.clientY + "px";
});

page4.addEventListener("mouseenter", function () {
  gsap.to("#take-cursor", {
    scale: 1,
    opacity: 1,
  });
});
page4.addEventListener("mouseleave", function () {
  gsap.to("#take-cursor", {
    scale: 0,
    opacity: 0,
  });
});

function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  tl.from(".purple p", {
    scale: 0.3,
    rotation: 45,
    autoAlpha: 0,
    ease: "power2",
  })
    .from(
      ".line-3",
      { scaleX: 0, transformOrigin: "left center", ease: "none" },
      0
    )
    .to(".purple", { backgroundColor: "#28a92b" }, 0);

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
locomotive();

// function page2Animation() {
//   gsap.from(".elem p", {
//     y: 120,
//     stagger: 0.2,
//     duration: 1,
//     scrollTrigger: {
//       trigger: "#page2",
//       scroller: "#main",
//       start: "top 47%",
//       end: "top 46%",
//       markers: true,
//       scrub: 2,
//     },
//   });
// }

// page2Animation();
