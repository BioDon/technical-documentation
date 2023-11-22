function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    navbar.style.display = navbar.style.display === "block" ? "none" : "block";
  }
  
  // Show the navbar initially for screens with a width greater than 600 pixels
  document.addEventListener("DOMContentLoaded", function () {
    updateNavbarVisibility();
  });
  
  // Update the visibility of the navbar on window resize
  window.addEventListener("resize", function () {
    updateNavbarVisibility();
  });
  
  function updateNavbarVisibility() {
    var navbar = document.getElementById("navbar");
    if (window.innerWidth > 600) {
      navbar.style.display = "block";
    } else {
      navbar.style.display = "none";
    }
  }