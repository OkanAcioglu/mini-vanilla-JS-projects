'use strict'

const labels = document.querySelectorAll('.form-control label')

labels.forEach((label) => {
  // Each letter of email and password words written in span one by one in the label
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join('')
})
