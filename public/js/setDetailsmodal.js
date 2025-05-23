//recuperations des buttons en savoir plus (accueill)
const buttons = document.querySelectorAll(".btn-modal");


buttons.forEach(button => {
    button.addEventListener("click", () => {
        const title = button.gettAttribute("data-title");
        const description = button.gettAttribute("data-description");

        document.getElementById("modal-title").innerHTML = title;
        document.getElementById("modal-description").innerHTML = description;
    })
})

const buttonsArticle = document.querySelectorAll(".btn-modal-Article");


buttonsArticle.forEach(button => {
    button.addEventListener("click", () => {
        const title = button.gettAttribute("data-title");
        const description = button.gettAttribute("data-description");

        document.getElementById("modal-title").innerHTML = title;
        document.getElementById("modal-description").innerHTML = description;
    })
})
