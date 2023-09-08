// Exercise 4: Use icon library
const burgerLink = document.querySelector(".burger-link")
const burgerSymbol = document.getElementById("burger-menu")

burgerLink.addEventListener("click", () => {
  burgerSymbol.classList.add("active")
})
