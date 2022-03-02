const nextBtn = document.querySelector('.nextBtn')
const amount = document.querySelector('.number')
let number = Number(amount.innerHTML)
nextBtn.addEventListener('click', e => {
  number--
  amount.innerHTML = number
})