const nextBtn = document.querySelector('.nextBtn')
const amount = document.querySelector('.number')
let countNumber = Number(amount.innerHTML)
let initNumber = 0
const cards = document.querySelectorAll('.card')
const crown = document.querySelectorAll('.crownIcon')
const fnCard = document.querySelectorAll('.fn-card-with-pseudo')
const useBtn = document.querySelectorAll('.use')
nextBtn.addEventListener('click', e => {
  // 輪流決定誰抽牌
  crown[0].classList.toggle('invisible')
  crown[1].classList.toggle('invisible')
  if (initNumber === 0) {
    // 抽牌改成下一張牌
    nextBtn.innerHTML = `
      <i class="fas fa-arrow-circle-right icon"></i>
      <p>下一張牌</p>
    `
    // 隨機決定誰先抽牌
    Math.random() > 0.5 ? crown[0].classList.toggle('invisible') : crown[1].classList.toggle('invisible')
    // 
    fnCard.forEach(element => {
      element.classList.remove('fn-card-with-pseudo')
      element.classList.add('fn-card')
    })
  }
  // 剩餘牌數減一
  countNumber--
  amount.innerHTML = countNumber
  //抽牌
  cards[initNumber].classList.add('disappear')
  initNumber++
  // 抽光牌庫
  if (countNumber === 0) {
    const div = nextBtn.parentElement
    div.removeChild(nextBtn)
    let newDiv = document.createElement('div')
    newDiv.innerHTML = `
    <button type="button" class="BTN" data-bs-toggle="modal" data-bs-target="#endModal">
      <i class="fas fa-american-sign-language-interpreting icon"></i>
      <p>壓軸的交流與行動</p>
    </button>
    `
    div.appendChild(newDiv)
  }
})
// 使用功能卡
useBtn.forEach((e, i) => {
  e.addEventListener('click', e => {
    if (e.target.parentElement.classList.contains('Last')) {
      if (countNumber > 3) {
        countNumber = 3
        amount.innerHTML = countNumber
      }
    }
    fnCard[i].classList.add('used')
    e.target.remove()
  })
})