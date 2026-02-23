const buttons = document.querySelectorAll(".filter-buttons button");
const items = document.querySelectorAll(".faq-item")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        items.forEach(item => {
            const type = item.dataset.type;

            if(type === filter){
                item.classList.remove("hide");
            }
            else{
                item.classList.add("hide");
            };
        });
    });
});



items.forEach(item => {
    const question = item.querySelector(".question"); //lấy phần tử có class question  bên trong item
    const answer = item.querySelector(".answer");

    question.addEventListener("click", () => {
        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        };
    });
});

/*item = một cái hộp
Trên hộp có dán nhãn: "faq-item active"
.classList = danh sách các nhãn đang dán trên hộp đó.
*/


const toggleBtn = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".header__navbar");

toggleBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});