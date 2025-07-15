// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-link');

    // Toggle mobile menu
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.add('active');
    });

    // Close mobile menu
    mobileMenuClose.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
    });

    // Close mobile menu when clicking on links
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
        });
    });

    // GSAP Animations
    gsap.registerPlugin(ScrollTrigger);

    // Hero animations
    const tl = gsap.timeline();
    
    tl.fromTo('#hero-title', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    )
    .fromTo('#hero-subtitle',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.5"
    )
    .fromTo('#hero-buttons',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.3"
    )
    .fromTo('#hero-features > div',
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.2, ease: "power3.out" },
        "-=0.3"
    );

    // Scroll animations for sections
    gsap.utils.toArray('section').forEach(section => {
        gsap.fromTo(section.children, 
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: section,
                    start: "top 80%",
                    end: "bottom 20%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.getElementById('header');
        if (window.scrollY > 100) {
            header.classList.add('bg-white/95', 'backdrop-blur-sm');
        } else {
            header.classList.remove('bg-white/95', 'backdrop-blur-sm');
        }
    });
});

// Testimonials data
const testimonials = [
    {
        text: "PureBiz has transformed our laundry operations. Their attention to detail and consistent quality has elevated our guest experience significantly. The 24/7 support is invaluable for our 24-hour operations.",
        name: "Sarah Johnson",
        position: "General Manager",
        company: "Grand Plaza Hotel",
        logo: "🏨"
    },
    {
        text: "As a healthcare facility, we require the highest standards of cleanliness and sterilization. PureBiz exceeds our expectations every time with their medical-grade processes and reliable service.",
        name: "Dr. Michael Chen",
        position: "Chief Administrator",
        company: "Metropolitan Medical Center",
        logo: "🏥"
    },
    {
        text: "The pickup and delivery service is seamless, and the quality is consistently excellent. Our guests have noticed the difference in our linen quality since switching to PureBiz.",
        name: "Amanda Rodriguez",
        position: "Operations Director",
        company: "Luxury Resort & Spa",
        logo: "🌴"
    },
    {
        text: "PureBiz understands the unique needs of our hospital. Their infection control protocols and emergency service capabilities make them an invaluable partner in our operations.",
        name: "Jennifer Thompson",
        position: "Facility Manager",
        company: "City General Hospital",
        logo: "⚕️"
    }
];

let currentTestimonial = 0;

// Testimonial functions
function updateTestimonial(index) {
    const testimonial = testimonials[index];
    
    gsap.to('#testimonial-content', {
        opacity: 0,
        duration: 0.3,
        onComplete: function() {
            document.getElementById('testimonial-text').textContent = testimonial.text;
            document.getElementById('testimonial-name').textContent = testimonial.name;
            document.getElementById('testimonial-position').textContent = testimonial.position;
            document.getElementById('testimonial-company').textContent = testimonial.company;
            document.getElementById('testimonial-logo').textContent = testimonial.logo;
            
            // Update dots
            document.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
                if (i === index) {
                    dot.classList.remove('bg-secondary-300');
                    dot.classList.add('bg-primary-600');
                } else {
                    dot.classList.remove('bg-primary-600');
                    dot.classList.add('bg-secondary-300');
                }
            });
            
            gsap.to('#testimonial-content', {
                opacity: 1,
                duration: 0.3
            });
        }
    });
}

function nextTestimonial() {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial(currentTestimonial);
}

function prevTestimonial() {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentTestimonial);
}

function goToTestimonial(index) {
    currentTestimonial = index;
    updateTestimonial(currentTestimonial);
}

// Auto-rotate testimonials
setInterval(nextTestimonial, 8000);

// Utility functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const formMessage = document.getElementById('form-message');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Show loading state
            submitBtn.innerHTML = '<div class="loading"></div> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(function() {
                // Show success message
                formMessage.className = 'bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg';
                formMessage.innerHTML = '<i class="fas fa-check-circle mr-2"></i>Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.';
                formMessage.classList.remove('hidden');
                
                // Reset form
                contactForm.reset();
                
                // Reset button
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
                submitBtn.disabled = false;
                
                // Hide message after 5 seconds
                setTimeout(function() {
                    formMessage.classList.add('hidden');
                }, 5000);
            }, 2000);
        });
    }
});

// Newsletter form handling
document.addEventListener('DOMContentLoaded', function() {
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = this.querySelector('input[type="email"]').value;
            const button = this.querySelector('button');
            
            // Show loading state
            button.innerHTML = '<div class="loading"></div>';
            button.disabled = true;
            
            // Simulate subscription (replace with actual handling)
            setTimeout(function() {
                alert('Thank you for subscribing to our newsletter!');
                newsletterForm.reset();
                button.innerHTML = 'Subscribe';
                button.disabled = false;
            }, 1500);
        });
    }
});
