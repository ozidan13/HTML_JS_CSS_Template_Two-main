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


