const menus_input = [...document.querySelectorAll('header .menus .menu-expand')].map(el => el.parentElement).map(el => el.querySelector('input[id$=-menu-toggle]'));

function closeInactive(el){
    if (document.querySelector('header label.hamburger').getBoundingClientRect().width > 0){
        const hamburger = document.querySelector('header input.hamburger');
        if (hamburger.checked && (el.target.closest('header') === null || el.target === document.querySelector('header > :first-child'))){
            hamburger.checked = false;
        }
    } else {
        try {
            const current = el.target.closest('li').querySelector('input[id$=-menu-toggle]');
            const opening = current.checked;
            if (opening){
                menus_input.filter(el => el !== current && el.checked).forEach(el => {
                    el.checked = false;
                });
            }
        } catch {
            menus_input.filter(el => el.checked).forEach(el => {
                el.checked = false;
            });
        }
    }
}

document.addEventListener('click', closeInactive);