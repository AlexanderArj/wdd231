document.addEventListener('DOMContentLoaded', () => {

    const urlParams = new URLSearchParams(window.location.search);

    const firstName = urlParams.get('first_name');
    const lastName = urlParams.get('last_name');
    const email = urlParams.get('email');
    const phone = urlParams.get('phone');
    const organization = urlParams.get('organization');
    const timestamp = urlParams.get('timestamp');

    const formattedDate = new Date(timestamp).toLocaleString('en-US', {
        dateStyle: 'long',
        timeStyle: 'short'
    });

    document.getElementById('firstNameDisplay').textContent = firstName;
    document.getElementById('lastNameDisplay').textContent = lastName;
    document.getElementById('emailDisplay').textContent = email;
    document.getElementById('phoneDisplay').textContent = phone;
    document.getElementById('organizationDisplay').textContent = organization;
    document.getElementById('timestampDisplay').textContent = formattedDate;

    
});
