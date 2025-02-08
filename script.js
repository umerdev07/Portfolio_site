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

function DownloadResume(){
    const link = document.createElement('a');
    link.href ='assets/resume.pdf';
    link.download = 'UmerDev-Resume.pdf ';
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}