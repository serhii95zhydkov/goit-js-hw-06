const refs = {
    input: document.querySelector(`#validation-input`),
};

refs.input.addEventListener(`blur`, onValidInput);

function onValidInput(event) {
    event.currentTarget.classList.remove('invalid');

    if (event.currentTarget.value.length === 6) {
        refs.input.classList.add(`valid`)
    } else {
        refs.input.classList.add(`invalid`)
    };
};