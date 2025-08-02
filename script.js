// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');
        });
    }

    // Adventure Popup functionality
    const adventurePopup = document.getElementById('adventure-popup');
    const popupClose = document.querySelector('.popup-close');

    // Find the adventure link
    const adventureLinks = document.querySelectorAll('a[href="#"]');
    let adventureLinkElement = null;
    adventureLinks.forEach(link => {
        if (link.textContent.includes('Adventure & Wildlife')) {
            adventureLinkElement = link;
        }
    });

    // Open popup when adventure link is clicked
    if (adventureLinkElement) {
        adventureLinkElement.addEventListener('click', function(e) {
            e.preventDefault();
            adventurePopup.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    }

    // Close popup when close button is clicked
    if (popupClose) {
        popupClose.addEventListener('click', function() {
            adventurePopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }

    // Close popup when clicking outside the popup content
    if (adventurePopup) {
        adventurePopup.addEventListener('click', function(e) {
            if (e.target === adventurePopup) {
                adventurePopup.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }

    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && adventurePopup.style.display === 'block') {
            adventurePopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // Newsletter form functionality
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = document.getElementById('newsletter-email');
            const submitBtn = document.querySelector('.newsletter-btn');
            const email = emailInput.value.trim();
            
            if (email) {
                // Show loading state
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Subscribing...';
                submitBtn.disabled = true;
                
                // Simulate API call (replace with actual newsletter service)
                setTimeout(() => {
                    // Show success message
                    submitBtn.textContent = 'Subscribed!';
                    submitBtn.style.background = '#28a745';
                    emailInput.value = '';
                    
                    // Reset button after 3 seconds
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                    }, 3000);
                    
                    console.log('Newsletter subscription:', email);
                }, 1000);
            }
        });
    }

    // Destination popup functionality
    const destinationPopup = document.getElementById('destination-popup');
    const destinationCards = document.querySelectorAll('.destination-card');
    const destinationPopupClose = document.querySelector('.destination-popup-close');
    
    // Destination data
    const destinationData = {
        'central-pacific': {
            title: 'Central Pacific',
            images: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1544551763-46a013bb70f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ],
            description: 'Experience the perfect blend of pristine beaches and lush rainforest in Costa Rica\'s Central Pacific region. Manuel Antonio National Park offers exclusive wildlife encounters with sloths, colorful birds, and playful monkeys, while luxury beachfront resorts provide world-class amenities. Enjoy private beach access, gourmet dining with ocean views, and adventure activities like zip-lining through the canopy. This region perfectly balances relaxation and adventure, making it ideal for couples and families seeking both luxury and authentic Costa Rican experiences in one of the country\'s most biodiverse areas.'
        },
        'northern-plains': {
            title: 'Northern Plains', 
            images: [
                'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ],
            description: 'Discover the dramatic landscapes of Costa Rica\'s Northern Plains, dominated by the majestic Arenal Volcano and surrounded by pristine rainforest. Stay in exclusive eco-lodges with volcano views, enjoy private access to natural hot springs, and experience world-class adventure activities. The region offers unique opportunities for wildlife viewing, including rare birds and exotic mammals. Luxury accommodations feature spa treatments using volcanic minerals, gourmet cuisine highlighting local ingredients, and guided tours through cloud forests and hanging bridges. This destination combines natural wonder with sophisticated comfort for the ultimate volcanic luxury experience.'
        },
        'caribbean-coast': {
            title: 'Caribbean Coast',
            images: [
                'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1544551763-46a013bb70f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ],
            description: 'Immerse yourself in the vibrant Afro-Caribbean culture and pristine wilderness of Costa Rica\'s Caribbean Coast. This unique region offers black sand beaches, crystal-clear rivers, and some of the country\'s most diverse wildlife. Stay in luxury eco-lodges nestled in primary rainforest, where you can observe sea turtles nesting, explore coral reefs, and encounter rare species like the jaguar and manatee. Experience authentic Caribbean cuisine, reggae rhythms, and warm hospitality while enjoying modern luxury amenities. The region provides exclusive access to remote beaches, private nature reserves, and cultural experiences unavailable elsewhere in Costa Rica.'
        },
        'south-pacific': {
            title: 'South Pacific',
            images: [
                'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
            ],
            description: 'Venture into Costa Rica\'s most remote and biodiverse region, the South Pacific, home to the legendary Osa Peninsula and Corcovado National Park. This pristine wilderness sanctuary hosts 2.5% of the world\'s biodiversity in less than 0.1% of its landmass. Stay in exclusive jungle lodges accessible only by private plane, where luxury meets raw nature. Experience unparalleled wildlife viewing including scarlet macaws, tapirs, and all four Costa Rican monkey species. Enjoy world-class sport fishing, private beach access, and guided expeditions through primary rainforest. This destination offers the ultimate eco-luxury experience for adventurous travelers seeking untouched natural beauty and exceptional comfort.'
        }
    };
    
    // Open destination popup
    destinationCards.forEach(card => {
        card.addEventListener('click', function() {
            const destination = this.getAttribute('data-destination');
            const data = destinationData[destination];
            
            if (data) {
                // Update popup content
                document.getElementById('destination-popup-title').textContent = data.title;
                document.getElementById('destination-img-1').src = data.images[0];
                document.getElementById('destination-img-2').src = data.images[1]; 
                document.getElementById('destination-img-3').src = data.images[2];
                document.getElementById('destination-popup-text').textContent = data.description;
                
                // Show popup
                destinationPopup.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    // Close destination popup
    if (destinationPopupClose) {
        destinationPopupClose.addEventListener('click', function() {
            destinationPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
    }
    
    // Close popup when clicking outside
    if (destinationPopup) {
        destinationPopup.addEventListener('click', function(e) {
            if (e.target === destinationPopup) {
                destinationPopup.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Close popup with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && destinationPopup.style.display === 'block') {
            destinationPopup.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // Header background on scroll
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.experience-card, .destination-card, .stat, .credential');
    animateElements.forEach(element => {
        observer.observe(element);
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });
            
            // Simple form validation
            const requiredFields = ['name', 'email'];
            let isValid = true;
            
            requiredFields.forEach(field => {
                const input = this.querySelector(`[name="${field}"]`);
                if (!input.value.trim()) {
                    input.style.borderColor = '#e74c3c';
                    isValid = false;
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            // Email validation
            const emailInput = this.querySelector('[name="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                emailInput.style.borderColor = '#e74c3c';
                isValid = false;
            }
            
            if (isValid) {
                // Show success message
                const submitBtn = this.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#27ae60';
                
                // Reset form after 2 seconds
                setTimeout(() => {
                    this.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '#1a472a';
                }, 2000);
                
                console.log('Form submitted:', formObject);
            } else {
                // Show error message
                const submitBtn = this.querySelector('.submit-btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Please fill required fields';
                submitBtn.style.background = '#e74c3c';
                
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '#1a472a';
                }, 2000);
            }
        });
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero-video');
        
        parallaxElements.forEach(element => {
            const speed = 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Destination cards hover effect
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Experience cards stagger animation
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
    });

    // Stats counter animation
    const statsNumbers = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const text = target.textContent;
                
                // Only animate numbers
                if (text.includes('+') || text.includes('%')) {
                    target.style.opacity = '0';
                    setTimeout(() => {
                        target.style.opacity = '1';
                        target.style.transform = 'scale(1.1)';
                        setTimeout(() => {
                            target.style.transform = 'scale(1)';
                        }, 200);
                    }, 100);
                }
            }
        });
    }, { threshold: 0.5 });

    statsNumbers.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Add some CSS for mobile menu and animations
const additionalStyles = `
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        padding: 20px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .header.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }
    
    .experience-card.animate {
        animation: slideInUp 0.6s ease forwards;
    }
    
    .destination-card.animate {
        animation: fadeInScale 0.6s ease forwards;
    }
    
    .stat.animate {
        animation: bounceIn 0.6s ease forwards;
    }
    
    .credential.animate {
        animation: slideInLeft 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(50px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes bounceIn {
        0% {
            opacity: 0;
            transform: scale(0.3);
        }
        50% {
            transform: scale(1.05);
        }
        70% {
            transform: scale(0.9);
        }
        100% {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-50px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);