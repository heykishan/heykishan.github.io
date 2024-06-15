document.addEventListener("DOMContentLoaded", function() {
    const themeSwitcher = document.getElementById("theme-switcher");
    const body = document.body;
    const themeIcon = document.getElementById("theme-icon");
    const contactLink = document.getElementById("contact-link");
    const modal = document.getElementById("contact-modal");
    const closeModal = document.getElementsByClassName("close")[0];

    // Initialize theme icon based on current mode
    if (body.classList.contains("dark-mode")) {
        themeIcon.src = "https://img.icons8.com/material-outlined/24/ffffff/moon.png";
    } else {
        themeIcon.src = "https://img.icons8.com/material-outlined/24/000000/sun.png";
    }

    // Theme switcher
    themeSwitcher.addEventListener("click", function() {
        if (body.classList.contains("light-mode")) {
            body.classList.remove("light-mode");
            body.classList.add("dark-mode");
            themeIcon.src = "https://img.icons8.com/material-outlined/24/ffffff/moon.png";
        } else {
            body.classList.remove("dark-mode");
            body.classList.add("light-mode");
            themeIcon.src = "https://img.icons8.com/material-outlined/24/000000/sun.png";
        }
    });

    // Contact modal
    contactLink.addEventListener("click", function(event) {
        event.preventDefault();
        modal.style.display = "block";
    });

    closeModal.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
});
