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


  // function open_nav() {
  //   document.getElementById("nav-open").style.display = "block";
  // }

  // function close_nav() {
  //    document.getElementById("nav-close").style.display = "none";
  // }
 
  function myFunction() {
  var x = document.getElementById("nav-open");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  }