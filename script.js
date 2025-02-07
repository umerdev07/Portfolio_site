function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (menu && icon) {
        menu.classList.toggle("open");  // Open/Close Sidebar
        icon.classList.toggle("open");  // Animate Hamburger Icon
    }
}

// Handle dropdown inside sidebar
document.querySelector(".project").addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle("open");
});
