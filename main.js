const button = document.querySelector(".btn");
const inputLap= document.querySelectorAll(".input-box label");
const inputBox = document.querySelectorAll(".input-box input");
const AnimationB = document.querySelectorAll(".container span");


  button.onclick = function () {
    // disable button job after login
    button.setAttribute("disabled", "");
    // Style label after login
    inputLap.forEach(function (ele) {ele.style.cssText = " top: 1px;font-size: 0.8em;background-color: #192f3a; padding: 0 4px;color: #0ef;";
    });
    // Disable writing input after login 
    inputBox.forEach(function (ele) {
      ele.setAttribute("readonly", "");
    });
    // animation after login
    AnimationB.forEach(function (ele) {
      ele.classList = "clickAni";
    });
  };


