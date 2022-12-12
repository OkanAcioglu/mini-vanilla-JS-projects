'use strict'

const buttonPrev = document.querySelector('#prev')
const buttonNext = document.querySelector('#next')
const circles = document.querySelectorAll('.circle')
const progress = document.querySelector('.progress')

let progressState = 1

buttonNext.addEventListener('click', function (e) {
  progressState++
  if (progressState > circles.length) {
    progressState = circles.length
  }
  update()
})

buttonPrev.addEventListener('click', function (e) {
  progressState--
  if (progressState < 1) {
    progressState = 1
  }
  update()
})

const update = function () {
  circles.forEach((el, i) => {
    if (i < progressState) {
      el.classList.add('active')
    } else {
      el.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  // button disabled handeled with Boolean attribute setting true of false
  if (progressState === 1) {
    buttonPrev.disabled = true
  } else if (progressState === circles.length) {
    buttonNext.disabled = true
  } else {
    buttonPrev.disabled = false
    buttonNext.disabled = false
  }
}
