/* ============================================
   AIM Website — Script v2.0
   Cinematic interactions
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar scroll effect ---
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        navbar?.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // --- Mobile menu ---
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            mobileToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }

    // --- Hero video loaded state ---
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) {
        const showVideo = () => heroVideo.classList.add('loaded');
        if (heroVideo.readyState >= 3) showVideo();
        else heroVideo.addEventListener('canplay', showVideo, { once: true });
        // Fallback in case canplay doesn't fire
        setTimeout(showVideo, 2000);
    }

    // --- Hero typing effect ---
    const typedEl = document.getElementById('heroTyped');
    if (typedEl) {
        const words = ['Performance.', 'Delivered.', 'On Time.', 'Under One Roof.'];
        let wordIdx = 0;
        let charIdx = 0;
        let deleting = false;
        let pauseCounter = 0;

        function typeLoop() {
            const current = words[wordIdx];
            if (!deleting) {
                typedEl.textContent = current.substring(0, charIdx + 1);
                charIdx++;
                if (charIdx === current.length) {
                    pauseCounter = 0;
                    setTimeout(typeLoop, 2000); // pause at full word
                    deleting = true;
                    return;
                }
                setTimeout(typeLoop, 80 + Math.random() * 40);
            } else {
                typedEl.textContent = current.substring(0, charIdx);
                charIdx--;
                if (charIdx < 0) {
                    deleting = false;
                    charIdx = 0;
                    wordIdx = (wordIdx + 1) % words.length;
                    setTimeout(typeLoop, 400);
                    return;
                }
                setTimeout(typeLoop, 40);
            }
        }
        setTimeout(typeLoop, 1200);
    }

    // --- Video switcher (hero) ---
    const videoDots = document.querySelectorAll('.vid-dot');
    if (videoDots.length && heroVideo) {
        videoDots.forEach(dot => {
            dot.addEventListener('click', () => {
                const src = dot.dataset.video;
                if (!src) return;
                videoDots.forEach(d => d.classList.remove('active'));
                dot.classList.add('active');
                heroVideo.classList.remove('loaded');
                heroVideo.querySelector('source').src = src;
                heroVideo.load();
                heroVideo.addEventListener('canplay', () => {
                    heroVideo.classList.add('loaded');
                }, { once: true });
                setTimeout(() => heroVideo.classList.add('loaded'), 2000);
            });
        });
    }

    // --- Scroll animations (IntersectionObserver) ---
    const animateEls = document.querySelectorAll('.animate-in');
    if (animateEls.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        animateEls.forEach(el => observer.observe(el));
    }

    // --- Counter animation ---
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count, 10);
                    const duration = 2000;
                    const start = performance.now();
                    
                    function step(now) {
                        const elapsed = now - start;
                        const progress = Math.min(elapsed / duration, 1);
                        // Ease out cubic
                        const eased = 1 - Math.pow(1 - progress, 3);
                        el.textContent = Math.round(eased * target);
                        if (progress < 1) requestAnimationFrame(step);
                    }
                    requestAnimationFrame(step);
                    counterObserver.unobserve(el);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(el => counterObserver.observe(el));
    }

    // --- Smooth scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- Contact form validation (if present) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const status = document.getElementById('formStatus');
            const required = contactForm.querySelectorAll('[required]');
            let valid = true;

            required.forEach(field => {
                field.classList.remove('error');
                if (!field.value.trim()) {
                    field.classList.add('error');
                    valid = false;
                }
                if (field.type === 'email' && field.value && !field.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    field.classList.add('error');
                    valid = false;
                }
            });

            if (!valid) {
                if (status) {
                    status.className = 'form-status error';
                    status.textContent = 'Please fill in all required fields.';
                }
                return;
            }

            if (status) {
                status.className = 'form-status success';
                status.textContent = 'Thank you! We\'ll be in touch shortly.';
            }
            contactForm.reset();
        });
    }

    // --- Parallax-lite for video sections ---
    const parallaxVideos = document.querySelectorAll('.stats-bg-video, .cta-bg-video');
    if (parallaxVideos.length) {
        window.addEventListener('scroll', () => {
            parallaxVideos.forEach(video => {
                const rect = video.parentElement.parentElement.getBoundingClientRect();
                const speed = 0.15;
                const yPos = rect.top * speed;
                video.style.transform = `translateY(${yPos}px)`;
            });
        }, { passive: true });
    }

});
