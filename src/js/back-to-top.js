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

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
})();