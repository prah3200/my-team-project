const navOpener = () => {
    const btnNavOpener = document.querySelector('.js-nav-opener');
    const navHolder = document.querySelector('.js-nav-holder');

    btnNavOpener.addEventListener( 'click', (e) => {
        e.target.classList.toggle('active');
        navHolder.classList.toggle('active');  
    });
}

navOpener();