
const listMenu = document.querySelector('.navbarList'); //Tampilan Nav
const hamburgerMenu = document.querySelector('.navbarMenu'); //Menu - Close
const iMenu = document.querySelector('.iconMenu');
const iClose = document.querySelector('.iconClose');

// Membuat Function displayMenu
function displayMenu(){
    if(listMenu.classList.contains('tampil')){
        listMenu.classList.remove('tampil');
        iMenu.style.display='inline';
        iClose.style.display='none';
    }else {
        listMenu.classList.add('tampil');
        iMenu.style.display='none';
        iClose.style.display='inline';
    }
}


listMenu.addEventListener('click',displayMenu);
hamburgerMenu.addEventListener('click',displayMenu);

