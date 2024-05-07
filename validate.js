function showError(inputELement) {
  inputELement.classList.add("form__edit-change-text-error-job");
}

function hideError(inputELement) {
  inputELement.classList.remove("form__edit-change-text-error-job");
}

function errorMessage(elementTag, input) {
  elementTag.textContent = input.validationMessage;
}

function cleanMessage(elementTag) {
  elementTag.textContent = "";
}

function inputValidation(input) {
  const tagElement = input.nextElementSibling;
  if (!input.validity.valid) {
    showError(input);
    errorMessage(tagElement, input);
  } else {
    hideError(input);
    cleanMessage(tagElement);
  }
}

function buttonDisabled(inputs, button) {
  const isValid = inputs.every((input) => input.validity.valid);
  if (isValid) {
    button.classList.remove("form__edit-change-save-disabled");
    button.removeAttribute("disabled");
  } else {
    button.classList.add("form__edit-change-save-disabled");
    button.setAttribute("disabled", true);
  }
}

function enableValidation(elementos) {
  const form = document.forms[elementos.formSelector];
  const inputs = Array.from(form.querySelectorAll(elementos.inputsSelector));
  const button = form.querySelector(elementos.buttonForm);
  buttonDisabled(inputs, button);

  for (const input of inputs) {
    input.addEventListener("input", (event) => {
      event.preventDefault();
      const element = event.target;
      inputValidation(element);
      buttonDisabled(inputs, button);
    });
  }
}

enableValidation({
  formSelector: "form",
  inputsSelector: "input",
  buttonForm: ".form__edit-change-save",
  // inputError: ".form__edit-change-text-error-job",
  buttonError: ".form__edit-change-save-disabled",
});

enableValidation({
  formSelector: "form2",
  inputsSelector: "input",
  buttonForm: ".form__edit-change-save",
  // inputError: ".forming__edit-change-text-error-job",
  buttonError: ".form__edit-change-save-disabled",
});
