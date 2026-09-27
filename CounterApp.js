var value = 0;
var counter = document.getElementById("counter");

var button_increment = document.getElementById("button_increment");
var button_decrement = document.getElementById("button_decrement");
var button_reset = document.getElementById("button_reset");

button_increment.onclick = function() {
  value++;
  counter.innerHTML = value;
};

button_decrement.onclick = function() {
  value--;
  counter.innerHTML = value;
};

button_reset.onclick = function() {
  value = 0;
  counter.innerHTML = value;
};