src = "https://unpkg.com/smoothscroll-polyfill/dist/smoothscroll.min.js"
src = "https://unpkg.com/smoothscroll-anchor-polyfill"

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}