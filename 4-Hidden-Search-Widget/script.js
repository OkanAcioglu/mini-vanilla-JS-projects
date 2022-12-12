'use strict'

const searchButton = document.querySelector('.btn')
const input = document.querySelector('.input')
const search = document.querySelector('.search')

searchButton.addEventListener('click', () => {
  search.classList.toggle('active')
  // method will sets focus on element if it can be focused...
  input.focus()
})
