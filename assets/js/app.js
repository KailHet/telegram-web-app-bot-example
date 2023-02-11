let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";
tg.MainButton.setText(`Корзина`);

let item = "";

let count = 0; // count of items in cart

let counters = document.querySelectorAll(".counter")
let bucket = document.getElementById("bucket")


function checkCounter(id) {
  for (let i = 0; i < counters.length; i++) {
    if (counters[id].textContent == "0") {
      counters[i].style.display = "none";
    }
  }
}

function btnRem(id) {
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
    counters[id].textContent = Number(counters[id].textContent) + 1;
    counters[id].style.display = "inline-block";
    item = "1"
    tg.MainButton.show()
    count += 1;
}

function editOrder() {
  bucket.style.display = "none"
}

Telegram.WebApp.onEvent("mainButtonClicked", function () {
  bucket.style.display = "grid"
  // tg.sendData(item)
})



// let item_name = document.getElementById("item-name")
// item_name.innerText = `asd`
// let p = document.createElement("p")

// p.innerText = `${tg.initDataUnsafe.first_name}
// ${tg.initDataUnsafe.last_name}`

// usercard.appendChild(p)