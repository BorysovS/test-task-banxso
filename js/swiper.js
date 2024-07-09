const swiper = new Swiper(".mySwiper", {
  spaceBetween: 48,
  loop: true,
  slidesPerView: "auto",
  centeredSlides: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<svg class="' +
        className +
        '" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z" /></svg>'
      );
    },
  },
  navigation: {
    nextEl: "#nextButton",
    prevEl: "#prevButton",
  },
});

document.getElementById("prevButton").addEventListener("click", () => {
  swiper.slidePrev();
});

document.getElementById("nextButton").addEventListener("click", () => {
  swiper.slideNext();
});
