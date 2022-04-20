var btn = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

btn.addEventListener("click", function () {
    console.log(input.value)
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = " ";

})
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body1 = document.getElementById("tom");

function setgradient() {
    body1.style.background  = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.textContent = body1.style.background+",";
}


color1.addEventListener("input", setgradient);
color2.addEventListener("input", setgradient); 