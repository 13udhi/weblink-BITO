const foot = document.querySelector(".footer-logo");

foot.addEventListener('click', function() {
    const footLink = document.querySelector('.footer .row')
    footLink.classList.toggle('after');
})