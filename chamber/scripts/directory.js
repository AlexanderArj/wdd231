const dataJson = './data/members.json';
const memberCards = document.querySelector('#business-info');

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
        let businessImage = document.createElement('img');
        let phoneNumber = document.createElement('p');

        let websiteLink = document.createElement('a');

        let businessType = document.createElement('p');

        let container = document.createElement('div');

        let containerImg = document.createElement('div');


        name.textContent = `${member.name}`;
        phoneNumber.textContent = `Phone Number: ${member.phone_number}`;

        websiteLink.setAttribute('href', member.url);

        websiteLink.textContent = `Website: ${member.url}`;

        businessType.textContent = `Business Type: ${member.business_type}`;

        businessImage.setAttribute('src', member.image);
        businessImage.setAttribute('alt', `Image of ${member.name}`);
        businessImage.setAttribute('loading', 'lazy');
        businessImage.setAttribute('width', '340');
        businessImage.setAttribute('height', 'auto');

        container.appendChild(phoneNumber);
        container.appendChild(websiteLink);
        container.appendChild(businessType);

        containerImg.appendChild(businessImage);

        containerImg.setAttribute('id', 'c-img');

    
        memberCard.appendChild(name);
        memberCard.appendChild(containerImg);
        memberCard.appendChild(container);

        memberCards.appendChild(memberCard);
    });
};

const gridbutton = document.querySelector('#grid');
const listbutton = document.querySelector('#list');
const display = document.querySelector('#business-info');


gridbutton.addEventListener("click", () => {
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
}



