const mobileBtn = () => {
    //menu-animado

    let menuIsOpen = false;
    let isValidWidth = window.innerWidth < 768;

    const img_profile = document.querySelector('.img_profile');
    const mobileBtn = document.getElementById('mobileBtn');
    const blur_menu = document.querySelector('.blur_menu');
    const main = document.querySelector('#main');

    const svgX = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>`;

    const svgMenu = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
    `;

    //validar que tengo 768px o menos o onresize

    window.addEventListener('resize', () => {
        isValidWidth = window.innerWidth < 768;
        // Si para de false a true recargar la página
        if (isValidWidth && !menuIsOpen) {
            //window.location.reload();
        }
        // Si para de true a false recargar la página
        if (!isValidWidth && menuIsOpen) {
            //window.location.reload();
        }
    });

    window.addEventListener('orientationchange', () => {
        isValidWidth = window.innerWidth < 768;
    });


    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            if (!isValidWidth) return;
            const menu = document.querySelector('.menu');
            const submenu = document.querySelector('.submenu');
            const menu_sup = document.querySelector('.menu_sup');

            menu.classList.toggle('menu-animado');
            menuIsOpen = !menuIsOpen;

            if (menuIsOpen) {
                // Borrar el contenido existente del botón
                mobileBtn.innerHTML = '';

                // Agregar el contenido SVG para el icono de cierre
                mobileBtn.insertAdjacentHTML('beforeend', svgX);

                // Ocultar img-profile
                img_profile.classList.add('d-none');

                // Mostrar blur_menu
                blur_menu.classList.remove('d-none');

                // añadirle height: 80% a main y overflow: hidden;
                main.style.height = '80%';
                main.style.overflow = 'hidden';
            } else {
                // Borrar el contenido existente del botón
                mobileBtn.innerHTML = '';

                // Agregar el contenido SVG para el icono de menú
                mobileBtn.insertAdjacentHTML('beforeend', svgMenu);

                // Mostrar img-profile
                img_profile.classList.remove('d-none');

                // Ocultar blur_menu
                blur_menu.classList.add('d-none');

                // añadirle height: 100% a main y quirarle overflow: hidden;
                main.style.height = '100%';
                main.style.overflow = 'scroll';
            }

            // Ocultar submenu
            submenu.classList.add('d-none');

            // Mostrar menu_sup
            menu_sup.classList.remove('d-none');
        });

        blur_menu.addEventListener('click', () => {
            if (!isValidWidth) return;
            const menu = document.querySelector('.menu');
            const submenu = document.querySelector('.submenu');
            const menu_sup = document.querySelector('.menu_sup');

            // Cerrar menu
            menu.classList.remove('menu-animado');

            // Cambiar mobileBtn a menu
            mobileBtn.innerHTML = svgMenu;

            // Mostrar img-profile
            img_profile.classList.remove('d-none');

            // Ocultar blur_menu
            blur_menu.classList.add('d-none');

            // añadirle height: 100% a main y quirarle overflow: hidden;
            main.style.height = '100%';
            main.style.overflow = 'scroll';

            // Cambiar menuIsOpen a false
            menuIsOpen = false;

            // Ocultar submenu
            submenu.classList.add('d-none');

            // Mostrar menu_sup
            menu_sup.classList.remove('d-none');

            return;
        });
    }

    const gestionarCamp = document.getElementById('gestionar-camp');
    if (gestionarCamp) {
        gestionarCamp.addEventListener('click', () => {
            const url = gestionarCamp.getAttribute('data-url');
            window.location.href = url;
        });
    }

};

export default mobileBtn;
