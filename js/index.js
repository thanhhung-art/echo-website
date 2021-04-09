

$(document).ready( 
	$('.wrap-slider').slick({
  		dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    	responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: false,
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        arrows: false,
		      }
		    }
		    // You can unslick at a given breakpoint now by adding:
		    // settings: "unslick"
		    // instead of a settings object
  		]
 })	
);

// control menu mobile

let openMenu = document.getElementById("button-open-menu");
let closeMenu = document.getElementById("button-close-menu");
let navbarMobile = document.getElementById("navbar-mobile");
let submenu = document.getElementById("submenu");
let submenu2 = document.getElementById("submenu-2");
let about = document.getElementById("about");

function handleOpen (){
	navbarMobile.style.right = "0";
}

function handleClose () {
	navbarMobile.style.right = "-270px";
}

function handleSubmenu () {
	if(submenu.nextElementSibling.style.height === "0px" ){
		submenu.nextElementSibling.style.height = "80px";
		submenu.nextElementSibling.style.opacity = "1";
	}
	else{
		submenu.nextElementSibling.style.height = "0px";
		submenu.nextElementSibling.style.opacity = "0";
	}
}

function handleSubmenu2 () {
	if(submenu2.nextElementSibling.style.height === "0px" ){
		submenu2.nextElementSibling.style.height = "80px";
		submenu2.nextElementSibling.style.opacity = "1";
		about.style.paddingTop = "4.4rem";

	}
	else{
		submenu2.nextElementSibling.style.height = "0px";
		submenu2.nextElementSibling.style.opacity = "0";
		about.style.paddingTop = "0px";
	}
}