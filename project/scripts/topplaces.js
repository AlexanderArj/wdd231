window.onload = function() {
  const timestamp = document.getElementById('timestamp');
  if (timestamp) {
    timestamp.value = new Date().toLocaleString();
  }
};

const topPlaces = [
  {
    title: "Ibirapuera Park",
    description: "The most famous urban park in São Paulo. It hosts museums, auditoriums, exhibition spaces, lakes, and sports areas.",
    image: "./images/ibipark.webp",
    url: "./ibirapuera.html"
  },
  {
    title: "Paulista Avenue",
    description: "One of the most iconic avenues in São Paulo, full of cultural centers, restaurants, and skyscrapers.",
    image: "./images/paulista.webp",
    url: "./paulista.html"
  },
  {
    title: "MASP",
    description:"One of the most important museums in Latin America, with an impressive collection of European and Brazilian art.",
    image: "./images/webp",
    url: "./masp.html"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const placesContainer = document.querySelector("#plans-container");
  const modal = document.querySelector("#benefits-modal");
  const modalContent = document.querySelector("#modal-content");
  const closeModalBtn = document.querySelector("#close-modal-btn");

  topPlaces.forEach((place) => {
    const card = document.createElement("div");
    card.className = "place-card";

    card.innerHTML = `
      <h2>${place.title}</h2>
      <button class="see-more-btn">See More</button>
    `;

    placesContainer.appendChild(card);

    const seeMoreBtn = card.querySelector(".see-more-btn");
    seeMoreBtn.addEventListener("click", () => {
      modalContent.innerHTML = `
        <img src="${place.image}" alt="${place.title}" class="modal-image">
        <h3>${place.title}</h3>
        <p>${place.description}</p>
        <a href="${place.url}" class="visit-link">Visit Page</a>
      `;
      modal.showModal();
    });
  });

  closeModalBtn.addEventListener("click", () => {
    modal.close();
  });
});
