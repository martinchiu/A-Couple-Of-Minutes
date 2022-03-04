const nextBtn = document.querySelector('.nextBtn')
const amount = document.querySelector('.number')
let countNumber = Number(amount.innerHTML)
let initNumber = 0
const cards = document.querySelectorAll('.card')
nextBtn.addEventListener('click', e => {
  if (initNumber > 0) {
    // 剩餘牌數減一
    countNumber--
    amount.innerHTML = countNumber
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
    countNumber--
    amount.innerHTML = countNumber
    //抽牌
    cards[initNumber].classList.add('disappear')
    initNumber++
  }
  
  if (countNumber === 0) {
    const div = nextBtn.parentElement
    console.log(div)
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