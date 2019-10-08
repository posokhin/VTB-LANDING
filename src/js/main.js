$(document).ready(function(){

    var phoneFields = document.querySelectorAll('input[data-phone]');
    phoneFields.forEach(function(el){
        var phoneMask = IMask(
            el, {
                mask: '+{7}(000)000-00-00'
            }
        )
    });
    
    function animate(el, type){
        el = document.querySelectorAll(el);
        el.forEach(function(item){
            var itemCoords = item.getBoundingClientRect();
            window.addEventListener('scroll', function(){
                if(window.pageYOffset + 500 >= itemCoords.y){
                    item.classList.add('animated' , type);
                }
            });
        });
    }
    animate('.block2__middle-item', 'fadeIn');
    animate('.block2__bottom-item', 'fadeInLeft');


    $('.js-open-popap').on('click', fadePopap);
    $('.popap .close').on('click', closePopap);
    $('.popap-success .close').on('click', closePopapSuccess);

    function fadePopap(e){
        e.preventDefault();
        $('.overlay').fadeIn();
        $('.popap').fadeIn();
    }
    function closePopap(){
        $('.overlay').fadeOut();
        $('.popap').fadeOut();
    }
    function closePopapSuccess(){
        $('.overlay').fadeOut();
        $('.popap-success').fadeOut();
    }

    if(!localStorage.getItem('visit')){
        localStorage.setItem('visit', true);
        $('.b-cookie').css('display', 'block');
    }
    else{
        $('.b-cookie').css('display', 'none');
    }
    $('.b-cookie__btn a').on('click', function(e){
        e.preventDefault();
        $('.b-cookie').removeClass('animated fadeInUp');
        $('.b-cookie').addClass('animated fadeOutDown');
    });
});