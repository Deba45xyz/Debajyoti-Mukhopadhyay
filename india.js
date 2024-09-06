document.addEventListener("DOMContentLoaded", function () {
    const pin = document.getElementById('draggable-pin');
    const highlight = document.getElementById('highlight');
    let isDragging = false;

    pin.addEventListener('mousedown', function (e) {
        isDragging = true;
        const offsetX = e.clientX - pin.getBoundingClientRect().left;
        const offsetY = e.clientY - pin.getBoundingClientRect().top;

        document.onmousemove = function (e) {
            if (isDragging) {
                let x = e.clientX - offsetX;
                let y = e.clientY - offsetY;

                // Set the new position while preventing the pin from going out of bounds
                const mapContainer = document.querySelector('.map-container');
                const mapRect = mapContainer.getBoundingClientRect();

                // Ensure the pin stays inside the map boundaries
                if (x >= mapRect.left && x <= mapRect.right - pin.offsetWidth) {
                    pin.style.left = x + 'px';
                }
                if (y >= mapRect.top && y <= mapRect.bottom - pin.offsetHeight) {
                    pin.style.top = y + 'px';
                }

                // Update the position of the highlight to follow the pin
                highlight.style.left = x - 65 + 'px';
                highlight.style.top = y - 65 + 'px';
                highlight.style.display = 'block';
            }
        };
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
        document.onmousemove = null;

        // Get the final position of the pin and check if it's in a certain region
        const pinX = pin.getBoundingClientRect().left;
        const pinY = pin.getBoundingClientRect().top;

        // Check regions and redirect to the appropriate page
        if (isInRegion(pinX, pinY, 'goa')) {
            window.location.href = "goa4.html";
        } else if (isInRegion(pinX, pinY, 'delhi')) {
            window.location.href = "delhi.html";
        }
        // Add more states as needed
    });

    // Function to check if the pin is inside a region (specific coordinates for each state)
    function isInRegion(pinX, pinY, state) {
        const regions = {
            goa: { xMin: 600, xMax: 800, yMin: 500, yMax: 700 }, // Example coordinates for Goa
            delhi: { xMin: 300, xMax: 500, yMin: 200, yMax: 400 }  // Example coordinates for Delhi
        };

        if (regions[state]) {
            const region = regions[state];
            return (pinX >= region.xMin && pinX <= region.xMax && pinY >= region.yMin && pinY <= region.yMax);
        }
        return false;
    }
});
