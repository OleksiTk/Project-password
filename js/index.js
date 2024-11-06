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
