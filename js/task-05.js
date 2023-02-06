const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", inputText);
function inputText(event) {
    if (nameInput.value === "") {
        return nameOutput.textContent = `Anonymous`
        }
    return nameOutput.textContent = event.currentTarget.value;
};

