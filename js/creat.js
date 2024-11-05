/*------------------------creat------------------------------*/
let input = document.getElementsByClassName("creat__password")[0];
let button = document.getElementsByClassName("creat__button")[0]; // Перша кнопка
button.addEventListener("click", CreatP);
let password = "";

function CreatP() {
  let i = 0;
  for (; i < 20; i++) {
    getRandomCharacter();
  }
  input.value = password;
  if (i == 20) {
    remove();
  }
  console.log(password);
}

function getRandomCharacter() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_+-=;:,.?";
  const randomIndex = Math.floor(Math.random() * characters.length);
  password += characters[randomIndex];
}
function remove() {
  password = "";
}

let copy = document.getElementsByClassName("creat__copy")[0];
copy.addEventListener("click", cOpy);
function cOpy() {
  navigator.clipboard.writeText(input.value);
}
