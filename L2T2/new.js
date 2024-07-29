document.addEventListener("DOMContentLoaded", function() {
    const burger = document.getElementById("burger");
    const navMenu = document.getElementById("navMenu");

    burger.addEventListener("click", function() {
        navMenu.classList.toggle("active");
    });
});
