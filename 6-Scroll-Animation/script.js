'use strict'
const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

// if we dont initialize there will be no box at the beginning
checkBoxes()

function checkBoxes() {
  // console.log(window)
  // console.log(window.innerHeight)
  // console.log(window.innerWidth)
  const triggerBottom = (window.innerHeight / 5) * 4

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}

// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight
// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth
