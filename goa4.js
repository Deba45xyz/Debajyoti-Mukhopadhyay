
// Function to dynamically update the background image
function updateBackground() {
    const images = ['images/goa-texture1.jpg', 'images/goa-texture2.jpg', 'images/goa-texture3.jpg'];
    let currentIndex = 0;

    setInterval(() => {
        document.querySelector('.search-map-container').style.backgroundImage = `url(${images[currentIndex]})`;
        currentIndex = (currentIndex + 1) % images.length;
    }, 5000); // Change image every 5 seconds
}

// Initialize the background updater
document.addEventListener('DOMContentLoaded', updateBackground);
function toggleReadMore(id) {
    const content = document.getElementById(id);
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        content.classList.add('show');
    } else {
        content.classList.remove('show');
        content.classList.add('hidden');
    }
}

