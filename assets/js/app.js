let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
tg.MainButton.setText(`Корзина`);

let items = [];

let count = 0; // count of items in cart

let counters = document.querySelectorAll(".counter")
let bucket = document.getElementById("bucket")


function checkCounter(id) {
  for (let i = 0; i < counters.length; i++) {
    if (counters[id].textContent == "0") {
      // counters[id].style.display = "none";
      counters[id].style.animation = "counterHideAnimation .2s forwards";
    }
  }
}

function openBucket() {
  let bucketItems = document.getElementById("bucketList")
  bucketItems.innerHTML = `
  <div class="bitem">
    <img src="assets/images/1.png" alt="" class="bimg">
    <h2 class="counter" id="counter5">0</h2>
    <div class="item-name">item name</div>
    <div class="item-price">499 ₽</div>
    <button class="btn-rem" id="btnm5" onclick="btnRem(id.replace('btnm', '') - 1)">-</button>
    <button class="btn-add" id="btnp5" onclick="btnAdd(id.replace('btnp', '') - 1)">+</button>
  </div>
  `
  bucket.style.animation = "bucketShowAnimation .3s forwards"
  bucket.style.display = "block";
  let sum = document.querySelectorAll("#item-price")
  tg.MainButton.setText(`Оплатить ${sum}`)
}

function btnRem(id) {
  items.splice(items.indexOf(id)-1, 1);
  
  if (counters[id].textContent !== `0`) {
    count -= 1;
    counters[id].textContent = Number(counters[id].textContent) - 1;
  }

  if (count == 0) {
    tg.MainButton.hide()
  }

  checkCounter(id);
}

function btnAdd(id) {
  counters[id].style.animation = "counterShowAnimation .2s forwards";
  counters[id].textContent = Number(counters[id].textContent) + 1;
  counters[id].style.display = "inline-block";
  tg.MainButton.show()
  count += 1;
  console.log(items.length)

  if (items.includes(`${id} - `)) items.splice(items.indexOf(id)-1, 1)
  for (let i = 0; i <= items.length; i++) {
    console.log(items)
    if (items.length !== 0 && items[i].id == id) {
      // items[i]
      items[i].count += 1;
    } else if (i == items.length) {
      items.push({
        id: id,
        name: `${tg.initDataUnsafe.first_name} ${tg.initDataUnsafe.last_name}`,
        price: Number(tg.initDataUnsafe.price),
        count: 1
      })
    }
  }

  // items.push({
  //   id: id,
  //   name: `${tg.initDataUnsafe.first_name} ${tg.initDataUnsafe.last_name}`,
  //   price: Number(tg.initDataUnsafe.price),
  //   count: counters[id].textContent
  // })



  // if (counters[id].textContent == `1`) {
  //   let bucketItems = document.getElementById("bucketList")
  //   let text = []
  //   for (let i = 0; i < items.length; i++) {
  //     text.push(`${items[i].name} - ${items[i].count}`)
  //   }
  //   bucketItems.innerText = text.join(`\n`)
  //   bucket.style.animation = "bucketShowAnimation .3s forwards"
  //   bucket.style.display = "block";
  // }
}

function editOrder() {
  bucket.style.animation = "bucketHideAnimation .3s forwards"
  // bucket.style.display = "none";
}

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  openBucket()
  // tg.sendData(item)
})



// let item_name = document.getElementById("item-name")
// item_name.innerText = `asd`
// let p = document.createElement("p")

// p.innerText = `${tg.initDataUnsafe.first_name}
// ${tg.initDataUnsafe.last_name}`

// usercard.appendChild(p)