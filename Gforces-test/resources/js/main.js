/* Call WOW JS */
new WOW().init();

/* Function menu tablet & mobile device */
function toggleMenu(x) {
    x.classList.toggle("change");
    var item = document.getElementById('collapse-menu');
    item.classList.toggle('collapse-menu');
}

/* Fix to IE8 & IE11 Scrolling and fixed bg issue */
if(navigator.userAgent.match(/Trident\/7\./)) {
$('body').on("mousewheel", function () {
    event.preventDefault();

    var wheelDelta = event.wheelDelta;

    var currentScrollPosition = window.pageYOffset;
    window.scrollTo(0, currentScrollPosition - wheelDelta);
});
}