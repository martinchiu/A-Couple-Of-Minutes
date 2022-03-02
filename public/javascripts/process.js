const nextBtn = document.querySelector('.nextBtn')
const amount = document.querySelector('.number')
let number = Number(amount.innerHTML)
nextBtn.addEventListener('click', e => {
  // 剩餘牌數減一
  number--
  amount.innerHTML = number
  // 抽牌改成下一張牌
  nextBtn.innerHTML = `
  <i class="fas fa-arrow-circle-right icon"></i>
  <p>下一張牌</p>
  `
  
})