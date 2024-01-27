function scrollL() {
    var left = document.querySelector(".wrapper");
    left.scrollBy({
        left: +10,
        behavior: 'smooth'
    });
}
function scrollR() {
    var right = document.querySelector(".wrapper");
    right.scrollBy({
        left: -10,
        behavior: 'smooth'
    });
}
var typed3 = new Typed('#element', {
    strings: ['Calender', '2024', 'Created using Html','Css and JS'],
    typeSpeed: 20,
    backSpeed: 15,
    smartBackspace: true, // this is a default
    loop: true
});