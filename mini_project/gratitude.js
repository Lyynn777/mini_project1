// gratitude.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('gratitude-form');
    const gratitudeInput = document.getElementById('gratitude-input');
    const gratitudeList = document.getElementById('gratitude-list');

    // Function to add a gratitude entry
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const gratitudeText = gratitudeInput.value.trim();

        if (gratitudeText) {
            const listItem = document.createElement('li');
            listItem.textContent = gratitudeText;

            // Append the gratitude entry to the list
            gratitudeList.appendChild(listItem);

            // Clear the input field
            gratitudeInput.value = '';
        }
    });
});