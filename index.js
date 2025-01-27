document.addEventListener('DOMContentLoaded', () => {
    // Select all links with the 'nav_link' class
    const navLinks = document.querySelectorAll('.nav_link');
  
    navLinks.forEach(link => {
      // Add click event to each link
      link.addEventListener('click', () => {
        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));
  
        // Add 'active' class to the clicked link
        link.classList.add('active');
      });
    });
  });