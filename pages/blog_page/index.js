const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // hiện 1 lần
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((el) => observer.observe(el));
