function openNav(navName){
	if (navName == "about") {
		$('body').animate({ scrollTop: $('.cv').offset().top - $('body').offset().top }, { duration: 'slow', easing: 'swing'});
		$('.menyTop ul li:eq(0)').addClass('menyAc');
		$('.menyTop ul li:eq(1)').removeClass('menyAc');
		$('.menyTop ul li:eq(2)').removeClass('menyAc');
		$('.menyTop ul li:eq(3)').removeClass('menyAc');
	};
	if (navName == "ability") {
		$('body').animate({ scrollTop: $('.ability').offset().top - $('body').offset().top }, { duration: 'slow', easing: 'swing'});
		$('.menyTop ul li:eq(1)').addClass('menyAc');
		$('.menyTop ul li:eq(0)').removeClass('menyAc');
		$('.menyTop ul li:eq(2)').removeClass('menyAc');
		$('.menyTop ul li:eq(3)').removeClass('menyAc');
	};
	if (navName == "portfolio") {
		$('body').animate({ scrollTop: $('.portfolio').offset().top - $('body').offset().top }, { duration: 'slow', easing: 'swing'});
		$('.menyTop ul li:eq(2)').addClass('menyAc');
		$('.menyTop ul li:eq(1)').removeClass('menyAc');
		$('.menyTop ul li:eq(0)').removeClass('menyAc');
		$('.menyTop ul li:eq(3)').removeClass('menyAc');
	};
	if (navName == "contact") {
		$('body').animate({ scrollTop: $('.contact').offset().top - $('body').offset().top }, { duration: 'slow', easing: 'swing'});
		$('.menyTop ul li:eq(3)').addClass('menyAc');
		$('.menyTop ul li:eq(1)').removeClass('menyAc');
		$('.menyTop ul li:eq(2)').removeClass('menyAc');
		$('.menyTop ul li:eq(0)').removeClass('menyAc');
	};
};
function openMenyTop(){
	var topsroll = window.pageYOffset;
		if (topsroll > 600) {
		$('.menyTop').addClass('activeMeny');
		//document.getElementById('menyTop').style.display = "block";
	}
	else {
		$('.menyTop').removeClass('activeMeny').addClass('menyTop');
		//document.getElementById('menyTop').style.display = "none";
	}

};
window.onload = function() {
      setInterval(openMenyTop, 100);
};




