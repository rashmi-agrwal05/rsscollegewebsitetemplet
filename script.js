(function ($) {
  "use strict";

  /* ===============================
     1. STICKY HEADER (SAFE)
  =============================== */
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header-area").addClass("background-header");
    } else {
      $(".header-area").removeClass("background-header");
    }
  }); 

  /* ===============================
     2. MOBILE MENU TOGGLE
  =============================== */
  $(".menu-trigger").on("click", function () {
    $(this).toggleClass("active");
    $(".nav").slideToggle(200);
  });

  /* ===============================
     3. SERVICES SLIDER
  =============================== */
  $(".owl-service-item").owlCarousel({
    autoplay: true,
    autoplayTimeout: 3500,
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });

  /* ===============================
     4. COURSES & FACULTY SLIDER
  =============================== */
  $(".owl-courses-item").owlCarousel({
    autoplay: true,
    autoplayTimeout: 4000,
    loop: true,
    margin: 30,
    dots: true,
    nav: false,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 3 }
    }
  });

  /* ===============================
     5. GALLERY – MODERN SLIDER BEHAVIOR
     (NO LAYOUT CHANGE)
  =============================== */
  const galleryRow = document.querySelector("#gallery .row");

  if (galleryRow) {
    let isDown = false;
    let startX;
    let scrollLeft;

    galleryRow.addEventListener("mousedown", (e) => {
      isDown = true;
      galleryRow.classList.add("dragging");
      startX = e.pageX - galleryRow.offsetLeft;
      scrollLeft = galleryRow.scrollLeft;
    });

    galleryRow.addEventListener("mouseleave", () => {
      isDown = false;
      galleryRow.classList.remove("dragging");
    });

    galleryRow.addEventListener("mouseup", () => {
      isDown = false;
      galleryRow.classList.remove("dragging");
    });

    galleryRow.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - galleryRow.offsetLeft;
      const walk = (x - startX) * 2;
      galleryRow.scrollLeft = scrollLeft - walk;
    });
  }

  /* ===============================
     6. GALLERY AUTO-SCROLL (SUBTLE)
  =============================== */
  let autoScroll;

  function startGalleryAutoScroll() {
    autoScroll = setInterval(() => {
      galleryRow.scrollLeft += 1;
      if (
        galleryRow.scrollLeft + galleryRow.clientWidth >=
        galleryRow.scrollWidth
      ) {
        galleryRow.scrollLeft = 0;
      }
    }, 30);
  }

  function stopGalleryAutoScroll() {
    clearInterval(autoScroll);
  }

  if (galleryRow) {
    startGalleryAutoScroll();
    galleryRow.addEventListener("mouseenter", stopGalleryAutoScroll);
    galleryRow.addEventListener("mouseleave", startGalleryAutoScroll);
  }

  /* ===============================
     7. SMOOTH SCROLL (NAV LINKS)
  =============================== */
  $(".nav a").on("click", function (e) {
    if (this.hash !== "") {
      e.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
        { scrollTop: $(hash).offset().top - 80 },
        700
      );
    }
  });

  /* ===============================
     8. LIGHTBOX INIT (SAFE)
  =============================== */
  if (typeof lightbox !== "undefined") {
    lightbox.option({
      resizeDuration: 300,
      wrapAround: true,
      fadeDuration: 300
    });
  }

  /* ==============================
   VERTICAL IMAGE AUTO SLIDER
============================== */

const slides = document.querySelectorAll('.vertical-slider .slide');
let currentIndex = 0;

setInterval(() => {
  slides[currentIndex].classList.remove('active');
  slides[currentIndex].classList.add('prev');

  currentIndex = (currentIndex + 1) % slides.length;

  slides[currentIndex].classList.remove('prev');
  slides[currentIndex].classList.add('active');
}, 3500);

})(window.jQuery);
