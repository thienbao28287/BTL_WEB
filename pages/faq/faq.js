const buttons = document.querySelectorAll(".filter-buttons button");
const items = document.querySelectorAll(".faq-item")

//===========================FILTER===================================
buttons.forEach(button => {
    button.addEventListener("click", () => {
        buttons.forEach(btn, () => btn.classList.remove("active"));
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


//===========================TOGGLE FAQ===================================
items.forEach(item => {
    const question = item.querySelector(".question"); //lấy phần tử có class question  bên trong item
    question.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

/*item = một cái hộp
Trên hộp có dán nhãn: "faq-item active"
.classList = danh sách các nhãn đang dán trên hộp đó.
*/