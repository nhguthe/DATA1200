// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle for navigation
    const navToggle = document.createElement("button");
    navToggle.textContent = "Menu";
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Toggle navigation menu");
    const nav = document.querySelector("nav");

    if (nav) {
        nav.prepend(navToggle);

        // Add event listener for toggle button
        navToggle.addEventListener("click", () => {
            const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
            navToggle.setAttribute("aria-expanded", !expanded);
            nav.classList.toggle("open");
        });
    }

    // Smooth scrolling for internal links
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Highlight active navigation link
    const currentPath = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.classList.add("active");
        }
    });
});
