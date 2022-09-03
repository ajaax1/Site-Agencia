function menuShow() {
    let menuMobile = document.querySelector('#menuResponsivo');
    let menuicon = document.querySelector('#menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        menuicon.innerHTML="menu"
        
    } else {
        menuMobile.classList.add('open');
        menuicon.innerHTML="close"
    }
}