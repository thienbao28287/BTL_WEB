const buttons = document.querySelectorAll(".btn-des");
const cards = document.querySelectorAll(".card");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filterName = btn.dataset.name;
    buttons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    cards.forEach((card) => {
      const cardName = card.dataset.name;
      if (filterName === "all" || cardName === filterName) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
/* ================= SCROLL REVEAL ================= */
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
    threshold: 0.2, // 20% element xuất hiện thì hiện
  },
);

revealElements.forEach((el) => observer.observe(el));
