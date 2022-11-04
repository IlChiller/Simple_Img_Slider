document.addEventListener("DOMContentLoaded", function() {
   
    var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination' ,
            clickable: true
        },
        paginationClickable: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },

        // This code is for auto-scroll
        autoplay: {
            delay: 5000,
        },
    });
    
});