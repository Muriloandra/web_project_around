document.addEventListener("DOMContentLoaded", function () {
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
      name: "Parque Nacional da Vanoise ",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
    },
    {
      name: "Lago di Braies",
      link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
    },
  ];
  // selecionar a classe para onde vai ser alterada a imagem
  const localImages = document.querySelectorAll(".local__img-photo");
  // selecionar a classe do paragrafo
  const localParagraphs = document.querySelectorAll(".local__img-paragraph");

  // altera os paragrafos pela linha de codigo name

  localParagraphs.forEach((paragraph, index) => {
    paragraph.textContent = initialCards[index].name;
  });
  //   altera as imagens e os alt das imagens
  localImages.forEach((img, index) => {
    img.src = initialCards[index].link;
    img.alt = initialCards[index].name;
  });
});
