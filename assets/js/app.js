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

  if (items.includes(`${id} - `)) items.splice(items.indexOf(id)-1, 1)
  items.push({
    id: id,
    name: `${tg.initDataUnsafe.first_name} ${tg.initDataUnsafe.last_name}`,
    price: Number(tg.initDataUnsafe.price),
    count: counters[id].textContent
  })


  // if (counters[id].textContent == `1`) {
  //   let bucketItems = document.getElementById("bucketList")
  //   bucketItems.innerText = items.join(`\n`)
  //   bucket.style.animation = "bucketShowAnimation .3s forwards"
  //   bucket.style.display = "block";
  // }
}

function editOrder() {
  bucket.style.animation = "bucketHideAnimation .3s forwards"
  // bucket.style.display = "none";
}

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  let bucketItems = document.getElementById("bucketList")
  bucketItems.innerText = items.join(`\n`)
  bucket.style.animation = "bucketShowAnimation .3s forwards"
  bucket.style.display = "block";
  // tg.sendData(item)
})



// let item_name = document.getElementById("item-name")
// item_name.innerText = `asd`
// let p = document.createElement("p")

// p.innerText = `${tg.initDataUnsafe.first_name}
// ${tg.initDataUnsafe.last_name}`

// usercard.appendChild(p)