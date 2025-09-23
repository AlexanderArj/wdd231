const memberCards = document.querySelector('#sections');
const gridbutton = document.querySelector('#gridBtn');
const listbutton = document.querySelector('#listBtn');

export function viewMode() {
    gridbutton.addEventListener("click", () => {
        memberCards.classList.remove("list");
    });

    listbutton.addEventListener("click", () => {
        memberCards.classList.add("list");
    });
}
