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
        let name = document.createElement('h2');
        let businessImage = document.createElement('img');
        let phoneNumber = document.createElement('li');
        let website = document.createElement('li');

        let websiteLink = document.createElement('a');

        let businessType = document.createElement('li');

        let details = document.createElement('ul');

        let container = document.createElement('div');

        name.textContent = `${member.name}`;
        phoneNumber.textContent = `Phone Number: ${member.phone_number}`;

        website.appendChild(websiteLink);

        websiteLink.setAttribute('href', member.url);

        websiteLink.textContent = `Website: ${member.url}`;



        businessType.textContent = `Business Type: ${member.business_type}`;

        businessImage.setAttribute('src', member.image);
        businessImage.setAttribute('alt', `Image of ${member.name}`);
        businessImage.setAttribute('loading', 'lazy');
        businessImage.setAttribute('width', '340');
        businessImage.setAttribute('height', 'auto');

        details.appendChild(phoneNumber);
        details.appendChild(website);
        details.appendChild(businessType);

        container.appendChild(businessImage);
        container.appendChild(details);

        memberCard.appendChild(name);
        memberCard.appendChild(container);

        memberCards.appendChild(memberCard);
    });
};
