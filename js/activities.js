const activities = [
  {
    title: "Vieux Port",
    imageUrl:
      "../assets/activites/4_small/reno-laithienne-QUgJhdY5Fyk-unsplash.jpg",
  },
  {
    title: "Fort de Pomègues",
    imageUrl:
      "../assets/activites/4_small/paul-hermann-QFTrLdQIRhI-unsplash.jpg",
  },
  {
    title: "Îles de Frioul",
    imageUrl:
      "../assets/activites/4_small/kevin-hikari-rV_Qd1l-VXg-unsplash.jpg",
  },
  {
    title: "Parc National des Calanques",
    imageUrl:
      "../assets/activites/4_small/kilyan-sockalingum-NR8-cBCN3aI-unsplash.jpg",
  },
  {
    title: "Notre-Dame-de-la-Garde",
    imageUrl:
      "../assets/activites/4_small/florian-wehde-xW9e8gdotxI-unsplash.jpg",
  },
  {
    title: "Parc Longchamp",
    imageUrl:
      "../assets/activites/4_small/lena-paulin-wH2-EJoDcV0-unsplash.jpg",
  },
];

// Function to create an activity card
const createActivityCard = ({ title, imageUrl, alt }) => {
  // Create <li> element
  const activityItem = document.createElement("li");
  activityItem.className = "activities__list__item";

  // Create <a> element
  const activityItemLink = document.createElement("a");
  activityItemLink.href = "#";

  // Create image element
  const activityItemImg = document.createElement("img");
  activityItemImg.src = imageUrl;
  activityItemImg.alt = alt;

  // Create title element
  const activityItemTitle = document.createElement("h3");
  activityItemTitle.textContent = title;

  // Append image and title to the link
  activityItemLink.appendChild(activityItemImg);
  activityItemLink.appendChild(activityItemTitle);

  // Append link to the list item
  activityItem.appendChild(activityItemLink);

  return activityItem;
};

// Function to add activity cards to the list
const createActivityItems = () => {
  // Select the parent element
  const parentElement = document.querySelector(".activities__list");

  // Iterate through the activities array and add each card to the parent
  activities.forEach((data) => {
    const card = createActivityCard(data);
    parentElement.appendChild(card);
  });
};
createActivityItems();
