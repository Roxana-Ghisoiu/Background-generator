const css = document.querySelector("h3");
const [color1, color2, color3] = document.querySelectorAll(".color");
const body = document.querySelector("#gradient");
const colorInput = document.querySelector("#colorInput");

const createLinearGradient = () => {
  return `linear-gradient(to right, ${color1.value}, ${color2.value}, ${color3.value})`;
};

const setGradient = () => {
  const gradient = createLinearGradient();

  body.style.background = gradient;
  css.textContent = `${gradient};`;
  colorInput.value = gradient;
};

const generateRandomHexColor = () => {
  const characters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    color += characters[randomIndex];
  }

  return color;
};

const generateRandomColor = () => {
  color1.value = generateRandomHexColor();
  color2.value = generateRandomHexColor();
  color3.value = generateRandomHexColor();

  setGradient();
};

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);

setGradient();