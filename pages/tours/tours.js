let tours = [];

fetch("featured-tours.json")
    .then(res => res.json())
    .then(data => {
        tours = data;
        renderList(tours);
    })
    .catch((error) => console.error("❌ Lỗi:", error));

const featuredTours = document.querySelector(".featuredTours");
const img_base = "../../assests/images/";


function renderList(list) {
  featuredTours.innerHTML = ""; 

  list.forEach(item => {
    const card = document.createElement('div');
    card.className = "card";

    card.innerHTML =
      `
      <div class="card__image"><img src="${img_base + item.image}" alt=""></div>
      <div class="card__tag">${item.tag}</div>
      <div class="card-content">
        <div class="card__title">${item.title}</div>
        <div class="card__desciption">${item.description}</div>
        <div class="details">
          <div class="card__duration"><i class="fa-regular fa-clock"></i>${item.duration}</div>
          <div class="card__price">${item.price_from}</div>
        </div>
        <button>View Details</button>
      </div>
      `;

    featuredTours.appendChild(card);
  });
}