window.addEventListener("load", function () {
  var swiper = new Swiper(".cameraSwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-camera-pagination",
      clickable: true,
    },
  });
});
