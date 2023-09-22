var navList = document.getElementsByClassName("nav-link");
var pathArray = window.location.pathname.replaceAll('/', '');
var navURLs = [];

for (var i = 0; i < navList.length; ++i) {
    navURLs = navList[i].getAttribute("href").replaceAll('/', '');
    if (navURLs === pathArray) {
        navList[i].classList.add('active');
    }
}
