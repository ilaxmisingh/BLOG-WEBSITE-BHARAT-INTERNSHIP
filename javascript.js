document.addEventListener("DOMContentLoaded", function() {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Update the footer text with the current year
    const yearElement = document.getElementById("currentYear");
    if (yearElement) {
        yearElement.textContent += ` ${currentYear}`;
    }
});
