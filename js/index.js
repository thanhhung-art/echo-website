

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
		      breakpoint: 1366,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true,
		        arrows: false,
		      }
		    },
		    {
		      breakpoint: 640,
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
  		]
 })	
);

// control menu mobile

let navbarMobile = document.getElementById("navbar-mobile");
let subMenus = document.getElementsByClassName("open-submenu");

function handleOpenClose (){
	if( navbarMobile.style.right === "-270px" ){
		navbarMobile.style.right = "0px"
	}
	else {
		navbarMobile.style.right = "-270px"
	}
}

function handleSubMenu(e) {

		if(subMenus[e].nextElementSibling.style.height === "0px"){
			subMenus[e].nextElementSibling.style.height = "auto";
			subMenus[e].nextElementSibling.style.opacity = "1";
			subMenus[e].style.transform = "rotate(180deg)";
			if(e === 1){
				subMenus[0].nextElementSibling.style.height = "auto";
			}
		}
		else {
			subMenus[e].nextElementSibling.style.height = "0px";
			subMenus[e].nextElementSibling.style.opacity = "0";
			subMenus[e].style.transform = "none";
			if(e === 1){
				subMenus[0].nextElementSibling.style.height = "auto";
			}
		}
}
