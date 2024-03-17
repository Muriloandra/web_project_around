let openP = document.querySelector(".explorer__btn_form");
let closeP = document.querySelector(".form__button-esc");
let formClose = document.querySelector(".form__close");
let openPage = document.querySelector(".page");
let submiTform = document.querySelector(".form__edit_change_save");

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

let formElment = document.querySelector(".form__edit_change");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  // Fazendo isso, podemos definir nossa própria forma de enviar o formulário.
  // Explicaremos em mais detalhes posteriormente.

  // Vamos encontrar os campos de formulário do DOM
  let nameInput = document.querySelector("#name");
  let jobInput = document.querySelector("#author");
  let formClean = document.querySelector(".form__close-clean");

  // Pegue os valores de cada campo do valor da propriedade correspondente
  let name = nameInput.value;
  let job = jobInput.value;

  // Selecione os elementos aos quais os valores dos campos serão inseridos
  let nameDisplay = document.querySelector("#change");
  let jobDisplay = document.querySelector("#switch");

  // Insira novos valores usando a propriedade textContent
  nameDisplay.textContent = name;
  jobDisplay.textContent = job;
  formClean.style.display = "none";
}

// Conecte o handler ao formulário:
// ele vai observar o evento de submit

formElment.addEventListener("submit", handleProfileFormSubmit);
