const openForname = document.querySelector(".explorer__btn-form");
const closePagename = document.querySelector(
  ".form__edit-container-button-esc"
);
const closeButton = document.querySelector(
  ".forming__edit-container-button-esc"
);
const formContainer = document.querySelector(".form-container");
const openPage = document.querySelector(".page");
const submiTform = document.querySelector(".form__edit-change-save");
const buttonLocal = document.querySelector(".explorer__btn-insert");
const formingContainer = document.querySelector(".forming");
const buttonForm = document.querySelector(".forming__edit-change-save");
const popUp = document.querySelector(".popup");
const formsElement = document.querySelector(
  ".forming__edit-text, .form__edit-container, .popup-open"
);

// retirar a opacidade da pagina ao iniciar
const pageOpacity = document.querySelector(".page-opacity");
pageOpacity.classList.remove("page-opacity");

function openForm() {
  buttonLocal.disabled = true;
  if (formContainer.classList.contains("form-container")) {
    formContainer.classList.remove("form-clean");
    formContainer.classList.add("form-container");
  } else {
    formContainer.classList.add("form-clean");
    formContainer.classList.remove("form-container");
  }
  pageOpacity.classList.add("page-opacity");
}

function closeForm() {
  buttonLocal.disabled = false;
  formContainer.classList.add("form-clean");
  pageOpacity.classList.remove("page-opacity");
}

function openLocal() {
  if (formingContainer.classList.contains("forming")) {
    formingContainer.classList.remove("forming-clean");
    formingContainer.classList.add("forming");
  } else {
    formingContainer.classList.add("forming-clean");
    formingContainer.classList.remove("forming");
  }
  pageOpacity.classList.add("page-opacity");
}

function closeLocal() {
  formingContainer.classList.add("forming-clean");
  pageOpacity.classList.remove("page-opacity");
}

// Oculta a popUp
function closePopup() {
  popUp.classList.add("popup-close");
  popUp.classList.add("popup");
  pageOpacity.classList.remove("page-opacity");
}

// oculta as janelas com clique externo
function closeClick(event) {
  const escapeForm = event.target.closest(
    ".forming__edit-container, .form__edit-container, .popup-open"
  );

  if (escapeForm) {
    return;
  } else {
    closeLocal();
    closeForm();
    closePopup();
  }
}
// Evento de abrir e fechar os formularios.
closePagename.addEventListener("click", closeForm);
openForname.addEventListener("click", openForm);
buttonLocal.addEventListener("click", openLocal);
closeButton.addEventListener("click", closeLocal);
document.addEventListener("mousedown", closeClick);

const formElment = document.querySelector(".form__edit-change");

// adicionar nome e profissao no formulario

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector("#name");
  const jobInput = document.querySelector("#author");

  const name = nameInput.value;
  const job = jobInput.value;

  const nameDisplay = document.querySelector("#change");
  const jobDisplay = document.querySelector("#switch");

  nameDisplay.textContent = name;
  jobDisplay.textContent = job;
  closeForm();

  nameInput.value = "";
  jobInput.value = "";
  buttonLocal.disabled = false;
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
document.querySelector(".popup-but").addEventListener("click", closePopup);

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
      // Seleciona o popUp

      // Seleciona a imagem expandida e o parágrafo dentro da popUp
      const popupImg = document.querySelector(".popup-img");
      const popupParagraph = document.querySelector(".popup-paragraph");

      const imageSrc =
        event.target.parentElement.children[1].getAttribute("src");
      const textContent = event.target.parentElement.children[2].querySelector(
        ".local__img-paragraph"
      ).textContent;

      popupImg.src = imageSrc;
      popupParagraph.textContent = textContent;
      popupImg.alt = event.target.alt;

      popUp.classList.remove("popup-close");

      pageOpacity.classList.add("page-opacity");
    });

  // Deletar o card
  const deleteButton = cardClone.querySelector(".local__img-delete");

  function removeCard() {
    const cardElement = deleteButton.closest(".local__img");
    container.removeChild(cardElement); // Remove o card
  }

  deleteButton.addEventListener("click", removeCard);

  container.prepend(cardClone);
}

// Funcao que recebe a lista de cards
function addCards(cards, container) {
  cards.forEach((card) => {
    addCard(card, container);
  });
}

// Adiciona os cards ja existentes
addCards(initialCards, cardsContainer);

function likeCard() {
  const likeButtons = document.querySelectorAll(".local__img-btn-heart");

  likeButtons.forEach(function (likeButton) {
    likeButton.addEventListener("click", function () {
      if (likeButton.classList.contains("local__img-btn-heart")) {
        likeButton.classList.remove("local__img-btn-heart");
        likeButton.classList.add("local__img-btn-heart-active");
      } else {
        likeButton.classList.add("local__img-btn-heart");
        likeButton.classList.remove("local__img-btn-heart-active");
      }
    });
  });
}
likeCard();
// Evento do clique para adicionar novo card
const addButton = document.getElementById("addCardButton");

// Função para adicionar um novo card
function addCardform(event) {
  event.preventDefault();

  //  variável para caso o usuário não insira nada
  const newName = newNameInput.value ? newNameInput.value : "Guest";
  const newLink = newLinkInput.value
    ? newLinkInput.value
    : "https://source.unsplash.com/random/300x300?sig=${Math.random()}";
  likeCard();
  // Envia um novo card com os dados fornecidos
  const newCard = { name: newName, link: newLink };

  addCard(newCard, cardsContainer);

  // Limpa os inputs
  newNameInput.value = "";
  newLinkInput.value = "";

  likeCard();
}

addButton.addEventListener("click", addCardform);
//  funcao da tecla enter
function tapEnter(event) {
  if (newNameInput.value !== "" && event.key === "Enter") {
    addCardform(event);
    closeLocal();
  }
}
// funcao para fechar os formularios com a tecla Esc
function tapClose(event) {
  if (event.key === "Escape") {
    closeLocal();
    closeForm();
    closePopup();
  }
}
addButton.addEventListener("click", closeLocal);

document.addEventListener("keyup", tapEnter);
document.addEventListener("keyup", tapClose);
