

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
let openSubmenu1 = document.getElementsByClassName("submenu");
let openSubmenu2 = document.getElementById("submenu-2");

function handleOpen (){
	navbarMobile.style.right = "0";
}

function handleClose () {
	navbarMobile.style.right = "-270px";
}

function handleSubmenu () {
	for(let i of openSubmenu1){
		i.addEventListener("click",() => {
			if( this.nextElementSibling.style.display === "none"){
				this.nextElementSibling.style.display = "block";
			}
			else{
				this.nextElementSibling.style.display = "none";
			}
		})
	}
}