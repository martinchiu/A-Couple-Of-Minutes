const functionCard = [
  { name: 'Pass', function: '暫時想不出回答，再給我一點時間，遊戲結束前給出答案', icon: '<i class="fa-solid fa-feather"></i>'},
  { name: 'Kiss', function: '使用親吻當作這題的回答', icon: '<i class="fa-regular fa-heart"></i>' },
  { name: 'Hug', function: '使用擁抱當作這題的回答', icon: '<i class="fa-solid fa-face-grin-hearts"></i>' },
  {
    name: '？？？', function: '我想要聽更多，請再詳細地說明', icon: '<i class="fa-solid fa-circle-question"></i>' },
  { name: 'Last ３', function: '預告將在三個問題之後，結束這次的遊戲', icon: '<i class="fa-regular fa-3"></i>' }
]
// num 為設定總共要抽幾張功能卡
const draw = function(num) {
  const result = []
  for(let i = 0; i < num; i++) {
    const index = Math.floor(Math.random() * functionCard.length)
    result.push(functionCard[index])
    functionCard.splice(index, 1)
  }
  functionCard.push(...result)
  return result
}

module.exports = draw
