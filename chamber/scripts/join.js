window.onload = function() {
  document.getElementById('timestamp').value = new Date(); };
  

const membershipPlans = [
  {
    title: "NP Membership",
    description: "For non-profit organizations.",
    fee: "No fee",
    benefits: [
      "Inclusion in the online member directory.",
      "Access to community networking events.",
      "Subscription to the monthly newsletter.",
      "Publication of news and events on our website."
    ]
  },
  {
    title: "Bronze Membership",
    description: "Ideal for small businesses and entrepreneurs.",
    fee: "$100 / year",
    benefits: [
      "All the benefits of the NP plan.",
      "Special discounts on workshops and seminars.",
      "Opportunity to sponsor one event per year.",
      "Preferential access to our job board."
    ]
  },
  {
    title: "Silver Membership",
    description: "Perfect for growing companies seeking greater visibility.",
    fee: "$200 / year",
    benefits: [
      "All the benefits of the Bronze plan.",
      "Company logo featured on the website's homepage.",
      "Two promotional posts on our social media per year.",
      "Opportunity to participate in exclusive chamber committees."
    ]
  },
  {
    title: "Gold Membership",
    description: "Maximum exposure and influence for established companies.",
    fee: "$350 / year",
    benefits: [
      "All the benefits of the Silver plan.",
      "Seat on the chamber's advisory board.",
      "Main sponsorship of our most important annual event.",
      "Featured article about your company in our quarterly report."
    ]
  }
];

document.addEventListener("DOMContentLoaded", () => {

  const plansContainer = document.querySelector("#plans-container");
  const modal = document.querySelector("#benefits-modal");

  const modalContent = document.querySelector("#modal-content");
  const closeModalBtn = document.querySelector("#close-modal-btn");

  membershipPlans.forEach((plan) => {

    const card = document.createElement("div");
    card.className = "plan-card";

    card.innerHTML = `
      <h2>${plan.title}</h2>
      <p>${plan.description}</p>
      <button class="open-button">Learn More</button>
    `;

    plansContainer.appendChild(card);

    const openBtn = card.querySelector(".open-button");

    openBtn.addEventListener("click", () => {

      modalContent.innerHTML = `
        <h3>${plan.title}</h3>
        <p><strong>Fee:</strong> ${plan.fee}</p>
        <ul>
          ${plan.benefits.map(benefit => `<li>${benefit}</li>`).join("")}
        </ul>
      `;

      modal.showModal();


    });
  });

  closeModalBtn.addEventListener("click", () => {
    modal.close(); });

});
