function change() {
  const buttonElement = document.querySelector(".amazon");

  if (buttonElement.innerText === "Add to Cart") {
    buttonElement.innerHTML = "See Cart";
    buttonElement.classList.add("cart2");
  } else {
    buttonElement.innerHTML = "Add to Cart";
    buttonElement.classList.remove("cart2");
  }
}

function checkButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains("is-toggled")) {
    beforeWork();

    button.classList.add("is-toggled");
  } else {
    button.classList.remove("is-toggled");
  }
}

function beforeWork() {
  const previousButton = document.querySelector(".is-toggled");
  if (previousButton) {
    previousButton.classList.remove("is-toggled");
  }
}
