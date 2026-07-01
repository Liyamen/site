window.addEventListener('DOMContentLoaded', () =>{
    const menu = document.querySelector('.main-section__icons'),
    menuItem = document.querySelectorAll('.icon'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('main-section__icons_active');
    });

    menuItem.forEach(item =>{
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('main-section__icons_active');
        })
    })
})