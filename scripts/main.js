let sectionProg = document.querySelector(".smoth-prog");
let spans = document.querySelectorAll(".container .skills span");

window.onscroll = () => {
    if (window.scrollY >= sectionProg.offsetTop) {
        console.log("ok");
        spans.forEach((span) => {
            span.style.width = span.dataset.progress;
        });
    };
};

/*

let sectionCoffeProg = document.querySelector(".stats");
let divsCoffeProg = document.querySelectorAll(".stats .box .number");

window.onscroll = () => {
    if (window.scrollY >= sectionCoffeProg.offsetTop) {
        console.log("ok2");
        divsCoffeProg.forEach((cafe) => {
            cafe.value = "2000";
        });
    }
}
*/


