const accomodations = [
  {
    title: "auberge la cannebière",
    price_per_night: "25€",
    notation: "4",
    imageUrl:
      "./assets/hebergements/4_small/marcus-loke-WQJvWU_HZFo-unsplash.jpg",
    popular: false,
  },
  {
    title: "hôtel du port",
    price_per_night: "25",
    notation: "5",
    imageUrl:
      "./assets/hebergements/4_small/fred-kleber-gTbaxaVLvsg-unsplash.jpg",
    popular: false,
  },
  {
    title: "hôtel les mouettes",
    price_per_night: "76",
    notation: "4",
    imageUrl:
      "./assets/hebergements/4_small/reisetopia-B8WIgxA_PFU-unsplash.jpg",
    popular: false,
  },
  {
    title: "hôtel de la mer",
    price_per_night: "46",
    notation: "3",
    imageUrl:
      "./assets/hebergements/4_small/annie-spratt-Eg1qcIitAuA-unsplash.jpg",
    popular: false,
  },
  {
    title: "auberge le panier",
    price_per_night: "23",
    notation: "4",
    imageUrl:
      "./assets/hebergements/4_small/nicate-lee-kT-ZyaiwBe0-unsplash.jpg",
    popular: false,
  },
  {
    title: "hôtel chez amina",
    price_per_night: "96",
    notation: "5",
    imageUrl:
      "./assets/hebergements/4_small/febrian-zakaria-M6S1WvfW68A-unsplash.jpg",
    popular: false,
  },
  {
    title: "hôtel le soleil du matin",
    price_per_night: "128",
    notation: "5",
    imageUrl:
      "./assets/hebergements/4_small/emile-guillemot-Bj_rcSC5XfE-unsplash.jpg",
    popular: true,
  },
  {
    title: "au coeur de l'eau \n chambre d'hôtes",
    price_per_night: "91",
    notation: "4",
    imageUrl:
      "./assets/hebergements/4_small/aw-creative-VGs8z60yT2c-unsplash.jpg",
    popular: true,
  },
  {
    title: "hôtel tout bleu et blanc",
    price_per_night: "68",
    notation: "4",
    imageUrl:
      "./assets/hebergements/4_small/febrian-zakaria-sjvU0THccQA-unsplash.jpg",
    popular: true,
  },
];

// Function to create the stars element
const createStars = (notation) => {
  const stars = document.createElement("span");
  const starCount = 5; // Total number of stars

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("i");
    star.className =
      i < notation
        ? "fas fa-star bleu notation--blue" // Filled star
        : "fas fa-star gris notation--grey"; // Grey star
    stars.appendChild(star);
  }
  return stars;
};

// Function to create a standard accommodation card
const createAccomodationCard = ({
  title,
  price_per_night,
  notation,
  imageUrl,
}) => {
  // Create <li> element
  const item = document.createElement("li");
  item.className = "accomodations__content__list__item";

  // Create <a> element
  const itemLink = document.createElement("a");
  itemLink.href = "#";

  // Create image element
  const itemImg = document.createElement("img");
  itemImg.src = imageUrl;
  itemImg.alt = `${title}`;

  // Create the main container
  const itemContent = document.createElement("div");

  // Create title and price
  const itemTitle = document.createElement("h3");
  itemTitle.textContent = title;
  itemTitle.style.textTransform = "capitalize";

  const itemPrice = document.createElement("p");
  itemPrice.textContent = `Nuit à partir de ${price_per_night}€`;

  // Create stars
  const stars = createStars(notation);

  // Append elements to the main container
  itemContent.appendChild(itemTitle);
  itemContent.appendChild(itemPrice);
  itemContent.appendChild(stars);

  // Append the image and main container to the link
  itemLink.appendChild(itemImg);
  itemLink.appendChild(itemContent);

  // Append the link to the list item
  item.appendChild(itemLink);

  return item;
};

// Function to create a popular accommodation card
const createPopularAccomodationCard = ({
  title,
  price_per_night,
  notation,
  imageUrl,
}) => {
  // Create <li> element
  const popularItem = document.createElement("li");
  popularItem.className = "accomodations__popular__list__item";

  // Create <a> element
  const popularItemLink = document.createElement("a");
  popularItemLink.href = "#";

  // Create image element
  const popularItemImg = document.createElement("img");
  popularItemImg.src = imageUrl;
  popularItemImg.alt = `Logement populaire : ${title}`;

  // Create containers
  const popularItemOuterDiv = document.createElement("div");
  const popularItemInnerDiv = document.createElement("div");

  // Create title and price
  const popularItemTitle = document.createElement("h3");
  popularItemTitle.textContent = title;
  popularItemTitle.style.textTransform = "capitalize";

  const popularItemPrice = document.createElement("p");
  popularItemPrice.textContent = `Nuit à partir de ${price_per_night}€`;

  // Append title and price to the inner container
  popularItemInnerDiv.appendChild(popularItemTitle);
  popularItemInnerDiv.appendChild(popularItemPrice);

  // Create stars
  const stars = createStars(notation);

  // Append elements to the outer container
  popularItemOuterDiv.appendChild(popularItemInnerDiv);
  popularItemOuterDiv.appendChild(stars);

  // Append the image and outer container to the link
  popularItemLink.appendChild(popularItemImg);
  popularItemLink.appendChild(popularItemOuterDiv);

  // Append the popularItemLink to the list item
  popularItem.appendChild(popularItemLink);

  return popularItem;
};

// Function to add accommodations to the main list
const createAccomodationItems = () => {
  const parentElement = document.querySelector(".accomodations__content__list");
  accomodations
    .filter((item) => !item.popular) // Filter non-popular items
    .forEach((item) => {
      const card = createAccomodationCard(item);
      parentElement.appendChild(card);
    });
};

// Function to add popular accommodations to the list
const createPopularAccomodationItems = () => {
  const parentElement = document.querySelector(".accomodations__popular__list");
  accomodations
    .filter((item) => item.popular) // Filter popular items
    .forEach((item) => {
      const card = createPopularAccomodationCard(item);
      parentElement.appendChild(card);
    });
};

// Initialization
createAccomodationItems();
createPopularAccomodationItems();
