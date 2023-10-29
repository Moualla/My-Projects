const up = document.getElementById("up");
const down = document.getElementById("down");
const circle =document.getElementById("circle");
var rotatevalue = circle.style.transform;
var rotatesum;

up.onclick = function ()
 {
    rotatesum= rotatevalue + "rotate(-90deg)";
    circle.style.transform = rotatesum;
    rotatevalue=rotatesum;
}
down.onclick = function ()
 {
    rotatesum= rotatevalue + "rotate(90deg)";
    circle.style.transform = rotatesum;
    rotatevalue=rotatesum;
}

