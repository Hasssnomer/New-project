const btn = document.querySelector("#btn");
const input = document.querySelector("#input");
btn.addEventListener("click", function () {
    input.style.backgroundColor = "#" + Math.floor(Math.random()*1000000);
    btn.style.backgroundColor = "#" + Math.floor(Math.random()*1000000);



});