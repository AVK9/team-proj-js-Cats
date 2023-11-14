const swiper = new Swiper('.swiper', {
    slidesPerView: 6,
  spaceBetween: 0,
  loop: true,
  direction:'vertical',
//   autoplay: {
//   delay: 1000,
//   },

  navigation: {
    nextEl: '.swiper-button-prev',
    // prevEl: '.swiper-button-next',
  },
})