export function displayPlaces(places, selector) {
    const containerTarget = document.querySelector(selector);
    if (!containerTarget) return;

    places.forEach((place) => {
        let placeCard = document.createElement('section');

        let name = document.createElement('h3');
        let image = document.createElement('img');
        let descriptionP = document.createElement('p');
        let addressP = document.createElement('p');
        let websiteLink = document.createElement('a');
        let container = document.createElement('div');

        let btn = document.createElement('button');


        name.textContent = place.name;

        image.setAttribute('src', place.image);
        image.setAttribute('alt', `Image of ${place.name}`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', 'auto');

        descriptionP.textContent = `${place.description}`
        descriptionP.classList.add('description');
        
        addressP.textContent = `${place.address}`
        addressP.classList.add('address');

        websiteLink.setAttribute('href', place.url);
        websiteLink.textContent = `See More`;

        btn.appendChild(websiteLink);


        container.classList.add('text-content');

        // placeCard.appendChild(name);
        container.appendChild(name);
        // placeCard.appendChild(descriptionP);
        container.appendChild(descriptionP);
        container.appendChild(addressP);
        container.appendChild(btn);
        // placeCard.appendChild(websiteLink);

        container.appendChild(image);
        placeCard.appendChild(container);

        containerTarget.appendChild(placeCard);

    });
}
