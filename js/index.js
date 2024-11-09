/*------------------------Theme------------------------------*/
var input = document.querySelector(".switch-theme__input");
let text = document.querySelector(".typity");
input.onchange = () => {
  if (input.checked) {
    document.body.style.backgroundColor = "#78C1F3";
    text.style.color = "#fff";
  } else {
    document.body.style.backgroundColor = "#3c4145";
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
/*------------------------Text------------------------------*/

let typed = "";
const element = document.querySelector(".typity");

function startType(pun, index) {
  if (index < pun.length) {
    typed += pun.charAt(index);
    element.innerHTML = typed;
    index++;
    setTimeout(function () {
      startType(pun, index);
    }, 50);
  } else {
    setTimeout(function () {
      element.classList.add("highlight");
    }, 4000);

    setTimeout(function () {
      element.classList.remove("highlight");
      typed = "";
      element.innerHTML = typed;
      startType(getRandomPun(), 0);
    }, 5000);
  }
}

function getRandomPun() {
  const puns = [
    "And create",
    "Come to this website.",
    "You want creat a password .",
  ];
  const index = Math.floor(Math.random() * puns.length);

  return puns[index];
}

startType(getRandomPun(), 0);
