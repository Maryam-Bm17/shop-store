let $ = document;
let formName = $.getElementById("form__name");
let formLastname = $.getElementById("form__lastname");
let formEmail = $.getElementById("form__email");
let password = $.getElementById("password");
let rePassword = $.getElementById("re__password");
let btnRegister = $.getElementById("btn__register");
let togglePassword = $.querySelector(".toggle-password");
let toggleRePassword = $.querySelector(".toggle-re-password");
let unError = $.getElementById('un__error');
let ulError = $.getElementById('ul__error');
let ueError = $.getElementById('ue__error');
let upError =$.getElementById('up__error');
let urpError = $.getElementById('urp__error');


let users=[];

function validation(event){
   let emailRegex = /^\w+([\._]?\w)*@\w+([\._]?\w)*(\.\w{2,4})+$/g;

  event.preventDefault();
  nameValue = formName.value;
  lastnameValue = formLastname.value;
  emailValue = formEmail.value;
  passValue = password.value;
  rePassValue = rePassword.value;

  if(passValue.length < 8 || passValue.length > 16){
    upError.style.display="block";
    upError.innerHTML="پسورد باید حداقل 8 کارکتر و حداکثر 16 کاراکتر باشد";
    return false;
  }
 if(passValue != rePassValue){
  urpError.style.display="block";
  urpError.innerHTML="پسورد و تکرار آن باید یکسان باشند.";
  return false;
 }

 let emailRegexResult = emailRegex.test(emailValue);
 if(!emailRegexResult){
  ueError.style.display="block";
  ueError.innerHTML="لطفا یک ایمیل معتبر وارد کنید.";
  return false;
 }


 let newUser = {
      id: users.length + 1,
     name: nameValue,
     lastname: lastnameValue,
     email: emailValue,
   pass: passValue,
     repass: rePassValue,
    };

   let userFind = users.some(function(user){
    return emailValue == user.email;
      });
   if(!userFind){
    users.push(newUser);
     setLocalStorageUser(users);
   }
   else{
    ueError.style.display='block';
    ueError.innerHTML="ایمیل وارد شده تکراری است";
   }

   formName.value="";
   formLastname.value="";
   formEmail.value="";
    password.value="";
   rePassword.value="";

}






function setLocalStorageUser(userList) {
  localStorage.setItem("arrayUser", JSON.stringify(users));
}

function getLocalStorageUser() {
  let localStorageData = JSON.parse(localStorage.getItem("arrayUser"));
  if (localStorageData) {
    users = localStorageData;
  } else {
    users = [];
  }
}

// formEmail.addEventListener("keyup", function (event) {
//   let emailTarget = event.target.value;
//   let emailRegexResult = emailRegex.test(emailTarget);
//   if (!emailRegexResult) {
//     modalEmail.style.display = "block";
//     modalEmail.innerHTML = "     لطفا یک ایمیل معتبر وارد کنید";
//   } else if (emailRegexResult) {
//     modalEmail.style.display = "none";
//   }
// });

// password.addEventListener("keyup", function (event) {
//   if (event.target.value.length < 8) {
//     modalPass.style.display = "block";
//     modalPass.innerHTML = "حداقل 8 کاراکتر باید داشته باشد";
//   } else if (event.target.value.length > 8) {
//     modalPass.style.display = "none";
//   }
// });

// rePassword.addEventListener("keyup", function (event) {
//   console.log(password.value);
//   console.log(event.target.value);
//   if (event.target.value != password.value) {
//     modalRePass.style.display = "block";
//     modalRePass.innerHTML = "باید با پسورد برابری کند";
//   } else if (event.target.value == password.value) {
//     modalRePass.style.display = "none";
//   }
// });

togglePassword.addEventListener("click", displayPass);
function displayPass() {
  if (password.type == "password") {
    password.type = "text";
    togglePassword.classList.add("active");
  } else {
    password.type = "password";
    togglePassword.classList.remove("active");
  }
}

toggleRePassword.addEventListener("click", displayRePass);
function displayRePass() {
  if (rePassword.type == "password") {
    rePassword.type = "text";
    toggleRePassword.classList.add("active");
  } else {
    rePassword.type = "password";
    toggleRePassword.classList.remove("active");
  }
}


window.addEventListener('load',getLocalStorageUser);