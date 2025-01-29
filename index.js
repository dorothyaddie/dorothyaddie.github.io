// makes nav bar links stay red after click
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav_link');
  
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navLinks.forEach(link => link.classList.remove('active'));
  
        link.classList.add('active');
      });
    });
  });

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav_link'); // Select all nav links
    console.log('Navigation links:', links); // Debugging output
  
    links.forEach(link => {
      // Check if href matches the window location
      if (link.href === window.location.href || link.href === `${window.location.origin}${window.location.pathname}${window.location.hash}`) {
        link.classList.add('active');
      }
    });
  });

// Makes flowers on the right scroll down to about section
document.addEventListener('scroll', () => {
const scrollY = window.scrollY; 
const image = document.querySelector('.flowers_right');

const viewportHeight = window.innerHeight;
const maxScroll = 1 * viewportHeight;
const limitedScroll = Math.min(scrollY, maxScroll);

image.style.transform = `translate(0%, calc(0% + ${limitedScroll}px))`
});

// Makes content after current viewport hidden until scroll
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.pathname !== "/experience.html") {
        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            entry.target.classList.remove("hidden"); 
            }
        });
        });
    
        const sections = document.querySelectorAll(".content");
        sections.forEach((section) => observer.observe(section));
    }
    else {
        const sections = document.querySelectorAll(".content");
        sections.forEach((section) => section.classList.remove("hidden"));
    }
  });
  