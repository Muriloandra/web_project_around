let openP = document.querySelector(".explorer__btn_form");
let closeP = document.querySelector(".form__button-esc");
let formClose = document.querySelector(".form__edit");

function openForm() {
  formClose.style.display = "block";
}

function closeForm() {
  formClose.style.display = "none";
}

openP.addEventListener("click", openForm);

closeP.addEventListener("click", closeForm);

var buttons = document.querySelectorAll(".local__img_btn_heart");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.classList.contains("local__img_btn_heart")) {
      button.classList.remove("local__img_btn_heart");
      button.classList.add("local__img_btn_heart-active");
    } else {
      button.classList.add("local__img_btn_heart");
      button.classList.remove("local__img_btn_heart-active");
    }
  });
});

// function changeBackground() {
//   var element = document.getElementById("btn");
//   element.classList.toggle("local__img_btn_heart");
//   onclick()changeBackground
//   id=""
// }
