// =========================================
// QEENESTHER SCHOOL
// MAIN JAVASCRIPT
// =========================================


const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


/*
    Mobile navigation

    When the menu button is clicked,
    we add/remove the "open" class.
*/

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        const isOpen = navMenu.classList.contains("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


/*
    Close mobile menu after clicking
    a navigation link.
*/

if (navMenu) {

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            if (menuToggle) {
                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    });

}// =========================================
// QEENESTHER SCHOOL
// MAIN JAVASCRIPT
// =========================================


const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


/*
    Mobile navigation

    When the menu button is clicked,
    we add/remove the "open" class.
*/

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        const isOpen = navMenu.classList.contains("open");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });

}


/*
    Close mobile menu after clicking
    a navigation link.
*/

if (navMenu) {

    const navLinks = navMenu.querySelectorAll("a");

    navLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            if (menuToggle) {
                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );
            }

        });

    });

}