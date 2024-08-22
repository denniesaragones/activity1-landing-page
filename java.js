ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 100,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top'});
ScrollReveal().reveal('.home-img, .contact form', { origin: 'buttom'});
ScrollReveal().reveal('.home-contact h1, .about-img', { origin: 'left'});
ScrollReveal().reveal('.home-contact h2, .about-content', { origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['A Feature', 'Where your', 'Fantasy meet', 'Your expectation', 'To everything!!'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});