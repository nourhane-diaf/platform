document.addEventListener('DOMContentLoaded', () => {
    const enrollButtons = document.querySelectorAll('.enroll-btn');
    enrollButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Thank you for enrolling! We will contact you shortly.');
        });
    });
});
