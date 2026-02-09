/* ================= NAVBAR SCRIPT ================= */

/*
Features:
1. Mobile menu toggle
2. Menu auto close on link click (mobile)
3. Menu auto close on outside click
4. Clean & professional behaviour
*/

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

/* Close menu when any nav link is clicked (mobile UX) */
document.addEventListener("click", function (e) {
    const navLinks = document.getElementById("navLinks");
    const menuBtn = document.querySelector(".menu-btn");

    if (!navLinks || !menuBtn) return;

    // If click is outside navbar & menu button
    if (
        !navLinks.contains(e.target) &&
        !menuBtn.contains(e.target)
    ) {
        navLinks.classList.remove("show");
    }
});

/* Close menu when screen resized to desktop */
window.addEventListener("resize", function () {
    const navLinks = document.getElementById("navLinks");
    if (window.innerWidth > 768) {
        navLinks.classList.remove("show");
    }
});
