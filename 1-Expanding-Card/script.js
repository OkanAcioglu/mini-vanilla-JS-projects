'use strict'

const panels = document.querySelectorAll('.panel')
console.log(panels)

const removeActiveClasses = function () {
  panels.forEach((panel) => panel.classList.remove('active'))
}

panels.forEach(function (panel) {
  panel.addEventListener('click', function () {
    // remove all the active classes after click happened
    removeActiveClasses()
    // adding active class to the panel that clicked
    panel.classList.add('active')
  })
})
