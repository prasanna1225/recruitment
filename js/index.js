// JavaScript

const toggleButton = document.getElementById('navbarToggleBtn');
const navbarLinks = document.querySelector('.navlinks');

toggleButton.addEventListener('click', function() {
    navbarLinks.classList.toggle('show');
});

AOS.init({
    delay:"200",
    duration:"1500",
    mirror:"false",
    once:"false",
   
  });
