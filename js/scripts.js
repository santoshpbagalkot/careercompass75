// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Select the button using its ID
    const contactButton = document.getElementById("contactButton");

    // Add an event listener to trigger an alert when the button is clicked
    contactButton.addEventListener("click", function() {
        alert("Thank you for your interest! We will get back to you shortly.");
    });
});
