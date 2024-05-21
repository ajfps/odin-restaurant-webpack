import Restaurant from './images/restaurant.png';

function startAbout() {
    content.innerHTML = '';

    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    content.appendChild(aboutContainer);

    const image = document.createElement("img");
    image.src = Restaurant;

    aboutContainer.appendChild(image);

    const container = document.createElement("div");
    container.classList.add("about-right-container");

    aboutContainer.appendChild(container);

    const heading = document.createElement("h1");
    heading.textContent = "Why choose us?";

    container.appendChild(heading);

    const paragraph = document.createElement("p");
    paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt";

    container.appendChild(paragraph);

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");

    const phone = document.createElement("p");
    phone.textContent = "Phone: (123) 456-7890";
    contactInfo.appendChild(phone);

    const email = document.createElement("p");
    email.textContent = "Email: info@example.com";
    contactInfo.appendChild(email);

    const address = document.createElement("p");
    address.textContent = "Address: 123 Main St, Anytown, USA";
    contactInfo.appendChild(address);

    container.appendChild(contactInfo);
}

export default startAbout;
