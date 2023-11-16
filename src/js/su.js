const swiper = new Swiper('.swiper', {
    slidesPerView: 6,
  spaceBetween: 0,
  loop: true,
  direction:'vertical',
  autoplay: {
  delay: 3000,
  },

  navigation: {
    nextEl: '.swiper-button-prev',
  },
})