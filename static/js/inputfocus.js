// Topbar search focus
let inputFocus = document.querySelector('.search');
let searchInput = document.querySelector('#search-input');

searchInput.addEventListener('click', function() {
    inputFocus.classList.toggle('input-focus');
});
