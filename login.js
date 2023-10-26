let $ = document;
let emailInput = $.getElementById("email__input");
let passInput = $.getElementById("pass__input");

function validationLogin(event) {
  event.preventDefault();
  getLocalStorageUser();
  isLogin(users);
}

function isLogin(users) {
  let emailValue = emailInput.value;
  let passValue = passInput.value;
  emailInput.value = "";
  passInput.value = "";
  let findUser = users.some(function (user) {
    return emailValue === user.email;
  });

  users.forEach(function (user) {
    if (user.email === emailValue && user.pass === passValue) {
      window.location = "index.html";
    }
  });

  if (!findUser) {
    alert("ابتدا ثبت نام کنید");
    window.location = "register.html";
  }
}

function getLocalStorageUser() {
  let localStorageData = JSON.parse(localStorage.getItem("arrayUser"));
  if (localStorageData) {
    users = localStorageData;
  } else {
    users = [];
  }
  isLogin(users);
}
