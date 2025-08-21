const productElement = document.querySelector("#product-list"); //div
const categoryElement = document.querySelector("#category"); //select

const products = [
  { name: "Jeans", category: "clothing" },
  { name: "Shoes", category: "clothing" },
  { name: "Laptop", category: "electronics" },
  { name: "Headphones", category: "electronics" },
  { name: "Book", category: "books" },
  { name: "Novel", category: "books" },
];

function filter(category) {
  if (category === "all") {
    return products;
  } else {
    const filteredProducts = products.filter((value) => {
      return value.category === category;
    });
    return filteredProducts;
  }
}

categoryElement.addEventListener("change", () => {
  const selectedValue = categoryElement.value;
  productElement.innerHTML = ""; // Clear previous products
  filter(selectedValue).map((product) => {
    const div = document.createElement("div");
    div.innerText = product.name;
    div.style.border = "1px solid gray";
    div.style.margin = "5px";
    div.style.padding = "5px";
    productElement.appendChild(div);
  });
});

// Initial load of all products
filter("all").map((product) => {
  const div = document.createElement("div");
  div.innerText = product.name;
  div.style.border = "1px solid gray";
  div.style.margin = "5px";
  div.style.padding = "5px";
  productElement.appendChild(div);
});
