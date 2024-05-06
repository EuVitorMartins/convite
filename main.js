eventos()
function eventos() {
    ScrollReveal().reveal('.evento-top', {
        duration: 1000,
        distance: '-50px',
        opacity: 1
    });
    ScrollReveal().reveal('.evento-left', {
        delay: 100,
        duration: 2000,
        distance: '50px',
        origin: 'left'
    });
    ScrollReveal().reveal('.evento-right', {
        delay: 100,
        duration: 2000,
        distance: '50px',
        origin: 'right'
    });
}