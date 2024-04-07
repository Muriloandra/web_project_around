let openP = document.querySelector(".explorer__btn-form");
let closeP = document.querySelector(".form__edit-container-button-esc");
let closeBut = document.querySelector(".forming__edit-container-button-esc");
let formClose = document.querySelector(".form");
let openPage = document.querySelector(".page");
let submiTform = document.querySelector(".form__edit-change-save");
let openBut = document.querySelector(".explorer__btn-insert");
let closeB = document.querySelector(".forming");
// Funcao para abertura e fechamento do formulario com opacidade da pagina.

function openForm() {
  formClose.style.display = "block";
  openPage.style.opacity = "0.4";
  openBut.disabled = true;
}

function openImg() {
  closeB.style.display = "block";
  openPage.style.opacity = "0.4";
}
function closeImg() {
  closeB.style.display = "none";
}

function closeForm() {
  formClose.style.display = "none";
  openBut.disabled = false;
}

function closePage() {
  openPage.style.opacity = "1";
}

openBut.addEventListener("click", openImg);
closeBut.addEventListener("click", closeImg);
closeBut.addEventListener("click", closePage);
openP.addEventListener("click", openForm);
closeP.addEventListener("click", closeForm);
closeP.addEventListener("click", closePage);
submiTform.addEventListener("click", closePage);

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
  let formClean = document.querySelector(".form-clean");

  let name = nameInput.value;
  let job = jobInput.value;

  let nameDisplay = document.querySelector("#change");
  let jobDisplay = document.querySelector("#switch");

  nameDisplay.textContent = name;
  jobDisplay.textContent = job;
  formClean.style.display = "none";
  openBut.disabled = false;
}

formElment.addEventListener("submit", handleProfileFormSubmit);

// let formingElement = document.querySelector(".forming__edit-change");

// function handleProfileFormingSubmit(evt) {
//   evt.preventDefault();

//   let titleInput = document.querySelector("#title");
//   let linkInput = document.querySelector("#link");
//   let formingClean = document.querySelector(".forming-clean");

//   let title = titleInput.value;
//   let link = linkInput.value;

//   // let nameDisplay = document.querySelector("#change");
//   // let jobDisplay = document.querySelector("#switch");

//   // titleDisplay.textContent = title;
//   // linkDisplay.textContent = link;
//   formingClean.style.display = "none";
// }

// formingElement.addEventListener("submit", handleProfileFormingSubmit);
