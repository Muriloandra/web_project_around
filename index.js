let openP = document.querySelector(".explorer__btn-form");
let closeP = document.querySelector(".form__button-esc");
let formClose = document.querySelector(".form__close");
let openPage = document.querySelector(".page");
let submiTform = document.querySelector(".form__edit-change-save");

// Funcao para abertura e fechamento do formulario com opacidade da pagina.

function openForm() {
  formClose.style.display = "block";
  openPage.style.opacity = "0.4";
}

function closeForm() {
  formClose.style.display = "none";
}

function closePage() {
  openPage.style.opacity = "1";
}

openP.addEventListener("click", openForm);
closeP.addEventListener("click", closeForm);
submiTform.addEventListener("click", closePage);
closeP.addEventListener("click", closePage);

// Funcao para alterar os botoes de curtida das fotos.

var buttons = document.querySelectorAll(".local__img-btn-heart");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    if (button.classList.contains("local__img-btn-heart")) {
      button.classList.remove("local__img-btn-heart");
      button.classList.add("local__img-btn-heart-active");
    } else {
      button.classList.add("local__img-btn-heart");
      button.classList.remove("local__img-btn-heart-active");
    }
  });
});

let formElment = document.querySelector(".form__edit-change");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  let nameInput = document.querySelector("#name");
  let jobInput = document.querySelector("#author");
  let formClean = document.querySelector(".form__close-clean");

  let name = nameInput.value;
  let job = jobInput.value;

  let nameDisplay = document.querySelector("#change");
  let jobDisplay = document.querySelector("#switch");

  nameDisplay.textContent = name;
  jobDisplay.textContent = job;
  formClean.style.display = "none";
}

formElment.addEventListener("submit", handleProfileFormSubmit);
