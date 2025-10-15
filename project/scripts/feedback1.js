document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('.review-form');
    const stars = form.querySelectorAll('input[name="stars"]');
    const mensajeDeError = document.getElementById('rating-message');

    form.addEventListener('submit', e => {
        mensajeDeError.textContent = '';

        const seleccionado = form.querySelector('input[name="stars"]:checked');

        if (!seleccionado) {
            e.preventDefault();
            mensajeDeError.textContent = 'Please complete the star rating.';
            mensajeDeError.style.color = 'red';
            mensajeDeError.style.textAlign = 'center';
        }
    });

    stars.forEach(radio => {
        radio.addEventListener('change', () => {
            mensajeDeError.textContent = '';
        });
    });
});
