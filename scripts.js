// Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.5em", 0],
    translateZ: 0,
    duration: 1500,
    delay: (el, i) => 50 * i
  });


  function open_nav() {
    document.getElementsByTagName("nav").style.display = "inherit";
  }

  function close_nav() {
     document.getElementsByTagName("nav").style.display = "none";
  }

  