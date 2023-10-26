let $ = document;
let filterToggleLink = $.querySelector('.filter__toggle__link');
let filterSlideWrapper = $.querySelector('.filter__slide__wrapper');
let background=$.querySelector('.background');
let backgroundToggleIcon = $.querySelector('.background__toggle__icon');
let selectSort = $.querySelector('.select__sort');
let storeContainer = $.querySelector('.store__container');
let categoryLiLink = $.querySelectorAll('.category__li__link');
let productCategoryWrapper = $.querySelector('.product__category__wrapper');
let productCategoryLi = $.querySelector('.product__category__li');
let colorSwitch = $.querySelectorAll('.color__switch');

let paginationWrapper = $.querySelector('.pagination__wrapper');
let inputMin = $.getElementById('input__min');
let inputMax = $.getElementById('input__max');
let priceLebelMin = $.getElementById('price__lebel__min');
let priceLebelMax = $.getElementById('price__lebel__max');



inputMin.addEventListener('input', function(){
  filterPriceRange(productItem);
});
inputMax.addEventListener('input', function(){
  filterPriceRange(productItem);
});
function filterPriceRange(productItem){
  const minPrice = parseInt(inputMin.value);
  const maxPrice = parseInt(inputMax.value);
  console.log(minPrice);
  console.log(maxPrice);
  priceLebelMin.innerHTML = minPrice + " " +'تومان';
  priceLebelMax.innerHTML = maxPrice + " " + 'تومان';
  const unique = productItem.map(function (item) {
    return [item.src, item];
  });
  let mapUnique = new Map(unique);
  let mapData = [...mapUnique.values()];
  const filteredProducts = mapData.filter(function(item){
    return (item.price >= minPrice && item.price <= maxPrice);
  });
  storeContainer.innerHTML="";
  filteredProducts.forEach(function(item){
    addToDom(item);

  });
  
}






let currentPage = 1;
let rows=6;



function  calculateList(items,storeContainer,rows,page){
  storeContainer.innerHTML="";
  let endIndex=rows * page;
  let startIndex=endIndex - rows;
  let sliceList=items.slice(startIndex,endIndex);
  console.log(sliceList);
  sliceList.forEach(function(item){
 addToDom(item);
  });

}



function claculatePage(items,containerPage,rows){
  containerPage.innerHTML="";

  let numberPage=Math.ceil(items.length / rows);
  


  for(let i=1 ; i< numberPage + 1 ; i++){
  
      let itemLi=$.createElement('li');
      itemLi.classList.add('page__item');
      itemLi.addEventListener('click',function(){
       let itemLiActive=$.querySelector('li.page__item--active');
       itemLiActive.classList.remove('page__item--active');
       itemLi.classList.add('page__item--active');
       currentPage=i;
      calculateList(items,storeContainer,rows,currentPage);
      })
      itemLi.innerHTML=i;
      if(currentPage === i){
        itemLi.classList.add('page__item--active');
      }
      containerPage.append(itemLi);
       

     
  }

   


}




function displayFilterColor(productItem){

  colorSwitch.forEach(function(item){
    item.addEventListener('click', function(){
      let dataColor = item.dataset.color;
      const unique = productItem.map(function (item) {
        return [item.src, item];
      });
      let mapUnique = new Map(unique);
      let mapData = [...mapUnique.values()];
  
    let filterData = mapData.filter(function(item){
      return item.colors.includes(dataColor);
     });
     storeContainer.innerHTML="";
     filterData.forEach(function(item){
       addToDom(item);
     });
    });
    });
}


function displayFilterMenuCategory(productItem){
  categoryLiLink.forEach(function(item){
  item.addEventListener('click', function(event){
event.preventDefault();
let dataValue = item.dataset.value;
const unique = productItem.map(function (item) {
  return [item.src, item];
});
let mapUnique = new Map(unique);
let mapData = [...mapUnique.values()];
let productFilter = mapData.filter(function (item) {
  return item.category === dataValue;
});

storeContainer.innerHTML="";

productFilter.forEach(function(item){
  addToDom(item);

  });


  });
  });
}


filterToggleLink.addEventListener('click', showFilter);
function showFilter(event){
event.preventDefault();
 event.target.parentElement.style.display="none";
filterSlideWrapper.classList.add('filter__slide__wrapper--show');
background.classList.add('background--active');
}
backgroundToggleIcon.addEventListener('click', showFilterPage);
function showFilterPage(){
    
        filterSlideWrapper.classList.remove('filter__slide__wrapper--show');
        background.classList.remove('background--active');
         filterToggleLink.style.display="flex";
}


  

selectSort.addEventListener('change', function(){
    selectSortItem(productItem);
});

function selectSortItem(productItem){
    let subSelect = selectSort.options[selectSort.selectedIndex].value;
    const unique = productItem.map(function (item) {
        return [item.src, item];
      });
      let mapUnique = new Map(unique);
      let filterItem = productItem.filter(function(item){
        return item.value == subSelect;
     });
      let mapData = [...mapUnique.values()];
    

     if(subSelect === 'default'){
        storeContainer.innerHTML="";
     
         mapData.forEach(function (item) {
             addToDom(item);
          });
       
      }
   
      else if(subSelect === 'lowToHigh'){
      let mapDataLowToHighCopy = [...mapData];
      mapDataLowToHighCopy.sort(function(a,b){
          return a.price - b.price;
      });
      showPriceLowToHigh(mapDataLowToHighCopy);
 
      }
      else if(subSelect === 'highToLow'){
        let mapDatahighToLowCopy = [...mapData];
        mapDatahighToLowCopy.sort(function(a,b){
            return b.price - a.price;
        });
       showPriceHighToLow(mapDatahighToLowCopy);
      }
    else{
        showFilterItem(filterItem);
    }

}
function showPriceHighToLow(mapDatahighToLowCopy){
    storeContainer.innerHTML="";
    mapDatahighToLowCopy.forEach(function(item){
      addToDom(item);
  
       });
}
function showPriceLowToHigh(mapDataLowToHighCopy){
    storeContainer.innerHTML="";
    mapDataLowToHighCopy.forEach(function(item){
      addToDom(item);
       });
}

function addToDom(item){
    storeContainer.insertAdjacentHTML('beforeend',`<div class="col-md-4 col-6">
       
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
            <a href="#"> <svg width="17px" height="17px" fill="#fff" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><defs><style></style></defs><title>cart-glyph</title><path class="cls-1" d="M142.07,512H369.93a77,77,0,0,0,75.31-61.76l36.29-181.53H30.47L66.76,450.23A77,77,0,0,0,142.07,512ZM307.2,345.54a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm-64,0a12.8,12.8,0,1,1,25.6,0v76.83a12.8,12.8,0,1,1-25.6,0Zm288-192.07H427.7L287.18,12.9a44.12,44.12,0,0,0-62.36,0L84.3,153.47H44.8a44.82,44.82,0,0,0,0,89.63H467.2a44.82,44.82,0,0,0,0-89.63Zm-346.7,0L242.92,31a18.52,18.52,0,0,1,26.16,0L391.5,153.47Z"/></svg></a> 
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
</div>`)
}

function showFilterItem(filterItem){
    storeContainer.innerHTML="";
    filterItem.forEach(function(item){
    addToDom(item);
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
    selectSortItem(productItem);
     displayFilterMenuCategory(productItem);
     displayFilterColor(productItem);
     calculateList(productItem,storeContainer,rows,currentPage);
     claculatePage(productItem,paginationWrapper,rows);
     filterPriceRange(productItem);
}


window.addEventListener('load',getLocalStorage);