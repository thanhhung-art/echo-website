

$(document).ready( 
	$('.wrap-slider').slick({
  		dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
		pauseOnHover: true,

        responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                prevArrow: false,
    			nextArrow: false,
    			dots: false,
    			pauseOnHover: false,
            }
        }
  ]

 })	
);