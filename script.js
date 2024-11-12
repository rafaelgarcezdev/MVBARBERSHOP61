AOS.init();
$(".owl-carousel").owlCarousel({
  loop: false,
  margin: 15,
  responsiveClass: true,

  dots: true,
  nav: true,
  navText: [
    "<div class='custom-prev'>‹</div>",
    "<div class='custom-next'>›</div>",
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
