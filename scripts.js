const getMenuIcon = document.querySelector(".menu-icon");
const getHamburgerNav = document.querySelector(".main-nav");

if (getMenuIcon) {
  getMenuIcon.addEventListener("click", function (e) {
    e.preventDefault();
    getHamburgerNav.classList.toggle("show-nav");
    getMenuIcon.classList.toggle("show-nav");
  });
}

/* change header background after acertain points*/

const targetToObserver = document.querySelector(".hero");
const changeHeader = document.querySelector("header");
const changeIconColor = document.querySelector(".show-nav .line");

const observeCallback = function (entries, observe) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      console.log("is intersecting");
      changeHeader.classList.remove("changeHeaderBackground");
    } else {
      console.log("no longer intersecting - background change");
      changeHeader.classList.add("changeHeaderBackground");
    }
  });
};

const options = {
  root: null,
  rootMargin: "100px",
  threshold: 0.5,
};

const observerTarget = new IntersectionObserver(observeCallback, options);
observerTarget.observe(targetToObserver);

//changing the images when hover
const getHeroImage = document.querySelectorAll(".hero-image");
const getAllHeroHeading = document.querySelectorAll(".intro");
const getHeroVideo = document.querySelector("#hero-video");
const heroContainer = document.querySelector(".hero");

getAllHeroHeading.forEach(function (headingsInfo) {
  headingsInfo.addEventListener("mouseenter", function (e) {
    const getAtt = headingsInfo.dataset.heading;
    //console.log(getAtt);

    if (getAtt) {
    }
  });
});

//listen for when the video finish loading and hide video
if (getHeroVideo) {
  getHeroVideo.addEventListener("ended", function (e) {
    console.log(e);
    getHeroVideo.classList.add("hide-video");
    //heroContainer.classList.add("show-images");
    console.log("video hidden class added");

    getHeroImage.forEach((image) => {
      image.classList.add("show-images");
    });
  });
}

/* swiper */
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});

//scroll in view
const getScrollView = document.querySelectorAll(".scroll-in-view");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible-now");
      // observer.unobserve(entry.target); // optional: run only once
    }
  });
});

getScrollView.forEach((el) => observer.observe(el));

/*services slider */
var swiperService = new Swiper(".swiper-container", {
  effect: "coverflow",
  //loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});
