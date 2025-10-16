document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);

    const stars = urlParams.get('stars');
    const tips = urlParams.getAll('tips');
    const review = urlParams.get('review');
    const name = urlParams.get('name');
    const email = urlParams.get('email');

    const tipLabels = {
        weather: "Information about the weather in the country",
        general: "General information about the destination",
        bestTime: "Best time to travel",
        food: "Food recommendations"
    };

    let fStars;
    if (stars) {
        fStars = `${stars} stars`;
    } else {
        fStars = 'No rating provided';
    }

    let fTips;
    if (tips.length > 0) {
        const rTips = tips.map(tip => tipLabels[tip] || tip);
        fTips = rTips.join(', ');
    } 
    
    else{
        formattedTips = 'No tips selected'; }

    let fReview;
    if (review) {
        fReview = review;
    } else {
        fReview = 'No comments';
    }

    let fName;
    if (name) {
        fName = name;
    } else {
        fName = 'Anonymous';
    }

    let fEmail;
    if (email) {
        fEmail = email;
    } else {
        fEmail = 'No email provided';
    }

    const fDate = new Date().toLocaleString('en-US', {
        dateStyle: 'long',
        timeStyle: 'short'
    });

    const summaryContainer = document.getElementById('reviewSummary');

    summaryContainer.innerHTML = `
        <h2>Thank you for your review!</h2>
        <p><strong>Rating:</strong> ${fStars}</p>
        <p><strong>Useful Information Selected:</strong> ${fTips}</p>
        <p><strong>Your Comment:</strong> ${fReview}</p>
        <p><strong>Name:</strong> ${fName}</p>
        <p><strong>Email:</strong> ${fEmail}</p>
        <p><strong>Submitted on:</strong> ${fDate}</p>
    `;
});
