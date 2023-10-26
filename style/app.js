let $ = document;
let navToggleIcon = $.querySelector(".nav__toggle-icon");
let menu = $.querySelector(".menu");
let menuItem = $.querySelectorAll(".menu__item");
let submenu = $.querySelectorAll(".submenu");
let controlPrev = $.querySelector(".control__prev");
let controlNext = $.querySelector(".control__next");
const homeBaner = $.querySelector(".home__baner");
const homeTitle = $.querySelector(".home__title");
const homeDes = $.querySelector(".home__des");
const productsNavLink = $.querySelectorAll(".products__nav__link");
const productsContainer = $.querySelector(".shop__container");
const swiperWrapper = $.querySelector(".swiper-wrapper");
let controlAboutPrev = $.querySelector(".control__about__prev");
let controlAboutNext = $.querySelector(".control__about__next");
let authorImage = $.querySelector(".author__image");
let authorName = $.querySelector(".author__name");
let authorJob = $.querySelector(".author__job");
let authorCaption = $.querySelector(".author__caption");
let formButton = $.querySelector(".form__button");
let formInput = $.querySelector(".form__input");
const shopLinkMenuLi = $.querySelector(".shop-link__menu__li");
const shopLinkMenu = $.querySelector(".shop-link__menu");
const cartCountInput = $.querySelector(".cart__count__input");
const footerPrice = $.querySelector(".footer__price");
let shopLinkText = $.querySelector(".shop-link__text");
const shopLinkMenuEmpty = $.querySelector(".shop-link__menu__empty");
const shopLinkMenuFooter = $.querySelector(".shop-link__menu__footer");
const menuFooterWrapperLink = $.querySelector(".menu__footer__wrapper__link");
const menuHeadingClose = $.querySelector(".menu__heading__close");
const menuEmptyLink = $.querySelector(".menu__empty__link");
const navLinkIcon = $.querySelector(".nav__link-icon");
const searchLink = $.querySelector('.search-link');
const searchWindow = $.querySelector('.search__window');
const backgroundToggleIcon = $.querySelector('.background__toggle__icon');
const formSearch = $.getElementById('form__search');
const formSearchInput = $.getElementById('form__search__input');
const productList = $.querySelector('.product__list');
const productScroll = $.querySelector('.product__scroll');
const productEmpty = $.querySelector('.product__empty');
const productEmptyText = $.querySelector('.product__empty__text');


const bannerItem = [
  {
    id: 1,
    URL: "url(./img/banner1.jpg)",
    desc: " فقط امروز تا 50% تخفیف بگیرید",
    title: "مد زنانه",
  },
  {
    id: 2,
    URL: "url(./img/banner2.jpg)",
    desc: "50% تخفیف در تمامی محصولات",
    title: "مد مردانه",
  },
  {
    id: 3,
    URL: "url(./img/banner3.jpg)",
    desc: "تجربه تماشای خود را به سطح بعدی ببرید",
    title: "فروش تابستانی",
  },
];

const clientItem = [
  {
    id: 1,
    src: "./img/user_img1.jpg",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
    name: "لیسا",
    job: "طراح",
  },
  {
    id: 2,
    src: "./img/user_img2.jpg",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
    name: "امیر",
    job: "آرشیتکت",
  },
  {
    id: 3,
    src: "./img/user_img3.jpg",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
    name: "ماری",
    job: "دولوپر",
  },
  {
    id: 4,
    src: "./img/user_img4.jpg",
    desc: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.",
    name: "رضا",
    job: "طراح",
  },
];

navToggleIcon.addEventListener("click", () => {
  navToggleIcon.classList.toggle("nav__toggle-icon--open");
  menu.classList.toggle("menu--open");
});

let currentSlide = 0;
const url = [];
bannerItem.map(function (item) {
  url.push(item.URL);
});

const titles = [];
bannerItem.map(function (item) {
  titles.push(item.title);
});

const descs = [];
bannerItem.map(function (item) {
  descs.push(item.desc);
});

function nextSlider() {
  currentSlide++;
  if (currentSlide > url.length - 1) {
    currentSlide = 0;
  }
  homeBaner.style.backgroundImage = url[currentSlide];

  if (currentSlide > titles.length - 1) {
    currentSlide = 0;
  }
  homeTitle.innerHTML = titles[currentSlide];
  if (currentSlide > descs.length - 1) {
    currentSlide = 0;
  }
  homeDes.innerHTML = descs[currentSlide];
}

controlNext.addEventListener("click", nextSlider);
setInterval(nextSlider, 2000);

controlPrev.addEventListener("click", function () {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = url.length - 1;
    currentSlide = titles.length - 1;
    currentSlide = descs.length - 1;
  }
  homeBaner.style.backgroundImage = url[currentSlide];
  homeTitle.innerHTML = titles[currentSlide];
  homeDes.innerHTML = descs[currentSlide];
});

const values = ["suggest", "sale", "view", "new"];

let colors = [];

let productItem = [
  {
    id: 1,
    title: "لباس زنانه",
    price: "500000",
    src: "./img/product_img1.jpg",
    value: "sale",
    category:"پوشاک بانوان",
    count: 1,
    images:["./img/product_small1.jpg","./img/product_small_img1.jpg"],
    bigImg:["./img/product_big1.jpg","./img/product_img1.jpg"],
    colors: ["#87554B", "#333333" ,"#3a86ff"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 2,
    title: "لباس رسمی چرم",
    price: "1000000",
    src: "./img/product_img2.jpg",
    value: "view",
    category:"پوشاک آقایان",
    count: 1,
    images:["./img/product_small2.jpg","./img/product_small_img6.jpg"],
    bigImg:["./img/product_big2.jpg","./img/product_img2.jpg"],
    colors: ["#847764", "#0393B5", "#DA323F"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 3,
    title: "لباس زنانه اسلیو",
    price: "600000",
    src: "./img/product_img3.jpg",
    value: "suggest",
    category:"پوشاک بانوان",
    count: 1,
    images:["./img/product_small3.jpg","./img/product_small_img7.jpg"],
    bigImg:["./img/product_big3.jpg","./img/product_img3.jpg"],
    colors: ["#333333", "#7C502F", "#2F366C", "#874A3D"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 4,
    title: "پیراهن روشن",
    price: "300000",
    src: "./img/product_img4.jpg",
    value: "view",
    category:"پوشاک آقایان",
    count: 1,
    images:["./img/product_small4.jpg","./img/product_small_9.jpg"],
    bigImg:["./img/product_big4.jpg","./img/product_img4.jpg"],
    colors: ["#333333", "#A92534","#B9C2DF"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 5,
    title: "لباس  زنانه",
    price: "700000",
    src: "./img/product_img5.jpg",
    value: "new",
    category:"پوشاک بانوان",
    count: 1,
    images:["./img/product_small5.jpg","./img/product_small_img10.jpg"],
    bigImg:["./img/product_big5.jpg","./img/product_img5.jpg"],
    colors: ["#87554B", "#333333","#5FB7D4"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 6,
    title: "پیراهن مردانه",
    price: "250000",
    src: "./img/product_img6.jpg",
    value: "sale",
    category:"پوشاک آقایان",
    count: 1,
    images:["./img/product_small6.jpg","./img/product_small_img12.jpg"],
    bigImg:["./img/product_big6.jpg","./img/product_img6.jpg"],
    colors: ["#87554B", "#333333"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 7,
    title: "تونیک راه راه",
    price: "350000",
    src: "./img/product_img7.jpg",
    value: "sale",
    category:"پوشاک بانوان",
    count: 1,
    images:["./img/product_small7.jpg","./img/product_small_img14.jpg"],
    bigImg:["./img/product_big7.jpg","./img/product_img7.jpg"],
    colors: ["#333333", "#7C502F","#2F366C"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 8,
    title: "پیراهن جین  مردانه",
    price: "350000",
    src: "./img/product_img8.jpg",
    value: "sale",
    category:"پوشاک آقایان",
    count: 1,
    images:["./img/product_small8.jpg","./img/product_small_img16.jpg"],
    bigImg:["./img/product_big8.jpg","./img/product_img8.jpg"],
    colors: ["#333333","#444653","#B9C2DF"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 9,
    title: "لباس  زنانه",
    price: "600000",
    src: "./img/product_img11.jpg",
    value: "sale",
    category:"پوشاک بانوان",
    count: 1,
    images:["./img/product_small11.jpg","./img/product_small_img22.jpg"],
    bigImg:["./img/product_big11.jpg","./img/product_img11.jpg"],
    colors: ["#090909", "#AC644D"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 10,
    title: "تیشرت دخترانه",
    price: "200000",
    src: "./img/product_img9.jpg",
    value: "sale",
    category:"پوشاک بانوان",
    count: 1,
    images:["./img/product_small9.jpg","./img/product_small_img18.jpg"],
    bigImg:["./img/product_big9.jpg","./img/product_img9.jpg"],
    colors: ["#B5B6BB","#333333","#DA323F"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 11,
    title: "تیشرت زنانه",
    price: "250000",
    src: "./img/product_img12.jpg",
    value: "sale",
    category:"پوشاک بانوان",
    count: 1,
    images:["./img/product_small12.jpg","./img/product_small_img24.jpg"],
    bigImg:["./img/product_big12.jpg","./img/product_img12.jpg"],
    colors: ["#1B1B25","#444653"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 12,
    title: "پیراهن ",
    price: "300000",
    src: "./img/product_img10.jpg",
    value: "sale",
    count: 1,
    category:"پوشاک آقایان",
    images:["./img/product_small10.jpg","./img/product_small_img20.jpg"],
    bigImg:["./img/product_big10.jpg","./img/product_img10.jpg"],
    colors: ["#E8ADA9","#C38F77","#BE7154"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 13,
    title: "لباس  زنانه",
    price: "500000",
    src: "./img/product_img1.jpg",
    value: "viw",
    category:"پوشاک بانوان",
    count: 1,
    images:["./img/product_small1.jpg","./img/product_small_img1.jpg"],
    bigImg:["./img/product_big1.jpg","./img/product_img1.jpg"],
    colors: ["#87554B", "#333333" ,"#3a86ff"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 14,
    title: "پیراهن مردانه",
    price: "250000",
    src: "./img/product_img6.jpg",
    value: "view",
    category:"پوشاک آقایان",
    count: 1,
    images:["./img/product_small6.jpg","./img/product_small_img12.jpg"],
    bigImg:["./img/product_big6.jpg","./img/product_img6.jpg"],
    colors: ["#87554B", "#333333"],  
    size:['XS','S','M','L','XL'],
  },
  {
    id: 15,
    title: "تونیک راه راه",
    price: "350000",
    src: "./img/product_img7.jpg",
    value: "view",
    category:"پوشاک بانوان",
    count: 1,
    images:["./img/product_small7.jpg","./img/product_small_img14.jpg"],
    bigImg:["./img/product_big7.jpg","./img/product_img7.jpg"],
    colors: ["#333333", "#7C502F","#2F366C"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 16,
    title: "پیراهن جین مردانه",
    price: "350000",
    src: "./img/product_img8.jpg",
    value: "view",
    category:"پوشاک آقایان",
    count: 1,
    images:["./img/product_small8.jpg","./img/product_small_img16.jpg"],
    bigImg:["./img/product_big8.jpg","./img/product_img8.jpg"],
    colors: ["#333333","#444653","#B9C2DF"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 17,
    title: "لباس زنانه",
    price: "600000",
    src: "./img/product_img11.jpg",
    value: "view",
    category:"پوشاک بانوان",
    count: 1,
    images:["./img/product_small11.jpg","./img/product_small_img22.jpg"],
    bigImg:["./img/product_big11.jpg","./img/product_img11.jpg"],
    colors: ["#090909", "#AC644D"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 18,
    title: "تیشرت دخترانه",
    price: "200000",
    src: "./img/product_img9.jpg",
    value: "view",
    category:"پوشاک بانوان",
    count: 1,
    images:["./img/product_small9.jpg","./img/product_small_img18.jpg"],
    bigImg:["./img/product_big9.jpg","./img/product_img9.jpg"],
    colors: ["#B5B6BB","#333333","#DA323F"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 19,
    title: "تیشرت  زنانه",
    price: "250000",
    src: "./img/product_img12.jpg",
    value: "view",
    category:"پوشاک بانوان",
    count: 1,
    images:["./img/product_small12.jpg","./img/product_small_img24.jpg"],
    bigImg:["./img/product_big12.jpg","./img/product_img12.jpg"],
    colors: ["#1B1B25","#444653"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 20,
    title: "پیراهن ",
    price: "300000",
    src: "./img/product_img10.jpg",
    value: "view",
    category:"پوشاک آقایان",
    count: 1,
    images:["./img/product_small10.jpg","./img/product_small_img20.jpg"],
    bigImg:["./img/product_big10.jpg","./img/product_img10.jpg"],
    colors: ["#E8ADA9","#C38F77","#BE7154"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 21,
    title: "لباس  زنانه",
    price: "500000",
    src: "./img/product_img1.jpg",
    value: "suggest",
    count: 1,
    category:"پوشاک بانوان",
    images:["./img/product_small1.jpg","./img/product_small_img1.jpg"],
    bigImg:["./img/product_big1.jpg","./img/product_img1.jpg"],
    colors: ["#87554B", "#333333" ,"#3a86ff"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 22,
    title: "پیراهن روشن",
    price: "300000",
    src: "./img/product_img4.jpg",
    value: "suggest",
    category:"پوشاک آقایان",
    count: 1,
    images:["./img/product_small4.jpg","./img/product_small_9.jpg"],
    bigImg:["./img/product_big4.jpg","./img/product_img4.jpg"],
    colors: ["#333333", "#A92534","#B9C2DF"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 23,
    title: "پیراهن جین  مردانه",
    price: "350000",
    src: "./img/product_img8.jpg",
    value: "suggest",
    category:"پوشاک آقایان",
    count: 1,
    images:["./img/./img/product_small8.jpg","./img/./img/product_small_img16.jpg"],
    bigImg:["./img/./img/product_big8.jpg","./img/./img/product_img8.jpg"],
    colors: ["#333333","#444653","#B9C2DF"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 24,
    title: "لباس  زنانه",
    price: "600000",
    src: "./img/product_img11.jpg",
    value: "suggest",
    count: 1,
    category:"پوشاک بانوان",
    images:["./img/product_small11.jpg","./img/product_small_img22.jpg"],
    bigImg:["./img/product_big11.jpg","./img/product_img11.jpg"],
    colors: ["#090909", "#AC644D"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 25,
    title: "پیراهن جین  مردانه",
    price: "350000",
    src: "./img/product_img8.jpg",
    value: "new",
    category:"پوشاک آقایان",
    count: 1,
    images:["./img/product_small8.jpg","./img/product_small_img16.jpg"],
    bigImg:["./img/product_big8.jpg","./img/product_img8.jpg"],
    colors: ["#333333","#444653","#B9C2DF"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 26,
    title: "لباس  زنانه",
    price: "600000",
    src: "./img/product_img11.jpg",
    value: "new",
    count: 1,
    category:"پوشاک بانوان",
    images:["./img/product_small11.jpg","./img/product_small_img22.jpg"],
    bigImg:["./img/product_big11.jpg","./img/product_img11.jpg"],
    colors: ["#090909", "#AC644D"],
    size:['XS','S','M','L','XL'],
  },
  {
    id: 27,
    title: "تیشرت دخترانه",
    price: "200000",
    src: "./img/product_img9.jpg",
    value: "new",
    category:"پوشاک بانوان",
    count: 1,
    images:["./img/product_small9.jpg","./img/product_small_img18.jpg"],
    bigImg:["./img/product_big9.jpg","./img/product_img9.jpg"],
    colors: ["#B5B6BB","#333333","#DA323F"],
    size:['XS','S','M','L','XL'],
  },
];

let userBasket = [];

function setLocalStorage(productList) {
  localStorage.setItem("arrayItem", JSON.stringify(productItem));
}

function setLocalStorageData(listBasketUser) {
  localStorage.setItem("listBasket", JSON.stringify(userBasket));
}

function getLocalStorage() {
  let localStorageData = JSON.parse(localStorage.getItem("arrayItem"));
  if (localStorageData) {
    productItem = localStorageData;
  } else {
    productItem = [];
  }
}

productsNavLink.forEach(function (item) {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    let itemValue = item.dataset.value;

    document
      .querySelector(".products__nav__link--active")
      .classList.remove("products__nav__link--active");
    this.classList.add("products__nav__link--active");
    if (itemValue === "all") {
      productsContainer.innerHTML = "";
      mapData.forEach(function (item) {
        addToDom(item);
      });
    } else {
      let productFilter = productItem.filter(function (item) {
        return item.value === itemValue;
      });
      //   itemColors.forEach(function (color) {
      //     productsContainer.insertAdjacentHTML(
      //       "beforeend",
      //       `   <div class="product__color__switch">

      //  <span class="color__span color__span--active" data-color="${item.colors}"   style= background-color:${item.colors}></span> </div>
      //   `
      //     );
      //   });

      productsContainer.innerHTML = "";
      //  let productChild = productsContainer.childNodes;
      // console.log([...productChild]);

      productFilter.forEach(function (item) {
        let itemColors = item.colors;
        productsContainer.insertAdjacentHTML(
          "beforeend",
          `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="product__item">
          <div class="product__wrapper__img">
            <a class="product__img__link">
              <img class="product__img" src="${item.src}" alt="">
            </a>
            <div class="product__action__box">
              <ul class="product__wrapper__links">
                <li class="product__link">
                <a href="#"> <svg width="17px" height="17px" fill="#fff" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>heart-glyph</title><path d="M362.67,21.33A149,149,0,0,0,256,66.19,149,149,0,0,0,149.33,21.33C67,21.33,0,88.32,0,170.67a148.45,148.45,0,0,0,43.08,104.9L240.51,484a21.33,21.33,0,0,0,31,0L468.75,275.74A148.45,148.45,0,0,0,512,170.67C512,88.32,445,21.33,362.67,21.33Z"/></svg> </a> 
                </li>
                <li class="product__link">
                 <a href="#"><svg width="17px" height="17px" fill="#fff" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>zoom-in-glyph</title><path d="M505.75,475.58,378.42,348.25a212.3,212.3,0,0,0,48.25-134.92C426.67,95.7,331,0,213.33,0S0,95.7,0,213.33,95.7,426.67,213.33,426.67a212.3,212.3,0,0,0,134.92-48.25L475.58,505.75a21.33,21.33,0,1,0,30.17-30.17ZM277.33,234.67H234.67v42.67a21.33,21.33,0,1,1-42.67,0V234.67H149.33a21.33,21.33,0,0,1,0-42.67H192V149.33a21.33,21.33,0,0,1,42.67,0V192h42.67a21.33,21.33,0,1,1,0,42.67Z"/></svg></a> 
                </li>
                <li class="product__link">
                <a onclick='addToUserbasket(${
                  item.id
                })' href="#"> <svg width="17px" height="17px" fill="#fff" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style></style></defs><title>cart-glyph</title><path class="cls-1" d="M142.07,512H369.93a77,77,0,0,0,75.31-61.76l36.29-181.53H30.47L66.76,450.23A77,77,0,0,0,142.07,512ZM307.2,345.54a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm288-192.07H427.7L287.18,12.9a44.12,44.12,0,0,0-62.36,0L84.3,153.47H44.8a44.82,44.82,0,0,0,0,89.63H467.2a44.82,44.82,0,0,0,0-89.63Zm-346.7,0L242.92,31a18.52,18.52,0,0,1,26.16,0L391.5,153.47Z"/></svg></a> 
                </li>
                
              </ul>
            </div>
          </div>
          <div class="product__info">
            <h5 class="product__title">
              <a  href="product.html?id=${item.id}" >${item.title}</a>
            </h5>
            <div class="product__price">
            <h3 class="price">تومان&nbsp;<span>${item.price}</span></h3>
            
            </div>
            <div class="product__rating">
              <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>                    
              <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>                                
              <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>
              <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>                   
            </div>
        
            <div class="product__color__switch">
            ${item.colors.map((color)=> ` <span class="color__span" data-color="${color}" style = "background-color:${color};"></span>`
            ).join('')}
          
              </div>
               
            </div>
          </div>
        </div>
        </div>`
        );
      });
    }
  });
});
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
    <div class="cart__count">
    <input type="button" onclick="decrease(event,this,${item.id}) " class="cart__count__mines" value="-">
    <input type="text" min="1" class="cart__count__input" id="cart__count__input" value='${item.count}' onchange="updateTotal(${item.id}, value)">
    <input type="button" onclick="increase(event,this,${item.id})" class="cart__count__plus" value="+"> 
  </div>

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
  footerPrice.innerHTML = totalPrice;
  shopLinkText.innerHTML = total;
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
   
    th.parentElement.nextElementSibling.innerHTML = `<span class="item__count"> ${findItem.count} </span>
        <span> * ${findItem.price} تومان </span>`;
  }
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
  th.parentElement.nextElementSibling.innerHTML = `<span class="item__count"> ${findItem.count} </span>
      <span> * ${findItem.price} تومان </span>`;
}

const unique = productItem.map(function (item) {
  return [item.src, item];
});
let mapUnique = new Map(unique);
console.log(mapUnique);
let mapData = [...mapUnique.values()];

mapData.forEach(function (item) {
  addToDom(item);
});

// const unique = [...new Map(productItem.map((m) => [m.src, m])).values()];
// console.log(unique);

function addToDom(product) {
  productsContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="product__item">
      <div class="product__wrapper__img">
        <a href="#">
          <img class="product__img" src="${product.src}" alt="">
        </a>
        <div class="product__action__box">
          <ul class="product__wrapper__links">
            <li class="product__link">
            <a href="#"> <svg width="17px" height="17px" fill="#fff" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>heart-glyph</title><path d="M362.67,21.33A149,149,0,0,0,256,66.19,149,149,0,0,0,149.33,21.33C67,21.33,0,88.32,0,170.67a148.45,148.45,0,0,0,43.08,104.9L240.51,484a21.33,21.33,0,0,0,31,0L468.75,275.74A148.45,148.45,0,0,0,512,170.67C512,88.32,445,21.33,362.67,21.33Z"/></svg> </a> 
            </li>
            <li class="product__link">
             <a href="#"><svg width="17px" height="17px" fill="#fff" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>zoom-in-glyph</title><path d="M505.75,475.58,378.42,348.25a212.3,212.3,0,0,0,48.25-134.92C426.67,95.7,331,0,213.33,0S0,95.7,0,213.33,95.7,426.67,213.33,426.67a212.3,212.3,0,0,0,134.92-48.25L475.58,505.75a21.33,21.33,0,1,0,30.17-30.17ZM277.33,234.67H234.67v42.67a21.33,21.33,0,1,1-42.67,0V234.67H149.33a21.33,21.33,0,0,1,0-42.67H192V149.33a21.33,21.33,0,0,1,42.67,0V192h42.67a21.33,21.33,0,1,1,0,42.67Z"/></svg></a> 
            </li>
            <li class="product__link">
            <a onclick='addToUserbasket(${
              product.id
            })' href="#"> <svg width="17px" height="17px" fill="#fff" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style></style></defs><title>cart-glyph</title><path class="cls-1" d="M142.07,512H369.93a77,77,0,0,0,75.31-61.76l36.29-181.53H30.47L66.76,450.23A77,77,0,0,0,142.07,512ZM307.2,345.54a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm288-192.07H427.7L287.18,12.9a44.12,44.12,0,0,0-62.36,0L84.3,153.47H44.8a44.82,44.82,0,0,0,0,89.63H467.2a44.82,44.82,0,0,0,0-89.63Zm-346.7,0L242.92,31a18.52,18.52,0,0,1,26.16,0L391.5,153.47Z"/></svg></a> 
            </li>
            
          </ul>
        </div>
      </div>
      <div class="product__info">
        <h5 class="product__title">
          <a  href="product.html?id=${product.id}">${product.title}</a>
        </h5>
        <div class="product__price">
        <h3 class="price">تومان&nbsp;<span>${product.price}</span></h3>
        
        </div>
        <div class="product__rating">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>                    
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>                                
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>                   
        </div>
       

        <div class="product__color__switch">
        ${product.colors.map((item)=> ` <span class="color__span" data-color="${item}" style = "background-color:${item};"></span>`
        ).join('')}
      
          </div>
        
      </div>
    </div>
    </div>`
  );
}
// ${Array(product.colors.length)
//   .fill(0)
//   .map(
//     (color) =>
//       ` <span class="color__span" data-color="${product.colors[color]}" style = "background-color:${product.colors[color]}"></span>`
//   )
//   .join("")}

mapData.forEach(function (item) {
  swiperWrapper.insertAdjacentHTML(
    "beforeend",
    `<div class="swiper-slide">
    
    <div class="product__item">
      <div class="product__wrapper__img">
        <a href="#">
          <img class="product__img" src="${item.src}" alt="">
        </a>
        <div class="product__action__box">
          <ul class="product__wrapper__links">
            <li class="product__link">
            <a href="#"> <svg width="17px" height="17px" fill="#fff" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>heart-glyph</title><path d="M362.67,21.33A149,149,0,0,0,256,66.19,149,149,0,0,0,149.33,21.33C67,21.33,0,88.32,0,170.67a148.45,148.45,0,0,0,43.08,104.9L240.51,484a21.33,21.33,0,0,0,31,0L468.75,275.74A148.45,148.45,0,0,0,512,170.67C512,88.32,445,21.33,362.67,21.33Z"/></svg> </a> 
            </li>
            <li class="product__link">
             <a href="#"><svg width="17px" height="17px" fill="#fff" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>zoom-in-glyph</title><path d="M505.75,475.58,378.42,348.25a212.3,212.3,0,0,0,48.25-134.92C426.67,95.7,331,0,213.33,0S0,95.7,0,213.33,95.7,426.67,213.33,426.67a212.3,212.3,0,0,0,134.92-48.25L475.58,505.75a21.33,21.33,0,1,0,30.17-30.17ZM277.33,234.67H234.67v42.67a21.33,21.33,0,1,1-42.67,0V234.67H149.33a21.33,21.33,0,0,1,0-42.67H192V149.33a21.33,21.33,0,0,1,42.67,0V192h42.67a21.33,21.33,0,1,1,0,42.67Z"/></svg></a> 
            </li>
            <li class="product__link">
            <a href="cart.html"> <svg width="17px" height="17px" fill="#fff" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style></style></defs><title>cart-glyph</title><path class="cls-1" d="M142.07,512H369.93a77,77,0,0,0,75.31-61.76l36.29-181.53H30.47L66.76,450.23A77,77,0,0,0,142.07,512ZM307.2,345.54a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm288-192.07H427.7L287.18,12.9a44.12,44.12,0,0,0-62.36,0L84.3,153.47H44.8a44.82,44.82,0,0,0,0,89.63H467.2a44.82,44.82,0,0,0,0-89.63Zm-346.7,0L242.92,31a18.52,18.52,0,0,1,26.16,0L391.5,153.47Z"/></svg></a> 
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
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>                    
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>                                
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>
          <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>                   
        </div>
        <div class="product__color__switch">
        ${item.colors.map((color)=> ` <span class="color__span" data-color="${color}" style = "background-color:${color};"></span>`
        ).join('')}
      
          </div>
      </div>
    </div>
  </div>`
  );
});

controlAboutNext.addEventListener("click", prevClient);
controlAboutPrev.addEventListener("click", nextClient);
setInterval(nextClient, 3000);
let itemSrc = [];
clientItem.map(function (item) {
  itemSrc.push(item.src);
});

let itemName = [];
clientItem.map(function (item) {
  itemName.push(item.name);
});

let itemJob = [];
clientItem.map(function (item) {
  itemJob.push(item.job);
});

let itemDesc = [];
clientItem.map(function (item) {
  itemDesc.push(item.desc);
});

let currentClient = 0;

function prevClient() {
  currentClient--;
  if (currentClient < 0) {
    currentClient = itemSrc.length - 1;
    currentClient = itemName.length - 1;
    currentClient = itemJob.length - 1;
    currentClient = itemDesc.length - 1;
  }
  authorImage.src = itemSrc[currentClient];
  authorName.innerHTML = itemName[currentClient];
  authorJob.innerHTML = itemJob[currentClient];
  authorCaption.innerHTML = itemDesc[currentClient];
}

function nextClient() {
  currentClient++;

  if (currentClient > itemSrc.length - 1) {
    currentClient = 0;
  }
  authorImage.src = itemSrc[currentClient];

  if (currentClient > itemName.length - 1) {
    currentClient = 0;
  }
  authorName.innerHTML = itemName[currentClient];

  if (currentClient > itemJob.length - 1) {
    currentClient = 0;
  }
  authorJob.innerHTML = itemJob[currentClient];

  if (currentClient > itemDesc.length - 1) {
    currentClient = 0;
  }
  authorCaption.innerHTML = itemDesc[currentClient];
}

formSearchInput.addEventListener('keyup', validation);
function validation(event){
 let valueTarget= event.target.value;
 const unique = productItem.map(function (item) {
  return [item.src, item];
});
let mapUnique = new Map(unique);
let mapData = [...mapUnique.values()];
let valueSearch = valueTarget.toLowerCase();
let filterData = mapData.filter(function(item){
  return item.title.includes(valueSearch);
 });
 validateFilter(filterData);
}


searchLink.addEventListener('click', openSearchWindow);
function openSearchWindow(event){
  event.preventDefault();
  searchWindow.classList.add("search__window--active");
  backgroundToggleIcon.addEventListener('click', function(){
      productList.innerHTML="";
      
    searchWindow.classList.remove('search__window--active');
  });
}

let resultsSearch=[];
function validateFilter(filterData){
  if(filterData){
    searchWindow.classList.add('search__window--display');
    productScroll.classList.add('product__scroll--active');
    productEmptyText.style.display='none';
    productList.innerHTML="";
    filterData.forEach(function(item){
   
      productList.insertAdjacentHTML('beforeend',`<div class="col-12 col-sm-6 col-md-4 col-lg-3">
      <div class="product__item">
        <div class="product__wrapper__img">
          <a href="#">
            <img class="product__img" src="${item.src}" alt="">
          </a>
          <div class="product__action__box">
            <ul class="product__wrapper__links">
              <li class="product__link">
              <a href="#"> <svg width="17px" height="17px" fill="#fff" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>heart-glyph</title><path d="M362.67,21.33A149,149,0,0,0,256,66.19,149,149,0,0,0,149.33,21.33C67,21.33,0,88.32,0,170.67a148.45,148.45,0,0,0,43.08,104.9L240.51,484a21.33,21.33,0,0,0,31,0L468.75,275.74A148.45,148.45,0,0,0,512,170.67C512,88.32,445,21.33,362.67,21.33Z"/></svg> </a> 
              </li>
              <li class="product__link">
               <a href="#"><svg width="17px" height="17px" fill="#fff" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>zoom-in-glyph</title><path d="M505.75,475.58,378.42,348.25a212.3,212.3,0,0,0,48.25-134.92C426.67,95.7,331,0,213.33,0S0,95.7,0,213.33,95.7,426.67,213.33,426.67a212.3,212.3,0,0,0,134.92-48.25L475.58,505.75a21.33,21.33,0,1,0,30.17-30.17ZM277.33,234.67H234.67v42.67a21.33,21.33,0,1,1-42.67,0V234.67H149.33a21.33,21.33,0,0,1,0-42.67H192V149.33a21.33,21.33,0,0,1,42.67,0V192h42.67a21.33,21.33,0,1,1,0,42.67Z"/></svg></a> 
              </li>
              <li class="product__link">
              <a onclick='addToUserbasket(${
                item.id
              })' href="#"> <svg width="17px" height="17px" fill="#fff" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style></style></defs><title>cart-glyph</title><path class="cls-1" d="M142.07,512H369.93a77,77,0,0,0,75.31-61.76l36.29-181.53H30.47L66.76,450.23A77,77,0,0,0,142.07,512ZM307.2,345.54a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm288-192.07H427.7L287.18,12.9a44.12,44.12,0,0,0-62.36,0L84.3,153.47H44.8a44.82,44.82,0,0,0,0,89.63H467.2a44.82,44.82,0,0,0,0-89.63Zm-346.7,0L242.92,31a18.52,18.52,0,0,1,26.16,0L391.5,153.47Z"/></svg></a> 
              </li>
              
            </ul>
          </div>
        </div>
        <div class="product__info">
          <h5 class="product__title">
            <a  href="product.html?id=${item.id}">${item.title}</a>
          </h5>
          <div class="product__price">
          <h3 class="price">تومان&nbsp;<span>${item.price}</span></h3>
          
          </div>
          <div class="product__rating">
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>                    
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>                                
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>
            <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" id="star"><path fill="none" stroke="#EFB900" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M10.2135354,0.441329894 L12.5301907,5.09668871 C12.6437709,5.3306716 12.8673229,5.49423715 13.1274534,5.53368599 L18.3127795,6.28282419 C18.5232013,6.31151358 18.713271,6.4218659 18.8407265,6.58934431 C18.9681821,6.75682272 19.0224584,6.9675444 18.9914871,7.17465538 C18.9654336,7.34490401 18.8826605,7.50177662 18.7562018,7.62057098 L15.0006864,11.2592422 C14.8108765,11.4385657 14.7257803,11.7002187 14.7744505,11.9548706 L15.679394,17.0828999 C15.7448774,17.5054355 15.4552147,17.9019154 15.0278347,17.9747311 C14.8516089,18.001936 14.6711642,17.9738576 14.5120169,17.8944663 L9.88775575,15.4776038 C9.65675721,15.3522485 9.37670064,15.3522485 9.1457021,15.4776038 L4.49429266,17.9123029 C4.1040442,18.1096521 3.62530757,17.962958 3.41740993,17.5823254 C3.33635184,17.4288523 3.30778438,17.2536748 3.33596502,17.0828999 L4.24090849,11.9548706 C4.28467865,11.7005405 4.20030563,11.441111 4.01467262,11.2592422 L0.23200891,7.62057098 C-0.0773363034,7.31150312 -0.0773363034,6.81484985 0.23200891,6.50578199 C0.358259148,6.3905834 0.515216648,6.31324177 0.684480646,6.28282419 L5.86980673,5.53368599 C6.12870837,5.49136141 6.35105151,5.32868032 6.46706943,5.09668871 L8.78372471,0.441329894 C8.87526213,0.25256864 9.04026912,0.108236628 9.24131794,0.0410719808 C9.44236677,-0.0260926667 9.66241783,-0.0103975019 9.85155801,0.0845974179 C10.0076083,0.16259069 10.1343954,0.287540724 10.2135354,0.441329894 Z" transform="translate(2.5 3)"></path></svg></span>                   
          </div>
         
  
          <div class="product__color__switch">
          ${item.colors.map((item)=> ` <span class="color__span" data-color="${item}" style = "background-color:${item};"></span>`
          ).join('')}
        
            </div>
          
        </div>
      </div>
      </div>`)
     });
  
  }
  
  if(!filterData.length){
    searchWindow.classList.remove('search__window--display');
    productScroll.classList.add('product__scroll--empty');
   productEmptyText.style.display="block";
   productEmptyText.innerHTML="هیچ محصولی یافت نشد";
   console.log('false'); 
  
   }
}

function validationForm(event){
  event.preventDefault();
  const unique = productItem.map(function (item) {
    return [item.src, item];
  });
  let mapUnique = new Map(unique);
  let mapData = [...mapUnique.values()];
  let valueSearch = formSearchInput.value.toLowerCase();
  let filterData = mapData.filter(function(item){
    return item.title.includes(valueSearch);
   });
  validateFilter(filterData);
 
}

window.addEventListener("load", setLocalStorage);
window.addEventListener("load", getLocalStorage);
window.addEventListener("load", getLocalStorageData);
