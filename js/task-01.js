const listCategories = document.querySelector("#categories");
const itemCategories = document.querySelectorAll(".item");

console.log(`Number of categories: ${itemCategories.length}`);

itemCategories.forEach((element) => {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.querySelectorAll("li").length}`);
});