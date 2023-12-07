import owlCarousel from "owl.carousel";

const bannerThumbnailCarousel = () => {
    if ($('.banner--thumbnail .banner__img-list .banner__img-item').length > 1) {
        /* 
        * Create carousel with thumbnail with "dotsData" option
        */
        let $owlThumbnail = $('.banner--thumbnail .banner__img-list').addClass('owl-carousel').owlCarousel({
            items: 1,
            nav: true,
            navText: [
                '<svg xmlns="http://www.w3.org/2000/svg" width="14.041" height="26.488" viewBox="0 0 14.041 26.488"><path d="M26.258,1.336l-12.4,12.4a.628.628,0,0,1-.059.087.781.781,0,0,1-1.089-.012c-.006-.006-.013-.008-.019-.013h0L.229,1.339h0A.781.781,0,1,1,1.333.234l11.908,11.9L25.152.229a.783.783,0,1,1,1.107,1.107Z" transform="translate(14.041) rotate(90)" fill="#fff"/></svg>',
                '<svg xmlns="http://www.w3.org/2000/svg" width="14.041" height="26.488" viewBox="0 0 14.041 26.488"><path d="M26.258,12.7,13.856.3A.628.628,0,0,0,13.8.215a.781.781,0,0,0-1.089.012C12.7.233,12.7.235,12.69.241h0L.229,12.7h0a.781.781,0,0,0,1.1,1.105L13.241,1.9,25.152,13.811A.783.783,0,1,0,26.259,12.7Z" transform="translate(14.041) rotate(90)" fill="#fff"/></svg>'
            ],
            loop: true,
            autoplay: true,
            autoplayTimeout: 8000,
            autoplayHoverPause: true,
            margin: 1,
            center: true,
            dotsData: true, // para los thumbnails
        });

        // Para la navegación de los thumbnails
        $('.owl-dot').on('click', $owlThumbnail, function () {
            $('.owl-dot', $owlThumbnail).removeClass('active');
            $(this).addClass('active');
            $owlThumbnail.trigger('to.owl.carousel', [$(this).index(), 300]);
        })
    }
}

export default bannerThumbnailCarousel;