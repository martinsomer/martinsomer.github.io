window.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    (function setScrollOffset () {
        document.documentElement.style.setProperty('--scroll-offset', `${header.offsetHeight + 24}px`);
        window.addEventListener('resize', setScrollOffset);
    })();

    const year = document.querySelector('#year');
    const time = document.querySelector('#time');
    (function updateFooter () {
        const date = new Date();

        year.textContent = date.getFullYear().toString();
        time.textContent = date.toLocaleTimeString('en-US', {
            timeZone: 'Europe/Tallinn',
            hour: 'numeric',
            minute: 'numeric',
        });

        setTimeout(updateFooter, 1000);
    })();
});
