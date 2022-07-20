const menuLinks = document.querySelectorAll('.header__link');

menuLinks.forEach(link => {
    link.addEventListener('click', e => {
        addActiveLink(e);
    });
})

const addActiveLink = (activelink) => {
    menuLinks.forEach(link => {
        if (link == activelink.target) {
            activelink.target.classList.add('header__item_active');
        }else{
            link.classList.remove('header__item_active')
        }
    })
}





