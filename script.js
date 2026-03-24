const menu = document.querySelector(".menu");
const navbar = document.querySelector(".navbar ul");

menu.addEventListener('click', () => {
    navbar.classList.toggle("active");
});

navbar.addEventListener('click', () => {
    navbar.classList.remove("active");
});

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove("active");
    }
});