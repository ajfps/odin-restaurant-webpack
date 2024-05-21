import "./style.css";
import startHome from "./home";
import startMenu from "./menu";
import startAbout from "./about";


const content = document.querySelector("#content");
const header = document.querySelector("header");
const nav = document.querySelector("nav");

function logo() {
  const logo = document.createElement("h1");
  logo.textContent = "Sample Restaurant";
  logo.classList.add("logo");

  return logo;
}

header.insertBefore(logo(), nav);


const homeBtn = document.querySelector("#homeBtn")
const menuBtn = document.querySelector("#menuBtn")
const aboutBtn = document.querySelector("#aboutBtn")

homeBtn.addEventListener("click", startHome);
menuBtn.addEventListener("click", startMenu);
aboutBtn.addEventListener("click", startAbout);

startHome();




