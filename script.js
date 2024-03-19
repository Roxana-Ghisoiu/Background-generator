var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
    body.style.background = "linear-gradient(to right, " 
    + color1.value
    +","
    +color2.value
    + ")";

    css.textContent = body.style.background + ";";
}


function generateRandomColor() {
    //Generate random RGB values
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);

    //Convert to hexadecimal format
    const hexColor = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;

    // Set the input field value
    document.getElementById("colorInput").value = hexColor;

}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);



