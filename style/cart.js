let $ = document;
let tBody = $.querySelector(".tbody");
let cartTotalPrice = $.querySelector(".cart__total__price");
let totalPriceAll = $.querySelector(".total_price__all");
let tbodyResponsive = $.querySelector(".tbody__responsive");
let shopLinkMenu = $.querySelector(".shop-link__menu");
let shopLinkMenuLi = $.querySelector(".shop-link__menu__li");
let shopLinkText = $.querySelector(".shop-link__text");
let shopLinkMenuEmpty = $.querySelector(".shop-link__menu__empty");
let shopLinkMenuFooter = $.querySelector(".shop-link__menu__footer");
let menuFooterWrapperLink = $.querySelector(".menu__footer__wrapper__link");
let footerPrice = $.querySelector(".footer__price");
let cart = $.querySelector(".cart");
let cartEmpty = $.querySelector(".cart__empty");

function setLocalStorageData(listBasketUser) {
  localStorage.setItem("listBasket", JSON.stringify(userBasket));
}

function getLocalStorageData() {
  let localStorageData = JSON.parse(localStorage.getItem("listBasket"));
  if (localStorageData) {
    userBasket = localStorageData;
  } else {
    userBasket = [];
  }
  if (userBasket.length === 0) {
    cart.style.display = "none";
    cartEmpty.style.display = 'flex';
  } else {
    addUserBasket(userBasket);
  }

  calcTotalBasket(userBasket);
}

function addUserBasket(userBasket) {
  cartEmpty.style.display = "none";
  tBody.innerHTML = "";
  tbodyResponsive.innerHTML = "";

  userBasket.forEach(function (item) {
    tBody.insertAdjacentHTML(
      "beforeend",
      `<tr class="tr">
    <td>
      <div class="cart__wrap">
        <a class="cart__img" href="">
          <img class="cart__image" src="${item.src}" alt="">
        </a>
      </div>
    </td>
    <td>
      <div class="cart__info">
        <a href="" class="cart__title">
          ${item.title}
        </a>
        <p class="cart__caption">Free Size</p>
      </div>
    </td>
    <td>
      <span class="cart__price">
       ${item.price} تومان
      </span>
    </td>
    <td>
      <div class="cart__count">
        <input type="button" class="cart__count__mines" onclick="decrease(event,this,${item.id}) " value="-">
        <input type="text" class="cart__count__input" value='${item.count}' onchange="updateTotal(${item.id}, value)">
        <input type="button" class="cart__count__plus" onclick="increase(event,this,${item.id})" value="+"> 
      </div>
    </td>
    
    <td>
      <span class="cart__price__total">
       ${item.count} * ${item.price} تومان
      </span>
    </td>
    <td>
      <a onclick="removeItem(${item.id}, event)"  href="">
        <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 32 32" id="delete"><path d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"></path></svg>                  </a>
    </td>
 
  </tr>`
    );

    tbodyResponsive.insertAdjacentHTML(
      "beforeend",
      ` <tr class="tr__responsive">
  <td>
    <div class="cart__wrap">
      <a class="cart__img" href="">
        <img class="cart__image" src="${item.src}" alt="">
      </a>
    </div>
  </td>
</tr>
<tr>
  <td class='table__responsive__title'>محصول</td>
  <td>${item.title} Free Size</td>
</tr>
<tr>
  <td class='table__responsive__title'>قیمت </td>
  <td> ${item.price} تومان</td>
</tr>
<tr>
  <td class='table__responsive__title'> تعداد </td>
  <td>
    <div class="cart__count">
      <input type="button" class="cart__count__mines" value="-" onclick="decreaseRes(event,this,${item.id})">
      <input type="text" class="cart__count__input" value='${item.count}' onchange="updateTotal(${item.id}, value)">
      <input type="button" class="cart__count__plus" value="+" onclick="increaseRes(event,this,${item.id})"> 
    </div>
  </td>
  <tr>
    <td class='table__responsive__title'>قیمت جمع</td>
    <td> ${item.count} * ${item.price} تومان</td>
  </tr>
</tr>
<tr>
  <td class='table__responsive__title'>حذف</td>
  <td>
    <a onclick="removeItem(${item.id}, event)" href="">
      <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 32 32" id="delete"><path d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"></path></svg>
    </a>
  </td>
</tr>`
    );
  });
}

function removeItem(itemId, e) {
  e.preventDefault();
  userBasket.forEach(function (item) {
    if (item.id === itemId) {
      item.count = "1";
    }
  });
  userBasket = userBasket.filter(function (item) {
    return item.id !== itemId;
  });

  setLocalStorageData(userBasket);
  if (userBasket.length === 0) {
    cart.style.display = "none";
    cartEmpty.style.display = 'flex';
  } else {
    addUserBasket(userBasket);
  }

  calcTotalBasket(userBasket);
}

function decreaseRes(e, th, itemId) {
  let input = th.nextElementSibling;

  let value = Number(input.value);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
    let findItem = userBasket.find(function (item) {
      return item.id === itemId;
    });
    setLocalStorageData(userBasket);
    console.log(userBasket);
    findItem.count = input.value;
    updateTotal(findItem.id, findItem.count);
    th.parentElement.parentElement.parentElement.nextElementSibling.children[1].innerHTML = `    <td> ${findItem.count} * ${findItem.price} تومان</td>
    `;
    tBody.children[0].children[3].children[0].children[1].value = `${findItem.count}`;
    tBody.children[0].children[4].innerHTML = `<span class="cart__price__total">
    ${findItem.count} * ${findItem.price} تومان
    </span>`;
  }
}
function decrease(e, th, itemId) {
  let input = th.nextElementSibling;

  let value = Number(input.value);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
    let findItem = userBasket.find(function (item) {
      return item.id === itemId;
    });
    setLocalStorageData(userBasket);
    findItem.count = input.value;
    updateTotal(findItem.id, findItem.count);
    th.parentElement.parentElement.nextElementSibling.innerHTML = ` <span class="cart__price__total"> ${findItem.count} * ${findItem.price}
    تومان
  </span>`;
    tbodyResponsive.children[3].children[1].children[0].children[1].value = `${findItem.count}`;
    tbodyResponsive.children[3].nextElementSibling.children[1].innerHTML = `<td> ${findItem.count} * ${findItem.price} تومان</td>`;
  }
}

function increaseRes(e, th, itemId) {
  let input = th.previousElementSibling;
  let value = Number(input.value);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  let findItem = userBasket.find(function (item) {
    return item.id === itemId;
  });
  setLocalStorageData(userBasket);
  findItem.count = input.value;
  updateTotal(findItem.id, findItem.count);
  th.parentElement.parentElement.parentElement.nextElementSibling.children[1].innerHTML = `    <td> ${findItem.count} * ${findItem.price} تومان</td>
  `;
  tBody.children[0].children[3].children[0].children[1].value = `${findItem.count}`;
  tBody.children[0].children[4].innerHTML = `<span class="cart__price__total">
 ${findItem.count} * ${findItem.price} تومان
 </span>`;
}

function increase(e, th, itemId) {
  let input = th.previousElementSibling;
  let value = Number(input.value);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  let findItem = userBasket.find(function (item) {
    return item.id === itemId;
  });
  setLocalStorageData(userBasket);
  findItem.count = input.value;
  updateTotal(findItem.id, findItem.count);
  th.parentElement.parentElement.nextElementSibling.innerHTML = ` <span class="cart__price__total"> ${findItem.count} * ${findItem.price}
    تومان
  </span>`;
  tbodyResponsive.children[3].children[1].children[0].children[1].value = `${findItem.count}`;
  tbodyResponsive.children[3].nextElementSibling.children[1].innerHTML = `<td> ${findItem.count} * ${findItem.price} تومان</td>`;
}

function updateTotal(itemId, itemCount) {
  userBasket.forEach(function (item) {
    if (item.id === itemId) {
      item.count = itemCount;
    }
  });
  setLocalStorageData(userBasket);
  calcTotalBasket(userBasket);
}

function calcTotalBasket(userBasket) {
  let totalPrice = 0;
  let total = 0;

  userBasket.forEach(function (item) {
    total += Number(item.count);
    totalPrice += item.count * item.price;
  });
  cartTotalPrice.innerHTML = totalPrice + " " + "تومان";
  totalPriceAll.innerHTML = totalPrice + " " + "تومان";

  shopLinkText.innerHTML = total;
}
window.addEventListener("load", getLocalStorageData);
