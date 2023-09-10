// Exercise 4: Use icon library
const burgerLink = document.querySelector(".burger-link")
const burgerSymbol = document.getElementById("burger-menu")

burgerLink.addEventListener("click", () => {
  burgerSymbol.classList.add("active")
})

// Exercise 6: Map
const lastExit = document.querySelector("#last-exit")
const span = document.querySelector(".map__span")
const rect1 = document.querySelector(".map__rect1")
const rect2 = document.querySelector(".map__rect2")
const rect3 = document.querySelector(".map__rect3")
const rect4 = document.querySelector(".map__rect4")

lastExit.addEventListener("click", () => {
  span.textContent = "Закрыто, идите отсюда!"
})

function numHouse(num) {
  span.textContent = `Здание № ${num}`
}
