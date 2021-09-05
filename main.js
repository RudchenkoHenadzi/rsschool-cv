let brgMenuOpen = document.querySelector('.brg-menu-open');
let brgMenuClose = document.querySelector('.brg-menu-close');
let mobileMenu = document.querySelector('.mobile-menu');

brgMenuOpen.addEventListener('click', function s() {
    if(brgMenuOpen.classList.contains('d-block') === true) {
        brgMenuOpen.classList.remove('d-block');
        brgMenuClose.classList.remove('d-none');
        brgMenuOpen.classList.toggle('d-none');
        brgMenuClose.classList.toggle('d-block');
        mobileMenu.classList.toggle('d-block');
    }
});

brgMenuClose.addEventListener('click', function f() {
    if(brgMenuClose.classList.contains('d-block') === true) {
        brgMenuOpen.classList.remove('d-none');
        brgMenuClose.classList.remove('d-block');
        brgMenuOpen.classList.toggle('d-block');
        brgMenuClose.classList.toggle('d-none');
        mobileMenu.classList.remove('d-block');
    }
});