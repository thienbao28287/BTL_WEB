//=====================SLIDER====================================
const swiper = new Swiper('.swiper', {
    effect: 'coverflow',
    // Cấu hình số lượng ảnh hiển thị
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    // Cấu hình chi tiết cho hiệu ứng coverflow
    coverflowEffect: {
        rotate: 50,         // Độ xoay của các slide 2 bên
        stretch: 0,         // Khoảng cách giãn ra giữa các slide
        depth: 100,         // Độ sâu (trục Z), tạo hiệu ứng 3D
        modifier: 1,        // Hệ số nhân của hiệu ứng
        slideShadows: true, // Bật bóng đổ cho các slide 2 bên
    },
    // Tự động chạy
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    // Phân trang (dấu chấm)
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Kết nối nút bấm tùy chỉnh
    navigation: {
        nextEl: '#next',
        prevEl: '#pre',
    },

    // Responsive
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});


//=====================FILTER====================================
const buttons = document.querySelectorAll(".filter-buttons button"); //kq trả về là nodeList
const items = document.querySelectorAll(".gallery-grid .item");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.innerText.toLowerCase();

        items.forEach(item => {
            const type = item.dataset.type;

            if (filter === "all" || type === filter) {
                item.classList.remove("hide");
            } else {
                item.classList.add("hide");
            }
        });
    });
});



//=====================LIGHTBOX====================================
const slides = document.querySelectorAll(".swiper-slide");
const lightbox = document.querySelector(".lightbox");
const lbimage = document.querySelector(".lightbox-img");
const close = document.querySelector(".close");

slides.forEach(slide => {
    slide.addEventListener("click", () => {
        const img = slide.querySelector("img");
        lightbox.classList.add("active");
        lbimage.src = img.src;
        swiper.allowTouchMove = false;
    });
});

lbimage.addEventListener("click", () => {
    lbimage.classList.toggle("zoomed");
});

close.addEventListener("click", () => {
    lightbox.classList.remove("active");
    lightboxImg.classList.remove("zoomed");
    swiper.allowTouchMove = true;
});




const toggleBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".header__navbar");

toggleBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});