document.addEventListener('DOMContentLoaded', function() {
    // MENU TOGGLE
    const menu = document.querySelector('#menu')
    const nav = document.querySelector('#nav')
    const contentNav = document.querySelector('#contentNav')

    menu.addEventListener('click', function() {
        nav.classList.toggle('visible');
        contentNav.classList.toggle('content-nav__styles')
    })

    // FUNCIONES PARA TARJETA GIRATORIA

    // AGREGAR CLASES A TARJETA
    const viewMoreButtons = document.querySelectorAll('.viewMore');
    const faceFrontElements = document.querySelectorAll('.faceFront');
    const faceBackElements = document.querySelectorAll('.faceBack');

    viewMoreButtons.forEach(function(viewMore, index) {
        viewMore.addEventListener('click', function(event) {
            event.preventDefault();
            faceFrontElements[index].classList.add('face', 'front');
            faceBackElements[index].classList.add('back');
        });
    });

    // QUITAR CLASES A TARJETA
    const backButtonElements = document.querySelectorAll('.backButton');

    backButtonElements.forEach(function(back, index) {
        back.addEventListener('click', function(event) {
            event.preventDefault();
            faceFrontElements[index].classList.remove('face', 'front');
            faceBackElements[index].classList.remove('face', 'back');
            faceBackElements[index].classList.add('visible')
        });
    });
});





