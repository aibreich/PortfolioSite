// init listener for testing links
function initListeners() {
  $("a").click(function (e) {
    console.log("clicked");
  });
}
// hamburger nav function
function hamBurger() {
  var x = document.getElementById("right");
  if (x.className === "right") {
    x.className += " responsive";
  } else {
    x.className = "right";
  }
}
// dot ready function
$(document).ready(function () {
  initListeners();
});
