const navbar = document.querySelector('.navbar');
const menuIcon = document.getElementById('menu-icon');

menuIcon.addEventListener('click', function() {
    navbar.classList.toggle('active');
});