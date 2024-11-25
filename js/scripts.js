// =========================================================
// SCRIPTS.JS - SHARED JAVASCRIPT FILE
// ---------------------------------------------------------
// Table of Contents:
// 1. Accordion Functionality
// 2. Navigation Menu Highlight
// 3. Collapsible Sections Functionality
// =========================================================

// ---------------------------------------------------------
// 1. Accordion Functionality
// ---------------------------------------------------------
document.querySelectorAll('.accordion h2').forEach((accordionHeader) => {
    accordionHeader.addEventListener('click', () => {
        // Toggle active class on the header
        accordionHeader.classList.toggle('active');

        // Get the next sibling element (the accordion content)
        const accordionContent = accordionHeader.nextElementSibling;

        // Check if the content is visible and toggle display
        if (accordionContent.classList.contains('active')) {
            accordionContent.style.display = 'none';
            accordionContent.classList.remove('active');
        } else {
            accordionContent.style.display = 'block';
            accordionContent.classList.add('active');
        }
    });
});

// ---------------------------------------------------------
// 2. Navigation Menu Highlight
// ---------------------------------------------------------
// Highlights the current page in the navigation menu
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('header nav ul li a');

    navLinks.forEach((link) => {
        const linkPage = link.getAttribute('href');

        // If the link matches the current page, add a highlight class
        if (linkPage === currentPage) {
            link.classList.add('active-link');
        }
    });
}

// ---------------------------------------------------------
// Collapsible Sections Functionality
// ---------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const collapsibleHeadings = document.querySelectorAll(".collapsible-heading");

    collapsibleHeadings.forEach((heading) => {
        heading.addEventListener("click", () => {
            const content = heading.nextElementSibling;
            heading.classList.toggle("active-collapsible");
            content.classList.toggle("active");
        });
    });
});