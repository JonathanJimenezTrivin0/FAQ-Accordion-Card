document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll(".js-accordion-btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", function (event) {
      const panel = event.target.nextElementSibling;
      panel.classList.toggle("active");
    });
  });
});
