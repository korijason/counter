const increaseA = document.getElementById("increase");
const decreaseA = document.getElementById("decrease");
const resetA = document.getElementById("reset");
const displayA = document.getElementById("display");
let count = 0;

increaseA.onclick = function () {
  count++;
  displayA.textContent = count;
};
decreaseA.onclick = function () {
  count--;
  displayA.textContent = count;
};
resetA.onclick = function () {
  count = 0;
  displayA.textContent = count;
};
