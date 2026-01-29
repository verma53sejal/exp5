const products = [
  { name: "Headphones", price: "₹12999", category: "electronics" },
  { name: "Speaker", price: "₹8999", category: "electronics" },
  { name: "T-Shirt", price: "₹999", category: "clothing" },
  { name: "Jeans", price: "₹1999", category: "clothing" }
];

const productDiv = document.getElementById("products");
const filter = document.getElementById("filter");

function showProducts(list) {
  productDiv.innerHTML = "";
  list.forEach(p => {
    productDiv.innerHTML += `
      <div class="card">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
        <span class="tag ${p.category}">${p.category}</span>
      </div>
    `;
  });
}

filter.addEventListener("change", () => {
  const value = filter.value;
  if (value === "all") showProducts(products);
  else showProducts(products.filter(p => p.category === value));
});

showProducts(products);
