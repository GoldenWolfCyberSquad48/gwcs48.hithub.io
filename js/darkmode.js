/* ================= DARK MODE SCRIPT ================= */

// page load hone par pehle check karo
window.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        updateIcon("dark");
    } else {
        updateIcon("light");
    }
});

// toggle function
function toggleDark() {
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem("theme", "dark");
        updateIcon("dark");
    } else {
        localStorage.setItem("theme", "light");
        updateIcon("light");
    }
}

// button icon change
function updateIcon(mode) {
    const btn = document.querySelector("nav button");
    if (!btn) return;

    if (mode === "dark") {
        btn.textContent = "☀️";
        btn.title = "Light Mode";
    } else {
        btn.textContent = "🌙";
        btn.title = "Dark Mode";
    }
}
