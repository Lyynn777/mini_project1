// Get user location and log it
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showNotification, handleError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Distance calculation using Haversine formula
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in km
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
              Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

// Convert degrees to radians
function toRadians(degrees) {
    return degrees * (Math.PI / 180);
}

// Show notification if user is near the supermarket
function showNotification(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    console.log("User's location:", latitude, longitude);

    // Supermarket's location (replace with actual supermarket coordinates)
    const targetLat = 37.7749;  // Example supermarket latitude
    const targetLon = -122.4194;  // Example supermarket longitude

    // Calculate the distance between the user and supermarket
    const distance = getDistance(latitude, longitude, targetLat, targetLon);

    console.log("Distance from user to supermarket:", distance);

    // If within 1 km (or change as per your requirement), show notification
    const notificationThreshold = 0.1;  // For example, 0.1 km (100 meters)
    if (distance <= notificationThreshold) {
        triggerNotification("Time to buy groceries!");
    } else {
        console.log("User is not near the supermarket.");
        alert("You are not near the supermarket.");
    }
}

// Handle errors while getting location
function handleError(error) {
    console.log("Error getting location:", error);
    alert("Error getting location: " + error.message);
}

// Trigger notification
function triggerNotification(message) {
    if (Notification.permission === "granted") {
        new Notification(message);
    } else {
        console.log("Notification permission not granted.");
    }
}

// Request notification permission when the page loads
askNotificationPermission();

// Test location when button is clicked
function checkLocation() {
    getLocation();
}

// Ask for permission to show notifications
function askNotificationPermission() {
    if (Notification.permission !== "granted") {
        Notification.requestPermission().then(function(permission) {
            if (permission === "granted") {
                console.log("Notification permission granted");
            } else {
                console.log("Notification permission denied");
            }
        });
    }
}
