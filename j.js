document.addEventListener("DOMContentLoaded", function() {

  // declarations
  var nav = document.getElementById("navbar");
  var navUL = document.getElementById("nav");

  // toggle menu

  var toggle = document.getElementById("toggle");
  toggle.addEventListener("click", function(event) {
    event.preventDefault();

    nav.classList.toggle("is-open");

  });

  // click menu in body
  document.getElementById("container").addEventListener("click", function(event) {
    if (nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
    }
  });

  document.getElementById("navbar").addEventListener("click", function(event) {
    if (nav.classList.contains("is-open")) {
      nav.classList.remove("is-open");
    }
  });
});
