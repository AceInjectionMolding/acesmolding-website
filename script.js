/* ============================================
   AIM Website — Script v3.0 "Precision"
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // --- Navbar scroll effect ---
    const navbar = document.getElementById('navbar');
    const handleScroll = () => {
        navbar?.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // --- Mobile menu ---
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinks = document.getElementById('navLinks');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            const open = navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active', open);
            document.body.classList.toggle('menu-open', open);
            mobileToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
                mobileToggle.setAttribute('aria-expanded', 'false');
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

    // --- Scroll-reveal animations ---
    const animateEls = document.querySelectorAll('.animate-in');
    if (animateEls.length) {
        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
            animateEls.forEach(el => observer.observe(el));
        } else {
            animateEls.forEach(el => el.classList.add('visible'));
        }
    }

    // --- Counter animation ---
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length && 'IntersectionObserver' in window) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const el = entry.target;
                    const target = parseInt(el.dataset.count, 10);
                    const duration = 1800;
                    const start = performance.now();

                    function step(now) {
                        const progress = Math.min((now - start) / duration, 1);
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

    // --- Smooth scroll for same-page anchors ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- Contact form (Netlify) ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
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

            const formData = new FormData(contactForm);
            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            })
            .then(() => {
                if (status) {
                    status.className = 'form-status success';
                    status.textContent = 'Thank you! We\'ll be in touch within one business day.';
                }
                contactForm.reset();
            })
            .catch(() => {
                if (status) {
                    status.className = 'form-status error';
                    status.textContent = 'Something went wrong. Please email us directly at paul@acesmolding.com';
                }
            });
        });
    }

});
