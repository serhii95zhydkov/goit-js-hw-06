function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  divControls: document.querySelector(`#controls`),
  input: document.querySelector(`input`),
  buttonCreate: document.querySelector(`button[data-create]`),
  buttonDestroy: document.querySelector(`button[data-destroy]`),
  divBoxes: document.querySelector(`#boxes`),
}

refs.buttonCreate.addEventListener(`click`, createBoxes);
refs.buttonDestroy.addEventListener(`click`, destroyBoxes);

function createBoxes(amount) {
  amount = refs.input.value;

  const arrayDiv = [];

  for (let i = 1; i <= amount; i += 1) {
    let divBoxesEl = `<div class="box-${i}"></div>`;
    arrayDiv.push(divBoxesEl);
  };

  const markup = arrayDiv.join("");

  refs.divBoxes.insertAdjacentHTML("beforeend", markup);

  for (let i = 0; i < amount; i += 1) {
    refs.divBoxes.children[i].style.width = (30 + 10 * i) + "px";
    refs.divBoxes.children[i].style.height = (30 + 10 * i) + "px";
    refs.divBoxes.children[i].style.backgroundColor = getRandomHexColor();
  }
};

function destroyBoxes() {
  refs.divBoxes.innerHTML = "";
};