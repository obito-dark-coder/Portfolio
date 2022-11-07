
let pageSlider = new Swiper('.page', {
    //New classes
    wrapperClass: "page__wrapper",
    slideClass: "page__screen",

    //Vertical Slider
    direction: 'vertical',


    //Slides for view
    slidesPerView: 'auto',

    //Parallax
    parallax: false,

    

    //Keyboard moves
    keyboard: {
        //On/off
        enabled: true,
        //On/off in viewport
        onlyvewport: true,
        //On/off keyboards pageDown pageUp
        pageUpDown: true,
    },

    //management of mouse
    mousewheel: {
        //sensitivity reels mouse
        sensitivity: 2,
        //Object class of scroll mouse
    },

    //disabling functionality
    watchOverflow: true,

    //Speed
    speed: 800,

    //update swiper
    // of changes slider's elements
    observer: true,
    //update swiper
    // of changes parent's elements
    observeParents: true,
    //update cwiper
    // of changes children's elements slider's
    observeSlideChildren: true,

    //Navigation
    //bullets, progress bar, current position
    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        chickable: true,
        bulletClass: 'page__bullet',
        bulletActiveClass: 'page_bullet_active',
    },
    //Scroll
    scrollbar: {
        el: '.page__scroll',
        dragClass: 'page__drag-scroll',
        //Drag and drop
        draggable: true,
    }
});


//let menuLinks = document.querySelectorAll('.menu__link');
//
//function menulider() {
//    if (menuLinks.length > 0) {
//        menuLinks[pageSlider.realIndex].classList.add('_active');
 //       for (let index = 0; index < Array.length; index++) {
//            const menuLink = menuLinks[index];
//            menu
//
//        }
//    }
//}