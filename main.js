const button = document.querySelector(".btn");
const AnimationB = document.querySelectorAll(".container span");
const inputBox = document.querySelectorAll(".input-box input");

button.onclick = function () {
  button.setAttribute("disabled", "");

  inputBox.forEach(function (ele) {
    ele.setAttribute("readonly", "");
  });
  AnimationB.forEach(function (ele) {
    ele.classList = "clickAni";
  });
};
