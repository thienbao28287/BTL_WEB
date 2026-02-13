new Swiper(".gallery-main", {
  loop: true,
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // hiện 1 lần rồi thôi
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((el) => observer.observe(el));
