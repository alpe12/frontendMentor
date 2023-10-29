const menu_input = document.querySelector('header input.hamburger'),
      menu_label = document.querySelector('header label.hamburger');

function closeWhenInactive(el){
    if (
        menu_input.checked
        //mobile design
        && menu_label.getBoundingClientRect().width > 0
        //ignore clicks on hamburger
        && el.target.closest('header > .hamburger') === null
        //ignore clicks on navbar
        && el.target.closest('header > nav') === null
    ){
        menu_input.checked = false;
    }
}

document.addEventListener('click', closeWhenInactive);