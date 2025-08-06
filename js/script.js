// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    // In a real app, you would send this data to a server
    console.log('Form submitted with data:', Object.fromEntries(formData));
    
    // Show a success message
    alert('Thank you for joining the waitlist! We\'ll notify you when Quantum Ledger is available.');
    this.reset();
});