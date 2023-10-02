function AnimationTarget(el, animationProps) {
  this.el = el
  this.animationProps = animationProps

  this.animate = function () {
    anime({
      targets: this.el,
      ...this.animationProps,
      complete: function () {
        console.log("Анимация завершена на элементе:", this.el)
      }.bind(this),
    })
  }
}

const button = document.getElementById("button")

button.addEventListener("click", () => {
  const newElement = document.createElement("div")
  newElement.classList.add("anime-element")
  document.getElementById("container").appendChild(newElement)

  const min = 100
  const max = 1000
  const max2 = 300
  const randomInteger = Math.floor(Math.random() * (max - min + 1)) + min
  const randomInteger2 = Math.floor(Math.random() * (max2 - min + 1)) + min

  const animationProps = {
    translateX: {
      value: randomInteger,
      duration: 2000,
    },
    translateY: {
      value: randomInteger2,
      duration: 2000,
    },
    rotate: {
      value: randomInteger,
      duration: 2000,
      easing: "easeInOutSine",
    },
    scale: {
      value: 1.5,
      duration: 1600,
      delay: 1000,
      easing: "easeInOutQuart",
    },
  }

  const animatedObject = new AnimationTarget(newElement, animationProps)
  animatedObject.animate()
})
