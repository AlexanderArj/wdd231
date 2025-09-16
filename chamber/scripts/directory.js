const dataJson = './data/members.json';
const memberCards = document.querySelector('#sections');

async function getMemberData() {
    const response = await fetch(dataJson);
    const data = await response.json();
    console.table(data.members);
    displayMembers(data.members);
}

getMemberData();

const displayMembers = (members) => {
    members.forEach((member) => {

        let memberCard = document.createElement('section');
        let name = document.createElement('h3');
        let image = document.createElement('img');
        let phoneNumber = document.createElement('p');
        let websiteLink = document.createElement('a');
        let businessEmail = document.createElement('p');

        let container = document.createElement('div');

        name.textContent = `${member.name}`;
        phoneNumber.textContent = `Phone Number: ${member.phone_number}`;

        websiteLink.setAttribute('href', member.url);
        websiteLink.textContent = `Website: ${member.url}`;

        businessEmail.textContent = `Email: ${member.email}`;


        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Image of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        // todas las imagenes con un widht de 340
        image.setAttribute('height', 'auto');


        memberCard.appendChild(name);
        memberCard.appendChild(image);
        // correo de la empresa

        container.appendChild(businessEmail);

        container.appendChild(phoneNumber);
        container.appendChild(websiteLink);

        memberCard.appendChild(container);

        memberCards.appendChild(memberCard);
    });
};

const gridbutton = document.querySelector('#gridBtn');
const listbutton = document.querySelector('#listBtn');

// revisar esto, se declaran dos variables que toman al mimso id?

gridbutton.addEventListener("click", () => {
	memberCards.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	memberCards.classList.add("list");
}



