// routing funtion to load the pages
// function route() {
//   let hashTag = window.location.hash;
//   let pageID = hashTag.replace("#/", "");

//   // if statement for routing to the home page on initial load
//   if (pageID == "") {
//     model.placeholder("home");
//     console.log("Grabbing:" + pageID);
//   } else if (pageID == "home") {
//     model.placeholder("home");
//     console.log("Grabbing:" + pageID);
//   } else {
//     model.placeholder(pageID);
//     console.log("Grabbing:" + pageID);
//   }

//   // $(window).scrollTop(0);
// }

// init listener for route changing
function initListeners() {
  // $(window).on("hashchange", route);

  $("a").click(function (e) {
    console.log("clicked");
    // route();
  });
  // route();
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
$(document).ready(function () {
  initListeners();
});
