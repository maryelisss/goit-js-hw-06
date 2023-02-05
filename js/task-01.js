const category = document.querySelector("#categories");
const items = category.querySelectorAll(".item")
console.log(`Number of categories`, items.length);

for (let item of items) {
    console.log(`Category:`, item.firstElementChild.textContent);
    console.log(`Elements:`, item.lastElementChild.children.length);
}



