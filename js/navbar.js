// Directly inject the HTML content of the navbar into the 'navbar-container' div
function loadNavbar() {
    const navbarContent = `
        <nav class="topnav">
            <!-- Left side with brand name -->
            <div class="navbar-left">
                <a href="/my-website/index.html" class="brand">Career Compass</a>
            </div>
            
            <!-- Right side with contact button -->
            <div class="navbar-right">
                <a href="/my-website/contact.html" class="contact-btn">Contact</a>
            </div>
        </nav>
    `;
    
    document.getElementById('navbar-container').innerHTML = navbarContent;
}

// Call the function to load the navbar
document.addEventListener('DOMContentLoaded', loadNavbar);

