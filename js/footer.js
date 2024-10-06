// Directly inject the HTML content of the footer into the 'footer-container' div
function loadFooter() {
    const footerContent = `
        <footer class="footer">
            <div class="footer-left">
                <p>&copy; 2024 Career Compass. All rights reserved.</p>
            </div>
            <div class="footer-right">
                <a href="https://santoshpbagalkot.github.io/careercompass75/contact.html" class="footer-contact">Contact</a>
            </div>
        </footer>
    `;
    
    document.getElementById('footer-container').innerHTML = footerContent;
}

// Call the function to load the footer
document.addEventListener('DOMContentLoaded', loadFooter);
