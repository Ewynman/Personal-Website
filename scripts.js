(function ($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#sideNav",
  });
})(jQuery); // End of use strict



// Light and dark mode

// Get the button element
const modeToggleBtn = document.getElementById('mode-toggle-btn');

// Get the stylesheet elements for both light and dark mode
const lightModeStylesheet = document.querySelector('link[href="style.css"]');
const darkModeStylesheet = document.createElement('link');
darkModeStylesheet.setAttribute('rel', 'stylesheet');
darkModeStylesheet.setAttribute('href', 'darkmode.css');

// Check if the user has a preference for dark mode
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Set the initial mode based on the user's preference or default to light mode
let isDarkMode = userPrefersDark || false;
setMode(isDarkMode);

// Add an event listener to the button
modeToggleBtn.addEventListener('click', function() {
  isDarkMode = !isDarkMode;
  setMode(isDarkMode);
});

// Function to set the mode based on the isDarkMode variable
function setMode(isDarkMode) {
  if (isDarkMode) {
    // Set the stylesheet to dark mode
    document.head.appendChild(darkModeStylesheet);
    // Remove the stylesheet for light mode
    lightModeStylesheet.remove();
    // Set a data attribute on the body element to indicate the current mode
    document.body.setAttribute('data-theme', 'dark');
  } else {
    // Set the stylesheet to light mode
    document.head.appendChild(lightModeStylesheet);
    // Remove the stylesheet for dark mode
    darkModeStylesheet.remove();
    // Remove the data attribute on the body element to indicate the current mode
    document.body.removeAttribute('data-theme');
  }
}

