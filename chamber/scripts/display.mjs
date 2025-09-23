export function displayMembers(members, selector) {
    const containerTarget = document.querySelector(selector);
    if (!containerTarget) return;

    members.forEach((member) => {
        let memberCard = document.createElement('section');
        let name = document.createElement('h3');
        let image = document.createElement('img');
        let phoneNumber = document.createElement('p');
        let websiteLink = document.createElement('a');
        let businessEmail = document.createElement('p');
        let container = document.createElement('div');

        name.textContent = member.name;
        phoneNumber.textContent = `Phone Number: ${member.phone_number}`;

        websiteLink.setAttribute('href', member.url);
        websiteLink.textContent = `Website: ${member.url}`;

        businessEmail.textContent = `Email: ${member.email}`;

        image.setAttribute('src', member.image);
        image.setAttribute('alt', `Image of ${member.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '340');
        image.setAttribute('height', 'auto');

        memberCard.appendChild(name);
        memberCard.appendChild(image);

        container.appendChild(businessEmail);
        container.appendChild(phoneNumber);
        container.appendChild(websiteLink);

        memberCard.appendChild(container);
        containerTarget.appendChild(memberCard);
    });
}
