// script.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form handling (example - replace with your backend or service)
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Example: send form data to server
    const formData = new FormData(this);
    const jsonData = {};
    formData.forEach((value, key) => {jsonData[key] = value});

    // Example: replace with actual API call or backend integration
    console.log(jsonData); // Output form data to console
    alert('Message sent!'); // Replace with actual success message or redirect
    this.reset();
});
                    
