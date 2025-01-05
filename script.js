AOS.init();

$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 15,
  responsiveClass: true,
  dots: true,
  nav: true,
  navText: [
    "<button class='custom-prev' aria-label='Anterior'>‹</button>",
    "<button class='custom-next' aria-label='Próximo'>›</button>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

document.querySelectorAll(".custom-prev, .custom-next").forEach((button) => {
  button.removeAttribute("role");
});
