/* 
* Author: Theodore Peters
* Date: 4/17/21
* JavaScript for teddypeters.github.io
-----------------------------------------------------------------------------
*/


/* -------------------------------------------(Start Snippet) -----------------------------------------------------------
JS code for progress bar sourced from https://css-tricks.com/books/greatest-css-tricks/scroll-animation/  (NOT AUTHORED BY MYSELF) */

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);
/*----------------------------------------------(End Snippet)--------------------------------------------------------*/


function startingFunc() {
    var x = document.getElementById("myLinks");
    x.style.display = "none";

}

function loadBurg() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}