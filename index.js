const openForname = document.querySelector(".explorer__btn-form");
const closePagename = document.querySelector(
  ".form__edit-container-button-esc"
);
const closeBut = document.querySelector(".forming__edit-container-button-esc");
const formClose = document.querySelector(".form");
const openPage = document.querySelector(".page");
const submiTform = document.querySelector(".form__edit-change-save");
const openBut = document.querySelector(".explorer__btn-insert");
const closeB = document.querySelector(".forming");
const buttonForm = document.querySelector(".forming__edit-change-save");

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
openForname.addEventListener("click", openForm);
closePagename.addEventListener("click", closeForm);
closePagename.addEventListener("click", closePage);
submiTform.addEventListener("click", closePage);
buttonForm.addEventListener("click", closeImg);

const formElment = document.querySelector(".form__edit-change");

// adicionar nome e profissao no formulario

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = document.querySelector("#name");
  const jobInput = document.querySelector("#author");
  const formClean = document.querySelector(".form-clean");

  const name = nameInput.value;
  const job = jobInput.value;

  const nameDisplay = document.querySelector("#change");
  const jobDisplay = document.querySelector("#switch");

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
      // Seleciona o popUp
      const popUp = document.querySelector(".popup");

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

      popUp.style.display = "block";

      document
        .querySelector(".popup-but")
        .addEventListener("click", function () {
          // Oculta a popUp
          popUp.style.display = "none";
        });
    });

  // Deletar o card
  const deleteButton = cardClone.querySelector(".local__img-delete");

  function removeCard() {
    const cardElement = deleteButton.closest(".local__img");
    container.removeChild(cardElement); // Remove o card
  }

  deleteButton.addEventListener("click", removeCard);

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
    closeImg();
  }
}

document.addEventListener("keyup", tapEnter);
