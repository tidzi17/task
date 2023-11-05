

const featuredHomes = [
    {
        id: 1,
        alt: "House 1",
        image: "./src/assets/assets/images/property-1.jpg",
        price: '$35000',
        description: "8502 Preston Rd. Inglewood, Maine 98280",
        beds: '5',
        bath: '2',
        sqft: '2000'
    },
    {
        id: 2,
        alt: "House 2",
        image: "./src/assets/assets/images/property-2.jpg",
        price: '$35000',
        description: "8502 Preston Rd. Inglewood, Maine 98280",
        beds: '5',
        bath: '2',
        sqft: '2000'
    },
    {
        id: 3,
        alt: "House 2",
        image: "./src/assets/assets/images/property-3.jpg",
        price: '$35000',
        description: "8502 Preston Rd. Inglewood, Maine 98280",
        beds: '5',
        bath: '2',
        sqft: '2000'
    }
]

const housesDiv = document.getElementById("housesPictures");

featuredHomes.forEach((home) => {
    const card = document.createElement("div");
    card.classList.add("house-card");

    card.innerHTML = `
        <img src="${home.image}" alt="${home.alt}">
        <div class="card-info">
        <div class="price">${home.price}</div>
        <div class="description">${home.description}</div>
        <div class="features">
            <div class="feature-item"><img src="./src/assets/assets/images/cards-icons/bedicon.png"></img><p>${home.beds} Beds</p></div>
            <div class="feature-item"><img src="./src/assets/assets/images/cards-icons/bathicon.png"></img><p>${home.bath} Bath</p></div>
            <div class="feature-item"><img src="./src/assets/assets/images/cards-icons/sqfticon.png"></img><p>${home.sqft} Sqft</p></div>
        </div>
        </div>
    `;

    housesDiv.appendChild(card);
});

const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute
        ('data-target');
        const c = +counter.innerText;

        const increment = target / 250;

        if (c < target){
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = c === 5000 ? '5000+' : c === 170 ? '170+' : target;
        }
    };
    updateCounter();
});

const titles = ["Product", "Resources", "Company"];
const items = [
    ["Listing", "Property", "Agents", "Blog"],
    ["Our Homes", "Member Stories", "Video", "Free Trial"],
    ["Partnerships", "Terms of use", "Privacy", "Sitemap"],
];

const menuContainer = document.querySelector('.footer-container__content__menu');

titles.forEach((title, index) => {
    const titleElement = document.createElement('h3');
    titleElement.textContent = title;

    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item'); // Add the "menu-item" class

    const itemsList = document.createElement('ul');
    items[index].forEach((item) => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        itemsList.appendChild(listItem);
    });

    menuItem.appendChild(titleElement);
    menuItem.appendChild(itemsList);
    menuContainer.appendChild(menuItem);
});
const lastItem = document.getElementById('last-item');
menuContainer.appendChild(lastItem);


document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-button');

    menuButton.addEventListener('click', () => {
        menuButton.classList.add('active');
    });

    closeButton.addEventListener('click', () => {
        menuButton.classList.remove('active');
    });
});

