const buttonDecrement = document.querySelector("[data-action='decrement']");
const buttonIncrement = document.querySelector("[data-action='increment']");
const valueEl = document.querySelector("#value");
let newValue = 0;

buttonDecrement.addEventListener("click", valueDecrement);
buttonIncrement.addEventListener("click", valueIncrement);

function valueDecrement() {
    newValue -= 1;
    return addNewValue(newValue);
}
    
function valueIncrement() {
    newValue += 1;
    return addNewValue(newValue);
}

function addNewValue(value) {
    return valueEl.innerHTML = `${value}`;
}







