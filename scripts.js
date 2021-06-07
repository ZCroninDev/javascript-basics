// Wrap every letter in a span
var textWrapper = document.querySelector('m16 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline.timeline({loop:true})
    .add({
        targets: '.m16 .letter',
        translateY: ["1.1em", 0],
        tanslateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
    }) .add({
        targets: '.m16', 
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });