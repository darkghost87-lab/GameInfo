document.addEventListener('DOMContentLoaded', () => {
    sliderDownloadlist();
    handleHeader();
    underlineHeader();
    mobileMenu();
});

function sliderDownloadlist() {
    const swiper = new Swiper('.container-slider-item-swiper', {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 16,
        grabCursor: true,
        keyboard: { enabled: true },
        dir: 'rtl',
        // loopAdditionalSlides: 8,
        // centeredSlides: false,

        navigation: {
            prevEl: '.btnPrev',
            nextEl: '.btnNext',
        },

        breakpoints: {
            0: { slidesPerView: 1 },
            480: {
                slidesPerView: 2,
                spaceBetween: 0,
            },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
        },

        effect: 'slide',
        speed: 700,
    });
}

function handleHeader() {
    const nav = document.querySelector('.nav');
    const mobileListItems = document.querySelector('.flex-item-header-right-mobile');
    const overlay = document.querySelector('.overlayBody');

    window.addEventListener('scroll', (e) => {
        let scroll = window.pageYOffset;
        if (scroll > 100) {
            nav.classList.add('fixed-nav');
            if (mobileListItems.classList.contains('active-menu')) {
                mobileListItems.classList.remove('active-menu');
                overlay.classList.remove('averlayActive');
            }
        } else {
            nav.classList.remove('fixed-nav');
        }
    });
}

function underlineHeader() {
    const container = document.querySelector('.flex-item-header-right');
    const listItems = document.querySelectorAll('.list-item');
    const underLine = document.querySelector('.underline');

    listItems.forEach((item) => {
        let itemRight = item.getBoundingClientRect().right;
        let containerRight = container.getBoundingClientRect().right;
        let itemWidth = item.getBoundingClientRect().width;
        item.addEventListener('mouseenter', () => {
            underLine.style.width = `${itemWidth}px`;
            underLine.style.transform = `translateX(-${containerRight - itemRight}px)`;
        });

        item.addEventListener('mouseleave', () => {
            underLine.style.width = `0px`;
        })
    });
}

function mobileMenu() {
    const mobileListItems = document.querySelector('.flex-item-header-right-mobile');
    const openMenu = document.querySelector('.open-menu');
    const closeMenu = document.querySelector('.close-menu');
    const overlay = document.querySelector('.overlayBody');

    openMenu.addEventListener('click', () => {
        mobileListItems.classList.add('active-menu');
        overlay.classList.add('averlayActive');
    });

    closeMenu.addEventListener('click', () => {
        mobileListItems.classList.remove('active-menu');
        overlay.classList.remove('averlayActive');
    });
}

export { mobileMenu, handleHeader, underlineHeader };