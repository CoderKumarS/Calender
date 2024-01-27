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