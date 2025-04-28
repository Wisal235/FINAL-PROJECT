// Select all sections and navigation links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

// Add a scroll event listener
window.onscroll = () => {
  let current = "";

  // Find which section is currently in view
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    // If user has scrolled into a section
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  // Remove active class from all links, then add to the current link
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
};
