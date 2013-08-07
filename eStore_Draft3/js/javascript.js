var timeout    = 500;
var closetimer = 0;
var ddmenuitem = 0;

function jsddm_open() {
	jsddm_canceltimer();
	jsddm_close();
	if(ddmenuitem = $(this).find('div.dropdown_container'))
   		ddmenuitem.show();
}

function jsddm_close() {
	if(ddmenuitem) ddmenuitem.hide();
}

function jsddm_timer() {
	closetimer = window.setTimeout(jsddm_close, timeout);
}

function jsddm_canceltimer() {
	if(closetimer) {
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

$(document).ready(function() {

	// Drop-down
	$("div.header_menu > ul > li > div.dropdown_container").hide();

	$('div.header_menu > ul > li').on('mouseover', jsddm_open); // JS dropdown menu
	$('div.header_menu > ul > li').on('mouseout',  jsddm_timer);

	// Slideshow
	$("#slideshow > div:gt(0)").hide();

	setInterval(function() { 
	  $('#slideshow > div:first')
	    .fadeOut(1000)
	    .next()
	    .fadeIn(1000)
	    .end()
	    .appendTo('#slideshow');
	},  4500);

});

document.onclick = jsddm_close;