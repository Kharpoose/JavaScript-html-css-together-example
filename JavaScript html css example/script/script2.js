window.console.log("aaa");

function handFun(event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector(".js-cost-input");
  const costElement = document.querySelector(".js-total-cost");
  let cost = Number(inputElement.value);

  if ((cost < 40) & (cost >= 0)) {
    cost = cost + 10;
    document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
    costElement.classList.remove("cart");
  } else if (cost < 0) {
    costElement.innerHTML = "Error: Cost cannot be less than $0";
    costElement.classList.add("cart");
  } else {
    document.querySelector(".js-total-cost").innerHTML = `$${cost}`;
    costElement.classList.remove("cart");
  }
}
