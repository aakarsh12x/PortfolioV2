// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// Smooth scrolling for navigation links - Fixed to only target nav menu links
document.querySelectorAll('.nav-menu a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Enhanced dark theme effects
document.addEventListener('DOMContentLoaded', () => {
    // Add elements for animation
    const animateElements = document.querySelectorAll('.skill-category, .project-card, .detail-item');
    animateElements.forEach(el => observer.observe(el));

    // Add glow effect to active navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.textShadow = '0 0 10px rgba(96, 165, 250, 0.5)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.textShadow = 'none';
        });
    });

    // Enhanced skill item animations
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in-up');
    });

    // Add particle effect to hero section
    createParticles();
});

// Create floating particles effect
function createParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(96, 165, 250, 0.3);
            border-radius: 50%;
            pointer-events: none;
            animation: float-particle ${Math.random() * 10 + 10}s linear infinite;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 5}s;
        `;
        hero.appendChild(particle);
    }

    // Add CSS for particle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-particle {
            0% {
                transform: translateY(0px) rotate(0deg);
                opacity: 0;
            }
            10% {
                opacity: 1;
            }
            90% {
                opacity: 1;
            }
            100% {
                transform: translateY(-100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Enhanced scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            
            // Add staggered animation for skill items
            if (entry.target.classList.contains('skill-category')) {
                const skillItems = entry.target.querySelectorAll('.skill-item');
                skillItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

// Enhanced counter animation with easing
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Enhanced hover effects for project cards
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-15px) scale(1.02)';
            card.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(96, 165, 250, 0.3)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
            card.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        });
    });
});

// Enhanced skill category hover effects
document.addEventListener('DOMContentLoaded', () => {
    const skillCategories = document.querySelectorAll('.skill-category');
    
    skillCategories.forEach(category => {
        category.addEventListener('mouseenter', () => {
            category.style.transform = 'translateY(-8px)';
            category.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.4), 0 0 20px rgba(96, 165, 250, 0.2)';
        });
        
        category.addEventListener('mouseleave', () => {
            category.style.transform = 'translateY(0)';
            category.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
        });
    });
});

// Add smooth reveal animations for sections with enhanced effects
const revealSections = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Add staggered animation for children
            const children = entry.target.querySelectorAll('.skill-category, .project-card, .detail-item');
            children.forEach((child, index) => {
                setTimeout(() => {
                    child.style.opacity = '1';
                    child.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, {
    threshold: 0.15
});

revealSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    // Initialize children
    const children = section.querySelectorAll('.skill-category, .project-card, .detail-item');
    children.forEach(child => {
        child.style.opacity = '0';
        child.style.transform = 'translateY(20px)';
        child.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    revealObserver.observe(section);
});

// Enhanced navbar effects
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY;
    
    if (scrolled > 100) {
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.4), 0 0 20px rgba(96, 165, 250, 0.1)';
        navbar.style.borderBottom = '1px solid rgba(96, 165, 250, 0.2)';
    } else {
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
        navbar.style.borderBottom = '1px solid rgba(148, 163, 184, 0.1)';
    }
});

// Active navigation highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Initialize counter animations when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', () => {
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        statsObserver.observe(profileCard);
    }
});

// Add CSS for enhanced animations
const enhancedAnimations = document.createElement('style');
enhancedAnimations.textContent = `
    .skill-item, .project-card, .detail-item {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .btn {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .profile-card {
        transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .nav-link {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .skill-category {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .fade-in-up {
        animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(enhancedAnimations);

// Email copy and mailto function
function copyEmailAndOpenMailto(event) {
    event.preventDefault(); // Prevent default link behavior
    const email = 'singhaakarsh28@gmail.com';
    
    // Copy email to clipboard
    navigator.clipboard.writeText(email).then(() => {
        // Show "Copied!" feedback
        const link = event.target;
        const originalText = link.textContent;
        link.textContent = 'Copied!';
        link.style.color = '#22c55e'; // Green color for success
        
        // Reset after 2 seconds
        setTimeout(() => {
            link.textContent = originalText;
            link.style.color = '';
        }, 2000);
        
        // After showing "Copied!", wait a moment then open mailto
        setTimeout(() => {
            window.location.href = 'mailto:' + email;
        }, 500);
        
    }).catch(err => {
        console.error('Failed to copy email:', err);
        // If clipboard fails, still open mailto
        window.location.href = 'mailto:' + email;
    });
}

// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out-cubic'
    });
});
