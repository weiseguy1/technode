// Sidebar current active nav menu
let navList = document.getElementsByClassName("nav-link");
let pathArray = window.location.pathname.replaceAll('/', '');
let navURLs = [];

for (let i = 0; i < navList.length; ++i) {
    navURLs = navList[i].getAttribute("href").replaceAll('/', '');
    if (navURLs === pathArray) {
        navList[i].classList.add('active');
    }
}
