# A-Couple-Of-Minutes
使用 Node.js + Express + Bootstrap 將[女人迷](https://shop.womany.net/products/a-couple-minutes?utm_source=womany.net&utm_campaign=feed-shop-area&utm_medium=banner)出品的桌遊打造成網頁版（純屬個人休閒，未作商業利益，如果喜歡請購買官方桌遊支持正版）

## 畫面呈現
### 首頁
![首頁](https://raw.githubusercontent.com/martinchiu/a-couple-of-minutes/069cf8c1a03ae649eb1dec0227d749c9f2409f10/首頁.png)
### 遊戲說明
![遊戲說明](https://raw.githubusercontent.com/martinchiu/a-couple-of-minutes/069cf8c1a03ae649eb1dec0227d749c9f2409f10/遊戲說明.png)
### 選擇玩法
![選擇玩法](https://raw.githubusercontent.com/martinchiu/a-couple-of-minutes/069cf8c1a03ae649eb1dec0227d749c9f2409f10/選擇玩法.png)
### 遊戲畫面
![遊戲畫面](https://raw.githubusercontent.com/martinchiu/a-couple-of-minutes/069cf8c1a03ae649eb1dec0227d749c9f2409f10/遊戲畫面.png)
### 結束畫面
![結束畫面](https://raw.githubusercontent.com/martinchiu/a-couple-of-minutes/069cf8c1a03ae649eb1dec0227d749c9f2409f10/結束畫面.png)

## 介紹
1. 這是一款更了解對方的雙人遊戲，玩家在首頁可以了解[女人迷](https://shop.womany.net/products/a-couple-minutes?utm_source=womany.net&utm_campaign=feed-shop-area&utm_medium=banner)在設計這款遊戲的初心，以及熟悉遊戲規則。
2. 進入遊戲畫面前可以選擇遊玩方式，任君挑選三種方式。
3. 進入遊戲畫面時，兩人選好誰在左邊誰在右邊，按下頁面底部的抽排按鈕遊戲即開始，
4. 為玩家掀開第一張牌與兩位玩家的功能牌，在遊戲過程中隨時可以點擊功能牌檢視能力或使用，功能排在每次遊戲中只能使用一次。
5. 開始遊戲的瞬間也會隨機決定哪位玩家優先有指定權，指定每張牌誰先作答，指定權會輪流行使。
6. 遊戲進行到尾聲，抽完最後一張牌後，有想法交流與壓軸活動，深刻玩家這一次的遊戲體驗。

## 使用說明
1. 請先確認有安裝 node.js 與 npm
2. 打開終端機 (Terminal)，並複製 (Clone) 此專案至本機電腦
```
git clone https://github.com/martinchiu/a-couple-of-minutes.git
```
3. 進入專案資料夾
```
cd a-couple-of-minutes
```
4. 安裝所需套件
```
npm install
```
5. 使用Node.js執行伺服器
```
npm run start
```
6. 在瀏覽器網址列輸入 `http://localhost:3000/` 開始遊戲
7. 若欲暫停使用
```
ctrl + c ( mac : command + .)
```
## 開發工具
- Node.js 14.16.0
- Express 4.17.1
- Express-Handlebars 6.0.2
- Bootstrap 5.1.3
- Font-awesome 6.0.0
