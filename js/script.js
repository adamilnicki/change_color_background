let button = document.querySelector("button");
let bgColor = document.querySelector("body");
let colors = ["red", "blue", "green", "yellow", "orange", "purple"];

button.addEventListener("click", function colorChange(){
  let ran = Math.floor(Math.random()*6);
  bgColor.style.background = colors[ran];
});