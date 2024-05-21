import "./style.css";
import homeImage from "./images/homeImage.png";

function startHome() {

    content.innerHTML = '';

    function heading() {
      const heading = document.createElement("h1");
      heading.textContent = "Welcome to Sample Restaurant!";
      heading.classList.add("home-heading");
      return heading;
    }
  
    function image() {
      const img = document.createElement("img");
      img.src = homeImage;
      img.classList.add("home-image");
      return img;
    }
  
    function paragraph() {
      const paragraph = document.createElement("p");
      paragraph.textContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
      paragraph.classList.add("home-paragraph");
      return paragraph;
    }
  
    function button() {
      const button = document.createElement("button");
      button.textContent = "Place an Order Now!";
      button.classList.add("home-button");
  
      return button;
    }
  
    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");
  
    const leftContainer = document.createElement("div");
    leftContainer.classList.add("left-container");
  
    const rightContainer = document.createElement("div");
    rightContainer.classList.add("right-container");
  
    homeContainer.appendChild(leftContainer);
    homeContainer.appendChild(rightContainer);
  
    const headingElement = heading();
    const imageElement = image();
    const paragraphElement = paragraph();
    const buttonElement = button();
  
    content.appendChild(homeContainer);
    rightContainer.appendChild(imageElement);
    leftContainer.appendChild(headingElement);
    leftContainer.appendChild(paragraphElement);
    leftContainer.appendChild(buttonElement);
  }

  export default startHome;