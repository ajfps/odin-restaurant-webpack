import foodOne from "./images/food-1.png";
import foodTwo from "./images/food-2.png";
import foodThree from "./images/food-3.png";

function startMenu() {
  content.innerHTML = "";

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const upperContainer = document.createElement("div");
  upperContainer.classList.add("upper-container");

  const lowerContainer = document.createElement("div");
  lowerContainer.classList.add("lower-container");

  const heading = document.createElement("h1");

  heading.textContent = "Our Best Sellers";

  upperContainer.appendChild(heading);

  const images = [foodOne, foodTwo, foodThree];

  images.forEach((imageSrc) => {
    const box = document.createElement("div");
    box.classList.add("lower-box");

    const title = document.createElement("h2");
    title.classList.add("lower-box-title");
    title.textContent = "Sample Title";

    const subtitle = document.createElement("p");
    subtitle.classList.add("lower-box-subtitle");
    subtitle.textContent =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";

    const price = document.createElement("h3")
    price.classList.add("lower-box-price")
    price.textContent = "$12.34"

    const image = document.createElement("img");
    image.src = imageSrc;

    box.appendChild(title);
    box.appendChild(image);
    box.appendChild(subtitle);
    box.appendChild(price)

    lowerContainer.appendChild(box);
  });

  menuContainer.appendChild(upperContainer);
  menuContainer.appendChild(lowerContainer);
  content.appendChild(menuContainer);
}

export default startMenu;
