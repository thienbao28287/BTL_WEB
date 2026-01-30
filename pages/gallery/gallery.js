const swiper = new Swiper('.swiper', {
    // Cấu hình số lượng ảnh hiển thị
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    
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

    // Kết nối nút bấm tùy chỉnh của bạn
    navigation: {
        nextEl: '#next',
        prevEl: '#pre',
    },

    // Responsive: Hiển thị nhiều ảnh hơn trên màn hình lớn
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});