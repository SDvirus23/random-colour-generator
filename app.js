const btn = document.querySelector("#btn");
const msg = document.querySelector("#msg");
const bodys = document.querySelector("body");

const getcolor = () => {
  const randomecolor = Math.floor(Math.random() * 16777215); //for hexa decimel number
  const randomecode = "#" + randomecolor.toString(16); //for randome code

  bodys.style.backgroundColor = randomecode;
  msg.innerText = randomecode;
  navigator.clipboard.writeText(randomecode);
};
btn.addEventListener("click", () => {
  getcolor();
});
getcolor();
