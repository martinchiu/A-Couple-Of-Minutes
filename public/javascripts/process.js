const nextBtn = document.querySelector('.nextBtn')
const amount = document.querySelector('.number')
let conutNumber = Number(amount.innerHTML)
let initNumber = 0
const cards = document.querySelectorAll('.card')
nextBtn.addEventListener('click', e => {
  if (initNumber > 0) {
    // 剩餘牌數減一
    conutNumber--
    amount.innerHTML = conutNumber
    // 換下一張牌
    cards[initNumber].classList.add('disappear')
    initNumber++
  } else {
    // 抽牌改成下一張牌
    nextBtn.innerHTML = `
  <i class="fas fa-arrow-circle-right icon"></i>
  <p>下一張牌</p>
  `
    // 剩餘牌數減一
    conutNumber--
    amount.innerHTML = conutNumber
    //抽牌
    cards[initNumber].classList.add('disappear')
    initNumber++
  }
})