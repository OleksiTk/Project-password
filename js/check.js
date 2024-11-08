/*------------------------Theme------------------------------*/
var input = document.querySelector(".switch-theme__input");
let text = document.querySelector(".typity");
input.onchange = () => {
  if (input.checked) {
    document.body.style.backgroundColor = "#78C1F3";
    text.style.color = "#363636";
  } else {
    document.body.style.backgroundColor = "#3c4145";
    text.style.color = "white";
  }
};

// Функція для перемикання теми
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
/*------------------------Check------------------------------*/

let input2 = document.getElementsByClassName("check__password")[0];
let button = document.getElementsByClassName("check__button")[0];
let number = "1234567890";
let symbol = "'\"<>/?,.;:[]\\{}+-=)(*&^%$#@!";
let lettersEN = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let lettersUA =
  "ЙЦУКЕНГШЩЗХЇФІВАПРОЛДЖЄЯЧСМИТЬБЮйцукенгшщзхїфівапролджєячсмитьбю";
let percentage = 0;
button.addEventListener("click", Check);
let grade = document.getElementsByClassName("Grade")[0];
function Check() {
  // Оновлюємо значення пароля при кожному кліку
  let password = input2.value;
  percentage = 0; // Очищаємо попередній результат перед новою перевіркою
  Allcheck(number, password);
  Allcheck(symbol, password);
  Allcheck(lettersEN, password);
  Allcheck(lettersUA, password);
  lengthPassword(password);
  grade.innerHTML = percentage;
}

function Allcheck(chars, password) {
  for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < chars.length; j++) {
      if (password[i] == chars[j]) {
        percentage++;
        console.log(percentage); // Додає до проценту і виводить
        return; // Зупиняє виконання після першого збігу
      }
    }
  }
}

function lengthPassword(password) {
  // Перевірка довжини пароля
  if (password.length >= 10) {
    percentage++;
    console.log(percentage); // Збільшує процент за довжину пароля
  }
}
