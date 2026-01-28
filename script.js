// Altivra Landing Page JavaScript
// Premium animations and interactions

document.addEventListener('DOMContentLoaded', function() {

    // ===================================
    // COUNTING NUMBER ANIMATIONS
    // ===================================

    function animateCounter(element, target, duration = 2000, suffix = '') {
        let start = 0;
        const increment = target / (duration / 16);
        const isDecimal = target % 1 !== 0;

        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = (isDecimal ? start.toFixed(1) : Math.floor(start)) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + suffix;
            }
        }
        updateCounter();
    }

    // Observer for counting animations
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const target = entry.target.dataset.target;
                const suffix = entry.target.dataset.suffix || '';

                if (target) {
                    animateCounter(entry.target, parseFloat(target), 2000, suffix);
                }
            }
        });
    }, { threshold: 0.5 });

    // Observe all counter elements
    document.querySelectorAll('[data-target]').forEach(counter => {
        counterObserver.observe(counter);
    });

    // ===================================
    // STAGGERED REVEAL ANIMATIONS
    // ===================================

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');

                // Stagger children animations
                const children = entry.target.querySelectorAll('.animate-child');
                children.forEach((child, index) => {
                    child.style.transitionDelay = `${index * 0.1}s`;
                    child.classList.add('revealed');
                });
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        revealObserver.observe(el);
    });

    // ===================================
    // FLOATING ANIMATION FOR VISUALS
    // ===================================

    function initFloatingElements() {
        document.querySelectorAll('.float-element').forEach((el, index) => {
            el.style.animation = `float ${3 + index * 0.5}s ease-in-out infinite`;
            el.style.animationDelay = `${index * 0.3}s`;
        });
    }
    initFloatingElements();

    // ===================================
    // PROGRESS BAR ANIMATIONS
    // ===================================

    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const progress = entry.target.dataset.progress || 100;
                entry.target.querySelector('.progress-fill').style.width = progress + '%';
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.progress-bar').forEach(bar => {
        progressObserver.observe(bar);
    });

    // ===================================
    // MAGNETIC BUTTON EFFECT
    // ===================================

    document.querySelectorAll('.btn-magnetic').forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });

    // ===================================
    // PARALLAX ON SCROLL
    // ===================================

    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;

        document.querySelectorAll('.parallax-slow').forEach(el => {
            el.style.transform = `translateY(${scrolled * 0.05}px)`;
        });

        document.querySelectorAll('.parallax-medium').forEach(el => {
            el.style.transform = `translateY(${scrolled * 0.1}px)`;
        });

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // ===================================
    // TYPING EFFECT FOR HEADLINES
    // ===================================

    function typeWriter(element, text, speed = 50) {
        let i = 0;
        element.textContent = '';

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // ===================================
    // SMOOTH SECTION REVEALS
    // ===================================

    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        sectionObserver.observe(section);
    });

    // Make hero visible immediately
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }

    // Make testimonials visible (moved up near hero)
    const testimonials = document.querySelector('.testimonials-section');
    if (testimonials) {
        testimonials.style.opacity = '1';
        testimonials.style.transform = 'translateY(0)';
    }

    const problemSection = document.querySelector('.problem-section');
    if (problemSection) {
        problemSection.style.opacity = '1';
        problemSection.style.transform = 'translateY(0)';
    }

    // ===================================
    // FAQ ACCORDION
    // ===================================

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    // ===================================
    // SMOOTH SCROLL
    // ===================================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // NAVBAR ON SCROLL
    // ===================================

    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ===================================
    // MOBILE MENU
    // ===================================

    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
    }

    // ===================================
    // CONTACT FORM
    // ===================================

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const formData = {
                name: document.getElementById('contact-name').value,
                email: document.getElementById('contact-email').value,
                company: document.getElementById('contact-company').value,
                challenge: document.getElementById('contact-challenge').value,
                details: document.getElementById('contact-details').value
            };

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;

            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = '#22c55e';
                contactForm.reset();

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.disabled = false;
                }, 3000);
            }, 1000);

            console.log('Form submitted:', formData);
        });
    }

    // ===================================
    // INITIALIZE STAT COUNTERS
    // ===================================

    // Auto-detect stat numbers and add data attributes
    document.querySelectorAll('.stat-number').forEach(stat => {
        const text = stat.textContent.trim();
        const match = text.match(/^([\d.]+)(.*)$/);

        if (match && !stat.dataset.target) {
            stat.dataset.target = match[1];
            stat.dataset.suffix = match[2] || '';
            stat.textContent = '0' + (match[2] || '');
            counterObserver.observe(stat);
        }
    });

});
