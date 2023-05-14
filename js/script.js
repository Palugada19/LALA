// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika cigarette--menu di klik
document.querySelector('#cigarette-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar sidebar untuk menutup bar
const cigarette = document.querySelector('#cigarette-menu');

document.addEventListener('click', function(e) {
    if(!cigarette.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});
