var hamburgerMenu = document.querySelector('#hamburgerMenu');
var header = document.getElementsByTagName('header')[0];
var main = document.getElementsByTagName('main')[0];
var footer = document.getElementsByTagName('footer')[0];

function hamburgerOpen(){
    hamburgerMenu.style.display = 'block'
    header.style.display = 'none'
    main.style.display = 'none'
    footer.style.display = 'none'
}

function hamburgerClose(){
    hamburgerMenu.style.display = 'none'
    header.style.display = 'block'
    main.style.display = 'block'
    footer.style.display = 'block'
}