$(document).ready(function () {

    var phoneFields = document.querySelectorAll('input[data-phone]');
    phoneFields.forEach(function (el) {
        var phoneMask = IMask(
            el, {
            mask: '+{7}(000)000-00-00'
        }
        )
    });

    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 120, // offset (in px) from the original trigger point
        delay: 100, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });


    $('.js-open-popap').on('click', fadePopap);
    $('.popap .close').on('click', closePopap);
    $('.popap-success .close').on('click', closePopapSuccess);

    function fadePopap(e) {
        e.preventDefault();
        $('.overlay').fadeIn();
        $('.popap').fadeIn();
    }
    function closePopap() {
        $('.overlay').fadeOut();
        $('.popap').fadeOut();
    }
    function closePopapSuccess() {
        $('.overlay').fadeOut();
        $('.popap-success').fadeOut();
    }

    if (!localStorage.getItem('visit')) {
        localStorage.setItem('visit', true);
        $('.b-cookie').css('display', 'block');
    }
    else {
        $('.b-cookie').css('display', 'none');
    }
    $('.b-cookie__btn a').on('click', function (e) {
        e.preventDefault();
        $('.b-cookie').removeClass('animated fadeInUp');
        $('.b-cookie').addClass('animated fadeOutDown');
    });
});