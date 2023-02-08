let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
tg.MainButton.setText(`Корзина`);

let item = "";

// Add item to cart btns
let btnp1 = document.getElementById("btn12")
let btnp2 = document.getElementById("btn22")
let btnp3 = document.getElementById("btn32")
let btnp4 = document.getElementById("btn42")
let btnp5 = document.getElementById("btn52")
let btnp6 = document.getElementById("btn62")

// remove item from cart btns
let btnm1 = document.getElementById("btn11")
let btnm2 = document.getElementById("btn21")
let btnm3 = document.getElementById("btn31")
let btnm4 = document.getElementById("btn41")
let btnm5 = document.getElementById("btn51")
let btnm6 = document.getElementById("btn61")

// counters
let counter1 = document.getElementById("counter1")
let counter2 = document.getElementById("counter2")
let counter3 = document.getElementById("counter3")
let counter4 = document.getElementById("counter4")
let counter5 = document.getElementById("counter5")
let counter6 = document.getElementById("counter6")

// let btn 

let btns = document.querySelectorAll(".btn");

// add item to cart function
// for (let i = 0; i < btns; i++) {
//   console.log(btns[i]);
  
//   btns[i].addEventListener("click", function(){
//     let regexp = /[a-z]/gi
//     let counter = btns[i].replace(regexp, "")
//     console.log(counter)
//     console.log(btns[i])
//     if (btns[i].endsWith("2")) {
//       counter.textContent = Number(counter[i].textContent) + 1;
//     } else {
//       counter[i].textContent = Number(counter[i].textContent) - 1;
//     }
//     // tg.MainButton.setText(btnText)
//     item = "1"
//     tg.MainButton.show()
//   })
// }

btnp1.addEventListener("click", function(){
    counter1.textContent = Number(counter1.textContent) + 1;
    tg.MainButton.setText(btnText)
    item = "1"
    tg.MainButton.show()
})
btnp2.addEventListener("click", function(){
  counter2.textContent = Number(counter2.textContent) + 1;
  tg.MainButton.setText(btnText)
  item = "1"
  tg.MainButton.show()
})
btnp3.addEventListener("click", function(){
  counter3.textContent = Number(counter3.textContent) + 1;
  tg.MainButton.setText(btnText)
  item = "1"
  tg.MainButton.show()
})
btnp4.addEventListener("click", function(){
  counter4.textContent = Number(counter4.textContent) + 1;
  tg.MainButton.setText(btnText)
  item = "1"
  tg.MainButton.show()
})
btnp5.addEventListener("click", function(){
  counter5.textContent = Number(counter5.textContent) + 1;
  tg.MainButton.setText(btnText)
  item = "1"
  tg.MainButton.show()
})
btnp6.addEventListener("click", function(){
  counter6.textContent = Number(counter6.textContent) + 1;
  tg.MainButton.setText(btnText)
  item = "1"
  tg.MainButton.show()
})

// remove item from cart function
btnm1.addEventListener("click", function(){
  if (counter1.textContent !== `0`) counter1.textContent = Number(counter1.textContent) - 1;
  tg.MainButton.setText(btnText)
  item = "1"
  tg.MainButton.show()
  console.log(btns)

})
btnm2.addEventListener("click", function(){
  if (counter2.textContent !== `0`) counter2.textContent = Number(counter2.textContent) - 1;
  tg.MainButton.setText(btnText)
  item = "1"
  tg.MainButton.show()
})
btnm3.addEventListener("click", function(){
  if (counter3.textContent !== `0`) counter3.textContent = Number(counter3.textContent) - 1;
  tg.MainButton.setText(btnText)
  item = "1"
  tg.MainButton.show()
})
btnm4.addEventListener("click", function(){
  if (counter4.textContent !== `0`) counter4.textContent = Number(counter4.textContent) - 1;
  tg.MainButton.setText(btnText)
  item = "1"
  tg.MainButton.show()
})
btnm5.addEventListener("click", function(){
  if (counter5.textContent !== `0`) counter5.textContent = Number(counter5.textContent) - 1;
  tg.MainButton.setText(btnText)
  item = "1"
  tg.MainButton.show()
})
btnm6.addEventListener("click", function(){
  if (counter6.textContent !== `0`) counter6.textContent = Number(counter6.textContent) - 1;
  tg.MainButton.setText(btnText)
  item = "1"
  tg.MainButton.show()
})


Telegram.WebApp.onEvent("mainButtonClicked", function() {
  tg.sendData(item)
})

let item_name = document.getElementById("item-name")
item_name.innerText = `asd`
// let p = document.createElement("p")

// p.innerText = `${tg.initDataUnsafe.first_name}
// ${tg.initDataUnsafe.last_name}`

usercard.appendChild(p)