// Função para mostrar a mensagem de erro e adicionar a classe de erro
function showError(inputELement, errorClass) {
  inputELement.classList.add(errorClass);
}

// Função para ocultar a mensagem de erro e remover a classe de erro
function hideError(inputELement, errorClass) {
  inputELement.classList.remove(errorClass);
}

// Função para exibir a mensagem de erro no elemento de tag
function errorMessage(elementTag, input) {
  elementTag.textContent = input.validationMessage;
}

// Função para limpar a mensagem de erro do elemento de tag
function cleanMessage(elementTag) {
  elementTag.textContent = "";
}

// Função para validar o input e exibir ou ocultar a mensagem de erro
function inputValidation(input, errorClass) {
  const tagElement = input.nextElementSibling;
  if (!input.validity.valid) {
    showError(input, errorClass);
    errorMessage(tagElement, input);
  } else {
    hideError(input, errorClass);
    cleanMessage(tagElement);
  }
}

// Função para habilitar ou desabilitar o botão
function buttonDisabled(inputs, button, errorButton) {
  const allInputsValid = inputs.every((input) => input.validity.valid);

  if (allInputsValid && inputs.length === 2) {
    button.classList.remove(errorButton);
    button.removeAttribute("disabled");
  } else {
    button.classList.add(errorButton);
    button.setAttribute("disabled", true);
  }
}

// Função principal para habilitar a validação do formulário
function enableValidation(elementos) {
  const form = document.forms[elementos.formSelector];
  const inputs = Array.from(form.querySelectorAll(elementos.inputsSelector));
  const button = form.querySelector(elementos.buttonForm);
  const buttonError = elementos.buttonError;
  buttonDisabled(inputs, button, buttonError);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    buttonDisabled(inputs, button, buttonError);
  });

  for (const input of inputs) {
    input.addEventListener("input", (event) => {
      event.preventDefault();
      const element = event.target;
      inputValidation(element, elementos.inputError);
      buttonDisabled(inputs, button, buttonError);
    });
  }
}

// Ativa a validação para o primeiro formulário
enableValidation({
  formSelector: "form",
  inputsSelector: "input",
  buttonForm: ".form__edit-change-save",
  inputError: "form__edit-change-text-error-job",
  buttonError: "form__edit-change-save-disabled",
});

// Ativa a validação para o segundo formulário
enableValidation({
  formSelector: "form2",
  inputsSelector: "input",
  buttonForm: ".forming__edit-change-save",
  inputError: "forming__edit-change-text-error-job",
  buttonError: "forming__edit-change-save-disabled",
});
