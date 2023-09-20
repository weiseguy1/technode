var navList = document.getElementsByClassName("nav-link");
var pathArray = window.location.pathname.split('/');

for (var i = 0; i < navList.length; ++i) {
    var navURLs = navList[i].getAttribute("href");
    for (var j = 0; j < navURLs.length; ++j) {
        if (navURLs[j] == pathArray[1]) {

        } else if (pathArray[1] == "") {

        } else
    }
}
