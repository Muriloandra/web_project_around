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

const formingClean = document.getElementById("forming");
const newNameInput = document.getElementById("cardName");
const newLinkInput = document.getElementById("cardLink");
const cardsContainer = document.getElementById("cards");

function addToggleButtonToNewCard() {
  const newCardButtons = document.querySelectorAll(".local__img-btn-heart");
  newCardButtons.forEach((button) => {
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
}

function renderCard(card, container) {
  const cardElement = document.createElement("div");
  cardElement.innerHTML = `
    <div class="local__img">
    <button class="local__img-delete"><img src="./images/Trash.png"></button>
      <img id="imgLocal" class="local__img-photo" src="${card.link}" alt="${card.name}">
      <div class="local__img-text">
        <p id="paraImg" class="local__img-paragraph">${card.name}</p>
        <button
                type="button"
                class="local__img-btn-heart local__img-btn-heart-active"
              ></button>
      </div>
    </div>
  `;
  container.appendChild(cardElement);
}

function renderCards(cards, container) {
  container.innerHTML = "";
  cards.forEach((card) => {
    renderCard(card, container);
  });
}

renderCards(initialCards, cardsContainer);

const addButton = document.getElementById("addCardButton");
addButton.addEventListener("click", function (event) {
  event.preventDefault();

  //  variavel para caso o usuario nao insira nada
  const newName = newNameInput.value ? newNameInput.value : "Guest";
  const newLink = newLinkInput.value
    ? newLinkInput.value
    : "https://plus.unsplash.com/premium_photo-1695186450459-8d3c896ca573?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  // Adiciona um novo card com os dados fornecidos
  const newCard = { name: newName, link: newLink };
  initialCards.push(newCard);

  renderCard(newCard, cardsContainer);

  //  Chama a funcao para alternar os botoes de like
  addToggleButtonToNewCard();

  // Limpa os inputs
  newNameInput.value = "";
  newLinkInput.value = "";
});
