function toggleMenu() {
    const navLinks = document.querySelector('.nav-link-container');
    const hamburger = document.querySelector('.hamburger');
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
}
