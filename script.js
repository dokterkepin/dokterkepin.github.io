//
//
// Landing About
const ambilp = document.querySelector(".about p");

window.addEventListener("scroll", function () {
  ambilp.classList.add("munculp");
});

const ambiljudul = document.querySelectorAll(".intro h2");

window.addEventListener("load", function () {
  ambiljudul.forEach(function (seleksi) {
    seleksi.classList.add("munculp");
  });
});

//
//
// Landing Portfolio
const ambilportfolio = document.querySelector(".portfolio");

window.addEventListener("scroll", () => {
  let jarakscroll = this.scrollY;

  if (jarakscroll > ambilportfolio.offsetTop - 600) {
    let ambilthumb = document.querySelectorAll(".portfolio .rounded");
    ambilthumb.forEach((thumbnail, index) => {
      setTimeout(() => {
        thumbnail.classList.add("munculkanthumb");
      }, 800 * (index + 1));
    });
  }
});
