// Hamburger

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    if (menu && icon) {
        menu.classList.toggle("open");  
        icon.classList.toggle("open");  
    }
}

// Handle dropdown inside sidebar
document.querySelector(".project").addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle("open");
});

// PDF Download

function DownloadResume(){
    const link = document.createElement('a');
    link.href ='assets/resume.pdf';
    link.download = 'UmerDev-Resume.pdf ';
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

var icons = document.getElementsByClassName("Icon");

// Check and apply saved theme preference
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    updateIcons("assets/sun.png");
} else {
    updateIcons("assets/moon.png");
}

// Function to update all icons
function updateIcons(src) {
    for (let i = 0; i < icons.length; i++) {
        icons[i].src = src;
    }
}

// Toggle theme and save preference
for (let i = 0; i < icons.length; i++) {
    icons[i].onclick = function () {
        document.body.classList.toggle("dark-theme");

        if (document.body.classList.contains("dark-theme")) {
            updateIcons("assets/sun.png");
            localStorage.setItem("theme", "dark");
        } else {
            updateIcons("assets/moon.png");
            localStorage.setItem("theme", "light");
        }
    };
}


