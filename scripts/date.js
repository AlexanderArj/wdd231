const currentYear = document.querySelector("#year");

const lastModification = document.querySelector("#lastmodification");

const lastModifiedDate = new Date(document.lastModified);

currentYear.innerHTML = `<span class="highlight">${lastModifiedDate.getFullYear()}</span>`;

lastModification.innerHTML = `<span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
        dateStyle: "short",
        timeStyle: "medium",
        hour12: false
    }
).format(lastModifiedDate)}</span>`;
