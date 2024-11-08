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

/*------------------------Theme------------------------------*/
var input2 = document.querySelector(".switch-theme__input");
let text = document.querySelector(".typity");
input2.onchange = () => {
  if (input2.checked) {
    document.body.style.backgroundColor = "#78C1F3";
    text.style.color = "#363636";
  } else {
    document.body.style.backgroundColor = "#3c4145";
    text.style.color = "white";
  }
};

// Функція для перемикання теми
function toggleTheme() {
  const body = document.body;
  const checkbox = document.getElementById("theme-switch"); // Знаходимо чекбокс

  if (checkbox.checked) {
    // Якщо чекбокс активний, застосовуємо світлу тему
    body.classList.add("light-theme");
    body.classList.remove("dark-theme");
    // Зберігаємо вибір в LocalStorage
    localStorage.setItem("theme", "light");
  } else {
    // Якщо чекбокс не активний, застосовуємо темну тему
    body.classList.add("dark-theme");
    body.classList.remove("light-theme");
    // Зберігаємо вибір в LocalStorage
    localStorage.setItem("theme", "dark");
  }
}

// Перевірка та застосування збереженої теми
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  const checkbox = document.getElementById("theme-switch");

  if (savedTheme === "light") {
    // Якщо збережена тема - світла
    document.body.classList.add("light-theme");
    document.body.classList.remove("dark-theme");
    checkbox.checked = true; // Встановлюємо чекбокс в активний стан
  } else {
    // Якщо збережена тема - темна, або немає збереженої теми
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");
    checkbox.checked = false; // Встановлюємо чекбокс в неактивний стан
  }
}

// Застосовуємо збережену тему при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
  applySavedTheme();
});

// Прив'язуємо перемикач до чекбокса
const themeToggleButton = document.getElementById("theme-switch");
themeToggleButton.addEventListener("change", toggleTheme);
