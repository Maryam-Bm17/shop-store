let $ = document;
let listTitleLink = $.querySelectorAll('.list__title__link');
let content = $.querySelectorAll('.content');
let productWrapper = $.querySelector('.product__wrapper');
const shopLinkMenuLi = $.querySelector(".shop-link__menu__li");
const shopLinkMenu = $.querySelector(".shop-link__menu");
const shopLinkMenuEmpty = $.querySelector(".shop-link__menu__empty");
const shopLinkMenuFooter = $.querySelector(".shop-link__menu__footer");
const menuFooterWrapperLink = $.querySelector(".menu__footer__wrapper__link");
const footerPrice = $.querySelector(".footer__price");
let shopLinkText = $.querySelector(".shop-link__text");
let reviewText = $.getElementById("review__text");
let reviewName = $.getElementById("review__name");
let reviewEmail = $.getElementById("review__email");
let reviewControl = $.querySelector(".review__control ");
let formReview = $.querySelector('.form__review');
let reviewContainer = $.querySelector('.review');
let reviewContentWrap = $.querySelector('.review__content__wrap');
let swiperWrapper = $.querySelector('.swiper-wrapper');
let pagesWrapperList = $.querySelector('.pages__wrapper__list');
let listTitleIdea =$.getElementById('list__title__idea');


let search=location.search;
let localSearch=new URLSearchParams(search);
let itemIdParam=localSearch.get('id');



let userComment = [];



formReview.addEventListener('submit', function(e){
e.preventDefault();
let textInput = reviewText.value;
let nameInput = reviewName.value;
let emailInput = reviewEmail.value;

let newComment = {
  id: userComment.length + 1,
  name: nameInput,
  email: emailInput,
  text: textInput,
}

 reviewText.innerHTML="";
 reviewName.value="";
reviewEmail.value="";

userComment.push(newComment);
 getLocalStorageUser();


 let findUser = users.some(function(user){
  return user.email == emailInput;
 });

if(findUser){
  setLocalStorageComment(userComment);
  addCommentToDom(userComment);
}
else{
  alert('ابتدا ثبت نام کنید');
}

reviewText.focus();
reviewName.focus();
reviewEmail.focus();
});

function setLocalStorageComment(userComment){
  localStorage.setItem("listComment", JSON.stringify(userComment));
}


function getLocalStorageComment() {
  let localStorageData = JSON.parse(localStorage.getItem("listComment"));
  if (localStorageData) {
    userComment = localStorageData;
    addCommentToDom(userComment);
  } else {
    userComment = [];
  }
 
}



function addCommentToDom(userComment){
  listTitleIdea.innerHTML= `نظرات (${userComment.length}) `;
  reviewContentWrap.style.display="none";
  productItem.forEach(function(item){
    if(item.id == itemIdParam){
    
      reviewContainer.insertAdjacentHTML('beforeend',`<div class="comments">
      <div class="row">
        <div class="col-lg-2">
          <div class="comments__personal">
         
            <svg class="personal__pro" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" id="person"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"></path></svg>
          
            <span class="prsonal__name">${userComment[0].name}</span>
          </div>
        </div>
        <div class="clo-lg-10 alignItems">
          <div class="comments__text">
            <p class="text__inner">${userComment[0].text}</p>
          </div>
        </div>
      </div>
    </div>`)

    }
  });
  
}






listTitleLink.forEach(function(li){
li.addEventListener('click', function(e){
e.preventDefault();
document.querySelector('.list__title__link--active').classList.remove('list__title__link--active');
this.classList.add('list__title__link--active');
 let dataId= this.getAttribute( 'data-content-id' );
 document.querySelector('.show').classList.remove('show');
 document.querySelector(dataId).classList.add('show');

});
});
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
    shopLinkMenuLi.innerHTML = "";
    shopLinkMenuEmpty.style.display = "flex";
    menuFooterWrapperLink.style.display = "none";
    shopLinkMenuFooter.style.display = "none";
  } else {
    addBasket(userBasket);
  }

  calcTotalBasket(userBasket);
}

function calcTotalBasket(userBasket) {
  let totalPrice = 0;
  let total = 0;

  userBasket.forEach(function (item) {
    total += Number(item.count);
    totalPrice += item.count * item.price;
  });
  footerPrice.innerHTML = totalPrice;
  shopLinkText.innerHTML = total;
}


function addSwiper(proId,productItem){
  let findItem = productItem.find(function(item){
      return item.id == proId;
  });
  let itemCategory = findItem.category;


  const unique = productItem.map(function (item) {
    return [item.src, item];
  });
  let mapUnique = new Map(unique);
  console.log(mapUnique);
  let mapData = [...mapUnique.values()];
  mapData.forEach(function(item){
if(item.category === itemCategory){
  swiperWrapper.insertAdjacentHTML('beforeend',`     <div class="swiper-slide">
  <div class="product__item">
    <div class="product__wrapper__img">
      <a href="#">
        <img
          class="product__img"
          src="${item.src}"
          alt=""
        />
      </a>
      <div class="product__action__box">
        <ul class="product__wrapper__links">
          <li class="product__link">
            <a href="#">
              <svg
                width="17px"
                height="17px"
                fill="#fff"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <title>heart-glyph</title>
                <path
                  d="M362.67,21.33A149,149,0,0,0,256,66.19,149,149,0,0,0,149.33,21.33C67,21.33,0,88.32,0,170.67a148.45,148.45,0,0,0,43.08,104.9L240.51,484a21.33,21.33,0,0,0,31,0L468.75,275.74A148.45,148.45,0,0,0,512,170.67C512,88.32,445,21.33,362.67,21.33Z"
                />
              </svg>
            </a>
          </li>
          <li class="product__link">
            <a href="#"
              ><svg
                width="17px"
                height="17px"
                fill="#fff"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <title>zoom-in-glyph</title>
                <path
                  d="M505.75,475.58,378.42,348.25a212.3,212.3,0,0,0,48.25-134.92C426.67,95.7,331,0,213.33,0S0,95.7,0,213.33,95.7,426.67,213.33,426.67a212.3,212.3,0,0,0,134.92-48.25L475.58,505.75a21.33,21.33,0,1,0,30.17-30.17ZM277.33,234.67H234.67v42.67a21.33,21.33,0,1,1-42.67,0V234.67H149.33a21.33,21.33,0,0,1,0-42.67H192V149.33a21.33,21.33,0,0,1,42.67,0V192h42.67a21.33,21.33,0,1,1,0,42.67Z"
                /></svg
            ></a>
          </li>
          <li class="product__link">
            <a href="#">
              <svg
                width="17px"
                height="17px"
                fill="#fff"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <defs><style></style></defs>
                <title>cart-glyph</title>
                <path
                  class="cls-1"
                  d="M142.07,512H369.93a77,77,0,0,0,75.31-61.76l36.29-181.53H30.47L66.76,450.23A77,77,0,0,0,142.07,512ZM307.2,345.54a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm288-192.07H427.7L287.18,12.9a44.12,44.12,0,0,0-62.36,0L84.3,153.47H44.8a44.82,44.82,0,0,0,0,89.63H467.2a44.82,44.82,0,0,0,0-89.63Zm-346.7,0L242.92,31a18.52,18.52,0,0,1,26.16,0L391.5,153.47Z"
                /></svg
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <div class="product__info">
      <h5 class="product__title">
        <a href="#">${item.title}</a>
      </h5>
      <div class="product__price">
        <h3 class="price">تومان&nbsp;<span>${item.price}</span></h3>
      </div>
      <div class="product__rating">
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            id="star"
          >
            <path
              fill="none"
              stroke="#EFB900"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z"
              transform="translate(2.5 3)"
            ></path></svg
        ></span>
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            id="star"
          >
            <path
              fill="none"
              stroke="#EFB900"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z"
              transform="translate(2.5 3)"
            ></path></svg
        ></span>
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            id="star"
          >
            <path
              fill="none"
              stroke="#EFB900"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z"
              transform="translate(2.5 3)"
            ></path></svg
        ></span>
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            id="star"
          >
            <path
              fill="none"
              stroke="#EFB900"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z"
              transform="translate(2.5 3)"
            ></path></svg
        ></span>
        <span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            id="star"
          >
            <path
              fill="none"
              stroke="#EFB900"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z"
              transform="translate(2.5 3)"
            ></path></svg
        ></span>
      </div>
      <div class="product__color__switch">
      ${item.colors.map((color)=> ` <span class="color__span" data-color="${color}" style = "background-color:${color};"></span>`
      ).join('')}
    
        </div>
    </div>
  </div>
</div>`)
}
  });

}

function getLocalStorage() {
    let localStorageData = JSON.parse(localStorage.getItem("arrayItem"));
    if (localStorageData) {
      productItem = localStorageData;

    } else {
      productItem = [];
    }
    console.log(productItem);

 
   
   let productFind = productItem.find(function(item){
     return item.id == itemIdParam;
  });
  pagesWrapperList.insertAdjacentHTML('beforeend',` <li class="pages__list">
  <a href="index.html">
    خانه
    <svg
      height="12px"
      viewBox="0 0 56 56"
      width="12px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m35.8047 47.7226c.3984.3985.914.6329 1.5234.6329 1.2188 0 2.1328-.9141 2.1328-2.1329 0-.5859-.2343-1.125-.6094-1.5234l-17.0624-16.6875 17.0624-16.6875c.3751-.3984.6094-.9609.6094-1.5235 0-1.2187-.914-2.1562-2.1328-2.1562-.6094 0-1.125.2344-1.5234.6328l-18.5625 18.1641c-.4453.375-.7031.9609-.7031 1.5703 0 .5859.2578 1.125.7031 1.5703z"
      />
    </svg>
  </a>
</li>
<li class="pages__list">
  <a href="index.html" id="pages__list__category">
     ${productFind.category}
    <svg
      height="12px"
      viewBox="0 0 56 56"
      width="12px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m35.8047 47.7226c.3984.3985.914.6329 1.5234.6329 1.2188 0 2.1328-.9141 2.1328-2.1329 0-.5859-.2343-1.125-.6094-1.5234l-17.0624-16.6875 17.0624-16.6875c.3751-.3984.6094-.9609.6094-1.5235 0-1.2187-.914-2.1562-2.1328-2.1562-.6094 0-1.125.2344-1.5234.6328l-18.5625 18.1641c-.4453.375-.7031.9609-.7031 1.5703 0 .5859.2578 1.125.7031 1.5703z"
      />
    </svg>
  </a>
</li>
<li class="pages__list pages__list--active">
  <a href="index.html" id="pages__list__item">  ${productFind.title} </a>
</li>`)
  addSwiper(productFind.id,productItem);
  console.log(productFind);
  productWrapper.insertAdjacentHTML('beforeend',`<div class="container">
  <div class="row">
    

    <div class="col-lg-6 col-md-12">
      <div class="product__image__wrapper"     onmouseenter="handleMouseEnter(event,this)"
      onmouseleave="handleMouseLeave(event,this)" onmousemove="handleMouseMove(event,this)">
        <img src="${productFind.src}" onclick="imageZoom(event,this,${productFind.id})" alt="" />
      </div>
      <div class="product__slide__wrapper">
        <ul class="product__slide">
          <li class="product__slide__img">
            <a href="" class="slide__img__link" onclick="showImg(event,this,${productFind.id})" data-src="${productFind.bigImg[1]}">
              <img
                src="${productFind.images[1]}"
                class="slide__img"
                
                alt=""
              />
            </a>
          </li>
          <li class="product__slide__img">
            <a href=""  class="slide__img__link" onclick="showImg(event,this,${productFind.id})"  data-src="${productFind.bigImg[0]}">
              <img
                src="${productFind.images[0]}"
                class="slide__img"
               
                alt=""
              />
            </a>
          </li>
        
       
         
        </ul>
      </div>
    </div>
    <div class="col-lg-6 col-md-12">
      <div class="product__info__wrap">
        <div class="product__info__cart">
          <h2 class="info__title">${productFind.title}</h2>
          <div class="info__price">
            <span class="price">${productFind.price} تومان</span>
          </div>
          <div class="info__desc">
            جنس لینن نخ بدون آبرفت خنک و عالی قد حدود 80 دور بازو 44
          </div>
          <div class="product__switch__wrap">
            <span class="product__switch__lable">رنگ های موجود</span>
            <ul class="product__switch__color info__color__switch">
   
            ${productFind.colors.map((color)=> 
              `<li class="info__color__li">
                  
                  <label
                    class="color__span"
                    data-color="${color}"
                    for="${color}"
                    style = "background-color:${color};"
                  ></label>
                  <input type="radio" name="color" value="${color}" id="${color}" class="color__input" onchange="selectColor(event,this,${productFind.id})">
                </li>`
            ).join('') } 
          
            </ul>
          </div>
          <div class="product__switch__wrap">
          <span class="product__switch__lable">سایز های موجود</span>
          <ul class="product__switch__size">
          ${productFind.size.map((si)=> ` <li class="size__li">
          <label class="size__span" for="${si}">${si}</label>
          <input type="radio" name="size" value="${si}" id="${si}" class="size__input" onchange="selectSize(event,this,${productFind.id})">
        </li>`).join('')}
          </ul>
        </div>
          <div class="product__cart__wrap">
            <div class="product__cart__count">
              <div class="cart__count cart__count__wrap">
                <input
                  type="button"
                  onclick="decrease(event,this,${productFind.id})"
                  class="cart__count__mines"
                  value="-"
                />
                <input
                  type="text"
                  min="1"
                  class="cart__count__input"
                  id="cart__count__input"
                  value='${productFind.count}'
                  onchange="updateTotal(${productFind.id}, value)"
                  
                />
                <input
                  type="button"
                  onclick="increase(event,this,${productFind.id})"
                  class="cart__count__plus"
                  value="+"
                />
              </div>
              <div class="product__cart__btn">
                <button
                type="submit"
                  href="#"
                  class="menu__footer__link menu__footer__shop cart__btn"
                  onclick="addBtn(event,this,${productFind.id})"
                  >افزودن به سبد خرید</button
                >
              </div>
            </div>
            <div class="cart__btn__wishList__wrap">
              <a href="" class="cart__btn__wishList">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                  id="heart"
                >
                  <path
                    d="M349.6 64c-36.4 0-70.718 16.742-93.6 43.947C233.117 80.742 198.8 64 162.4 64 97.918 64 48 114.221 48 179.095c0 79.516 70.718 143.348 177.836 241.694L256 448l30.164-27.211C393.281 322.442 464 258.61 464 179.095 464 114.221 414.082 64 349.6 64zm-80.764 329.257l-4.219 3.873-8.617 7.773-8.616-7.772-4.214-3.869c-50.418-46.282-93.961-86.254-122.746-121.994C92.467 236.555 80 208.128 80 179.095c0-22.865 8.422-43.931 23.715-59.316C118.957 104.445 139.798 96 162.4 96c26.134 0 51.97 12.167 69.11 32.545L256 157.661l24.489-29.116C297.63 108.167 323.465 96 349.6 96c22.603 0 43.443 8.445 58.686 23.778C423.578 135.164 432 156.229 432 179.095c0 29.033-12.467 57.459-40.422 92.171-28.784 35.74-72.325 75.709-122.742 121.991z"
                  ></path>
                </svg>
              </a>
              <a href="" class="wishList__text__link" onclick="addWishList(event,this,${productFind.id})">
                <span class="wishList__text">افزودن به علاقه مندی</span>
              </a>
            </div>
          </div>
        </div>
        <ul class="product__meta">
          <li>
            <span class="product__meta__lable">شناسه محصول: </span>
            <a href="" class="product__meta__link sku">1256</a>
          </li>
          <li>
            <span class="product__meta__lable">دسته بندی:</span>
            <a href="" class="product__meta__link category"
              >${productFind.category}</a
            >
          </li>
          <li>
            <span class="product__meta__lable">برچسب:</span>
            <a href="" class="product__meta__link tags">${productFind.value}</a>
          </li>
        </ul>
        <div class="product__share">
          <span class="product__share__lable">اشتراک گذاری:</span>
          <ul class="social__icons__wrap">
            <li class="social__link">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#837b81"
                  width="17px"
                  height="17px"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="facebook"
                >
                  <path
                    d="M17.9902344,1.5957031c-1.0087891-0.1067505-2.0227051-0.1586304-3.0371094-0.1552734C11.5898438,1.4404297,9.5,3.5819702,9.5,7.0302734v2.3408203H6.6748047c-0.276001-0.0001831-0.4998779,0.2234497-0.5,0.4994507v3.8511353c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5H9.5v7.71875c-0.0001831,0.276001,0.2234497,0.4998169,0.4994507,0.5h3.9780884c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507v-7.7192993h2.8164673c0.2512207-0.000061,0.463501-0.1864014,0.4960938-0.4355469l0.4970703-3.8505859c0.0357056-0.2736816-0.1572266-0.5245361-0.4309692-0.5602417c-0.0216064-0.0028076-0.043335-0.0042114-0.0651245-0.0042114h-3.3135376V7.4121094c0-0.9697266,0.1953125-1.375,1.4082031-1.375l2.0390625-0.0009766c0.276001,0.0001221,0.4998169-0.2234497,0.5-0.4994507V2.0917969C18.4248657,1.8408203,18.2390137,1.6286621,17.9902344,1.5957031z M17.4248047,5.0361328l-1.5390625,0.0009766c-2.1582031,0-2.4082031,1.3554688-2.4082031,2.375v2.4590454c-0.0001221,0.2759399,0.2234497,0.4998169,0.4994507,0.499939h3.2456665l-0.3681641,2.8505859h-2.8769531c-0.276001-0.0001221-0.4998169,0.2234497-0.5,0.4994507v7.7192993H10.5v-7.71875c0.0001831-0.276001-0.2234497-0.4998169-0.4993896-0.5H7.1748047v-2.8505859H10c0.276001,0.0001831,0.4998169-0.2234497,0.5-0.4994507V7.0302734c0-2.8740234,1.664978-4.5898438,4.453125-4.5898438c1.0087891,0,1.9199219,0.0546875,2.4716797,0.1025391V5.0361328z"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="social__link social__icon">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#837b81"
                  width="17px"
                  height="17px"
                  data-name="Layer 1"
                  viewBox="0 0 24 24"
                  id="twitter"
                >
                  <path
                    d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="social__link">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#837b81"
                  width="15px"
                  height="15px"
                  viewBox="-5.572 -4.729 47.5 45.827"
                  id="google"
                >
                  <path
                    d="M-4.294 28.338c4.03-5.689 11.812-6.163 15.645-5.649-1.066-1.146-3.753-3.279-1.857-6.795C.842 16.96-1.923 11.627-2.318 7.439-3.108.407 3.054-4.649 9.375-4.729H23.36c-.474.435-2.805 1.976-3.358 1.976l-3.674.039c9.363 8.81.276 16.198-1.581 17.738-3.753 4.543 8.02 6.795 7.388 14.499 0 6.992-5.886 11.575-15.091 11.575-10.232-.039-15.13-6.399-11.338-12.76zm20.504 8.494c3.674-2.805 2.805-6.953-.04-9.719-1.699-1.659-3.753-3.239-8.099-2.726-5.097.593-8.81 3.042-8.612 6.874 1.066 8.139 12.8 8.336 16.75 5.531v.04zm-2.489-23.901c4.227-3.477.316-15.604-5.452-15.604-3.674 0-5.57 2.646-5.729 6.4-.276 6.952 6.085 13.392 11.181 9.204zm18.686 4.424l-6.36.04v-3.2h6.282V7.914h3.2v6.282l6.36.039.039 3.161h-6.399v6.321l-3.161.04.039-6.402z"
                  ></path>
                </svg>
              </a>
            </li>
            <li class="social__link">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  id="youtube"
                >
                  <g data-name="Youtube 1">
                    <g data-name="<Group>">
                      <g data-name="<Group>">
                        <path
                          fill="#837b81"
                          stroke="#fff"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9.5 7.5v9l7-4.5-7-4.5z"
                          data-name="<Path>"
                        ></path>
                      </g>
                      <path
                        fill="none"
                        stroke="#303c42"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.13 4.17 5 3.93a56.22 56.22 0 0 1 7-.43h0a56.22 56.22 0 0 1 7 .43l1.9.24a3 3 0 0 1 2.63 3v9.7a3 3 0 0 1-2.63 3l-1.9.24a56.22 56.22 0 0 1-7 .43h0a56.22 56.22 0 0 1-7-.43l-1.9-.24a3 3 0 0 1-2.63-3V7.15a3 3 0 0 1 2.66-2.98Z"
                        data-name="<Path>"
                      ></path>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  
           
</div>
</div>  `)

  }


function addWishList(e,th,productId){
e.preventDefault();
th.children[0].innerHTML=`<span class="wishList__text">نمایش لیست علاقه مندی</span>`;
th.previousElementSibling.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="20px" height="20px"><path fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2" d="M21 6L9 18 4 13"/></svg>`;


}



function showImg(event,th,proId){
event.preventDefault();

let dataSrc = th.getAttribute('data-src');
let srcImg = th.parentElement.parentElement.parentElement.previousElementSibling.children[0];
srcImg.setAttribute('src', dataSrc);

}

function handleMouseMove(event,th){
  const imageWidth = th.offsetWidth,
  imageHeight = th.offsetHeight,
  imageOffsetTop = th.offsetTop,
  imageOffsetLeft = th.offsetLeft,
  pageX = event.pageX,
  pageY = event.pageY;

 th.children[0].style.transformOrigin = `${pageX - imageOffsetLeft}px ${
    pageY - imageOffsetTop
  }px`;
}



function handleMouseEnter(event,th){

th.children[0].style.transform += "scale(2)";
}
function handleMouseLeave(event,th){
  th.children[0].style.transform = "scale(1)";
}
function imageZoom(event,th,proId){
event.preventDefault();

if(th.classList.contains('zoomed')){
  th.classList.remove('zoomed');
  let clientWidth = th.clientWidth;
  th.style.width =(clientWidth - 100) + 'px';
  
 
}
else{
  th.classList.add('zoomed');
 let clientWidth = th.clientWidth;
 th.style.width =(clientWidth + 100) + 'px';

}
}


 function selectSize(event,productId){
 let radioClick = event.target.parentElement.parentElement.children;
 for(let i=0; i< radioClick.length ; i++ ){
  let allRadio = radioClick.item(i).children[0];
  allRadio.classList.remove('size__span--active');
 }
 event.target.previousElementSibling.classList.add('size__span--active');
 }
function selectColor(event,productId){
let radioClick = event.target.parentElement.parentElement.children;
for(let i = 0; i < radioClick.length ; i++){
  let allRadio = radioClick.item(i).children[0];
  allRadio.classList.remove('color__span--active');
}
event.target.previousElementSibling.classList.add('color__span--active');
}

function addBtn(e,th,productId){
  e.preventDefault();
  let itemColor = event.target.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling.children[1].children;
  let itemSize = event.target.parentElement.parentElement.parentElement.previousElementSibling.children[1].children;

let dataSizeArray = [];
let dataColorArray = [];

  for(let i=0; i < itemSize.length ; i++){
   dataSize = itemSize.item(i).children[1];
   dataSizeArray.push(dataSize);
}

for(let i = 0; i< itemColor.length ; i++){
  dataColor = itemColor.item(i).children[1];
  dataColorArray.push(dataColor);
}

let valSizeChecked = dataSizeArray.find(function(size){
return size.checked === true;
});
let valColorChecked = dataColorArray.find(function(color){
 return color.checked === true;
});


let findItem = productItem.find(function(item){
     return item.id === productId;
});





if(valSizeChecked && valColorChecked){
  addToUserbasket(findItem.id);
  upadateUserBasket(valSizeChecked,valColorChecked,findItem.id);
  updateTotal(findItem.id, findItem.count);
  Swal.fire({
    title:'با موفقیت به سبد خرید افزوده شد',
  icon:'success',

  confirmButtonColor: '#3085d6',

  })
 }
 else{


Swal.fire({
  title:'لطفا برخی از گزینه های محصول را قبل از اضافه کردن آن به سبد خرید، انتخاب کنید.',
  icon:'warning',
  
  confirmButtonColor: '#3085d6',
});



// alert('لطفا برخی از گزینه های محصول را قبل از اضافه کردن آن به سبد خرید، انتخاب کنید.');
 }
}


 function upadateUserBasket(valSizeChecked,valColorChecked,productId){
  let valSize= valSizeChecked.value;
  let valColor = valColorChecked.value;

 let findproduct = productItem.find(function(item){
   return item.id === productId;
});
userBasket.forEach(function (item) {
  if (item.id === findproduct.id) {
    item.colors = valColor;
    item.size = valSize;
  }
});
setLocalStorageData(userBasket);
console.log(userBasket);
 }

function increase(e,th,productId){
let input = th.previousElementSibling;
let inputVal = Number(input.value);
inputVal = isNaN(inputVal) ? 0 : inputVal;
inputVal++;
input.value = inputVal;
let findItem = productItem.find(function(item){
  return item.id === productId;
});

findItem.count = input.value;
updateTotal(findItem.id, findItem.count);
shopLinkMenuLi.children[0].children[1].children[1].innerHTML= `<span class="item__count"> ${findItem.count} </span>
<span> * ${findItem.price} تومان </span>`;

}

function decrease(e,th,productId){
  let input = th.nextElementSibling;
  let inputVal = Number(input.value);
  if(inputVal > 1){
  inputVal = isNaN(inputVal) ? 0 : inputVal;
  inputVal--;
  input.value = inputVal;
  let findItem = productItem.find(function(item){
     return item.id === productId;
  });

  findItem.count = input.value;
  updateTotal(findItem.id, findItem.count);
  shopLinkMenuLi.children[0].children[1].children[1].innerHTML= `<span class="item__count"> ${findItem.count} </span>
<span> * ${findItem.price} تومان </span>`;
 
}
}
function updateTotal(findItemId, findItemCount){
  userBasket.forEach(function (item) {
    if (item.id === findItemId) {
      item.count = findItemCount;
    }
  });
  setLocalStorageData(userBasket);
  calcTotalBasket(userBasket);
}
function addToUserbasket(productId) {
  let mainItem = productItem.find(function (item) {
    return item.id === productId;
  });

  let isProduct = userBasket.some(function (item) {
    return item.id === productId;
  });

  if (isProduct) {
    mainItem.count++;
  } else {
    userBasket.push(mainItem);
  }

  setLocalStorageData(userBasket);
 addBasket(userBasket);
  calcTotalBasket(userBasket);
}
function addBasket(userBasket) {
  shopLinkMenuEmpty.style.display = "none";
  shopLinkMenuFooter.style.display = "flex";
  menuFooterWrapperLink.style.display = "flex";
  shopLinkMenuLi.innerHTML = "";
  userBasket.forEach(function (item) {
    shopLinkMenuLi.insertAdjacentHTML(
      "beforeend",
      `<div class="menu__li">
    <a class="menu__li__link" href="">
      <img src="${item.src}" class="menu__li__img" alt="">
    </a>
  <div class="menu__li__details">
    <h6 class="menu__li__title"> ${item.title} </h6>
  
  <div>

    <span class="item__count"> ${item.count} </span>
     <span> * ${item.price} تومان </span>
 </div>
  </div>

 <a onclick="removeItem(${item.id}, event)" href="">
  <svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 32 32" id="delete"><path d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"></path></svg>
</a>
</div>
`
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
  console.log(userBasket);
  if (userBasket.length === 0) {

    shopLinkMenuLi.innerHTML = "";
    shopLinkMenuEmpty.style.display = "flex";
    menuFooterWrapperLink.style.display = "none";
    shopLinkMenuFooter.style.display = "none";
  } else {
    addBasket(userBasket);
  }
  calcTotalBasket(userBasket);
}

function getLocalStorageUser() {
  let localStorageData = JSON.parse(localStorage.getItem("arrayUser"));
  if (localStorageData) {
    users = localStorageData;
  } else {
    users = [];
  }
}




// function isLogin(users){
//  let valueReviewText = reviewText.value;
// let valueReviewName = reviewName.value;
// let valueReviewEmail = reviewEmail.value;

// }

window.addEventListener('load', getLocalStorage);
window.addEventListener("load", getLocalStorageData);
window.addEventListener('load', getLocalStorageComment);
// window.addEventListener('load', getLocalStorageUser);