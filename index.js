let openP = document.querySelector(".explorer__btn-form");
let closeP = document.querySelector(".form__edit-container-button-esc");
let closeBut = document.querySelector(".forming__edit-container-button-esc");
let formClose = document.querySelector(".form");
let openPage = document.querySelector(".page");
let submiTform = document.querySelector(".form__edit-change-save");
let openBut = document.querySelector(".explorer__btn-insert");
let closeB = document.querySelector(".forming");
let buttonForm = document.querySelector(".forming__edit-change-save");

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
  openPage.style.opacity = "1";
}

function closeForm() {
  formClose.style.display = "none";
  openBut.disabled = false;
}

function closePage() {
  openPage.style.opacity = "1";
}

// Evento de abrir e fechar os formularios.
openBut.addEventListener("click", openImg);
closeBut.addEventListener("click", closeImg);
openP.addEventListener("click", openForm);
closeP.addEventListener("click", closeForm);
closeP.addEventListener("click", closePage);
submiTform.addEventListener("click", closePage);
buttonForm.addEventListener("click", closeImg);

let formElment = document.querySelector(".form__edit-change");

// adicionar nome e profissao no formulario

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

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Parque Nacional da Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
];

// adicionando as variaves
const formingClean = document.getElementById("forming");
const newNameInput = document.getElementById("cardName");
const newLinkInput = document.getElementById("cardLink");
const cardsContainer = document.getElementById("card");

// Criar o card que contem a imagem e o nome
function addCard(card, container) {
  const cardTemplate = document.getElementById("card-template");
  const cardClone = cardTemplate.content
    .querySelector(".local__img")
    .cloneNode(true);

  // Preencha os dados do card
  cardClone.querySelector(".local__img-photo").src = card.link;
  cardClone.querySelector(".local__img-photo").alt = card.name;
  cardClone.querySelector(".local__img-paragraph").textContent = card.name;

  cardClone
    .querySelector(".local__img-photo")
    .addEventListener("click", function (event) {
      // seleciona o popUp
      const popUp = document.querySelector(".local__popup");

      // Seleciona a imagem expandida e o parágrafo dentro da popUp
      const popupImg = document.querySelector(".local__popup-img");
      const popupParagraph = document.querySelector(".local__popup-paragraph");

      const imageSrc =
        event.target.parentElement.children[1].getAttribute("src");

      const textContent = event.target.parentElement.children[2].querySelector(
        ".local__img-paragraph"
      ).textContent;

      popupImg.src = imageSrc;
      popupParagraph.textContent = textContent;

      popUp.style.display = "block";

      document
        .querySelector(".local__popup_but")
        .addEventListener("click", function () {
          // Oculta a popUp
          popUp.style.display = "none";
        });
    });

  // Deletar o card
  const deleteButton = cardClone.querySelector(".local__img-delete");

  deleteButton.addEventListener("click", function () {
    const cardElement = deleteButton.closest(".local__img");
    container.removeChild(cardElement); // Remove o card
  });

  // Abrir popUp
  const popupButtons = cardClone.querySelectorAll(".local__img-photo");

  popupButtons.forEach(function (popupButton) {
    popupButton.addEventListener("click", function () {
      const popUp = popupButton.parentElement.nextElementSibling;
    });
  });

  container.appendChild(cardClone);
}

// Funcao que recebe a lista de cards
function addCards(cards, container) {
  cards.forEach((card) => {
    addCard(card, container);
  });
}

// Adiciona os cards ja existentes
addCards(initialCards, cardsContainer);

function likeCard(button) {
  if (button.classList.contains("local__img-btn-heart")) {
    button.classList.remove("local__img-btn-heart");
    button.classList.add("local__img-btn-heart-active");
  } else {
    button.classList.add("local__img-btn-heart");
    button.classList.remove("local__img-btn-heart-active");
  }
}

function buttoLikeCard(buttons) {
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      likeCard(button);
    });
  });
}

const likeButtons = document.querySelectorAll(".local__img-btn-heart");
buttoLikeCard(likeButtons);

// Evento do clique para adicionar novo card
const addButton = document.getElementById("addCardButton");
addButton.addEventListener("click", function (event) {
  event.preventDefault();

  //  variavel para caso o usuario nao insira nada
  const newName = newNameInput.value ? newNameInput.value : "Guest";
  const newLink = newLinkInput.value
    ? newLinkInput.value
    : "https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // envia um novo card com os dados fornecidos
  const newCard = { name: newName, link: newLink };
  initialCards.push(newCard);

  addCard(newCard, cardsContainer);

  // Limpa os inputs
  newNameInput.value = "";
  newLinkInput.value = "";

  const newlikeButtons = document.querySelectorAll(".local__img-btn-heart");
  buttoLikeCard(newlikeButtons);
});
