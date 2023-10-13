const imagesUrl = "http://194.67.93.117:80/images"

// Gallery
const galleryContent = document.querySelector(".gallery__content")
const loader = document.querySelector(".loader")
const toast = document.querySelector(".toast")
const toastHeader = document.querySelector(".toast__header")
const toastName = document.querySelector(".toast__name")
const toastMessage = document.querySelector(".toast__message")

function getImages(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        galleryContent.textContent =
          "Изображения не найдены! Попробуйте обновить)))"
        loader.style.display = "none"
        return
      }
      for (obj of data) {
        if (obj.status) {
          throw obj
        }

        const div = document.createElement("div")
        const img = document.createElement("img")

        const url = obj.url
        const alt = obj.alt
        const description = obj.description

        img.src = url
        img.alt = alt

        galleryContent.appendChild(div)
        div.innerHTML = `<p>${description}</p>`
        div.appendChild(img)
      }

      loader.style.display = "none"
    })
    .catch((error) => {
      if (error.status) {
        toastName.textContent = error.status
        toastMessage.textContent = error.message
      } else {
        toastName.textContent = "Bad error: "
        toastMessage.textContent = error
      }

      toast.style.bottom = "0"
      loader.style.display = "none"
    })
}

getImages(imagesUrl)

const closeToast = document.querySelector(".close-toast")
closeToast.addEventListener("click", () => {
  toast.style.bottom = "-300px"
})

const refBtn = document.querySelector(".refresh-button")
refBtn.addEventListener("click", () => {
  galleryContent.innerHTML = ""
  toast.style.bottom = "-200px"
  loader.style.display = "block"
  getImages(imagesUrl)
})

// Temperature
const temperatureUrl = "http://194.67.93.117:80/temp"

const temperature = document.querySelector(".temperature")
const form = document.querySelector(".form")
const subBtn = document.querySelector(".sub-btn")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const roomNumber = document.getElementById("room-number")
  const temp = document.getElementById("temp")
  const data = {
    class: roomNumber.value,
    temp: parseFloat(temp.value),
  }
  const fetchParameters = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }

  // Блокировка кнопки отправки во время запроса
  subBtn.setAttribute("disabled", true)

  fetch(temperatureUrl, fetchParameters)
    .then((response) => response.json())
    .then((responseData) => {
      if (responseData.status !== "ok") {
        throw responseData
      }

      // При успешной обработке данных на сервере
      toastName.textContent = responseData.status
      toastMessage.textContent = responseData.message
      toast.style.backgroundColor = "#23ca25"
      toastHeader.style.backgroundColor = "#0a4e0b"
      toast.style.bottom = "0"

      // Очистка формы
      roomNumber.value = ""
      temp.value = ""
    })
    .catch((error) => {
      // При ошибке
      toastName.textContent = error.status
      toastMessage.textContent = error.message
      toast.style.bottom = "0"
      toast.style.backgroundColor = "#831111"
      toastHeader.style.backgroundColor = "#4e0808"
    })
    .finally(() => {
      // Разблокировка кнопки отправки после завершения запроса
      subBtn.removeAttribute("disabled")
    })
})
