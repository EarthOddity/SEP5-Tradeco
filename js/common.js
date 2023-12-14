// JavaScript to enable the Bootstrap navbar toggler
var navbarToggler = document.querySelector('.navbar-toggler');
var navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
});


document.getElementById('profileButton').addEventListener('click', function () {
    window.location.href = 'profile.html';
});

document.getElementById('shoppingCartButton').addEventListener('click', function () {
    window.location.href = 'cart.html';
});