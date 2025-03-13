document.addEventListener('DOMContentLoaded', function() {

    $('#projectCarousel').carousel(); 
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 56, 
            behavior: 'smooth'
          });
          
          const navbarToggler = document.querySelector('.navbar-toggler');
          const navbarCollapse = document.querySelector('.navbar-collapse');
          
          if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click();
          }
        }
      });
    });
    
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        console.log('Form submitted:', { name, email, subject, message });
        
        alert('Thank you for your message! I will get back to you soon.');
        
        contactForm.reset();
      });
    }
    
  });
  