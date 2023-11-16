const backToTop = document.querySelector('.back-to-top');
backToTop.hidden = true;

(() => {
    window.addEventListener("scroll", () => {
        if (window.scrollY > window.innerHeight) {
            backToTop.hidden = false;
        } else {
            backToTop.hidden = true;
        };
    });

    backToTop.addEventListener("click", goTop);
function goTop() {
  if (window.scrollY > 0) {
    window.scrollBy(0, -25);
    setTimeout(goTop, 0); 
  }
}

})();

