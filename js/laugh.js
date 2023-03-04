let batmanStatus = "nolaughing";

/* sonidos */
let batmanSound = document.querySelector("#batman_laugh");

/* divs */

let batman = document.querySelector("#batman");
let buttonOnOff = document.querySelector("#button_on");
let batmanMsg = document.querySelector("#batman_msg")

console.log(batmanMsg);

buttonOnOff.addEventListener("click", () => {
  batmanControl();
});

function batmanControl() {
  if (batmanStatus == "nolaughing") {
    batmanStatus = "laughing";
    laugh();
    batman.classList.add("batman_on");
    buttonOnOff.classList.add("button_off");
    batmanMsg.style.display = "block";
  } else {
    batmanStatus = "nolaughing";
    laugh();
    batman.classList.remove("batman_on");
    buttonOnOff.classList.remove("button_off");
    batmanMsg.style.display = "none";
  }
}

function laugh() {
  if (batmanSound.paused) {
    batmanSound.play();
  } else {
    batmanSound.pause();
    batmanSound.currentTime = 0;
  }
}
