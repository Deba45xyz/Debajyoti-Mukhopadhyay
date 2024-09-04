// Toggle the dropdown menu
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('mouseover', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'block';
    });

    dropdown.addEventListener('mouseout', () => {
        dropdown.querySelector('.dropdown-content').style.display = 'none';
    });
});

// Toggle location details
document.querySelectorAll('.load-more').forEach(button => {
    button.addEventListener('click', () => {
        const locationCard = button.closest('.location-card');
        const extraContent = locationCard.querySelector('.location-extra');
        const isVisible = extraContent.style.display === 'block';
        extraContent.style.display = isVisible ? 'none' : 'block';
        button.textContent = isVisible ? 'Learn More' : 'Show Less';
    });
});
