let tours = [];

fetch("featured-tours.json")
    .then(res => res.json())
    .then(data => {
        tours = data;
        renderList(tours);
        initSwiper();
    })
    .catch((error) => console.error("❌ Lỗi:", error));

const featuredTours = document.querySelector(".swiper-wrapper");
const img_base = "../../assests/images/";


function renderList(list) {
  featuredTours.innerHTML = ""; 

  list.forEach(item => {
    const card = document.createElement('div');
    card.className = "swiper-slide";

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

function initSwiper() {
    new Swiper('.swiper', {
        slidesPerView: 1, // Nên để mặc định là 1 cho mobile
        spaceBetween: 20,
        loop: true,
        observer: true, // Thêm dòng này: tự động cập nhật khi DOM thay đổi
        observeParents: true,
        
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '#next',
            prevEl: '#pre',
        },
        breakpoints: {
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });
}