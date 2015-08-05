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
      goTellMy();
};

function goTellMy(){
	$(".projektsX").mouseenter(function(){
		$(".activePro", this).show();
		$(".nameProjekts", this).animate({	
   			 height: "toggle"
  		}, 500, function() {
 	   		// Animation complete.
  		});
  		$(".simplehr", this).animate({	
   			width: "toggle"
  		}, 500, function() {
 	   		// Animation complete.
  		});
  		$(".textProjekts", this).animate({	
   			height: "toggle"
  		}, 500, function() {
 	   		// Animation complete.
  		});
	})
	$(".projektsX").mouseleave(function(){
		$(".activePro", this).hide();
		$(".nameProjekts", this).animate({	
   			 height: "toggle"
  		}, 200, function() {
 	   		// Animation complete.
  		});
  		$(".simplehr", this).animate({	
   			 width: "toggle"
  		}, 100, function() {
 	   		// Animation complete.
  		});
  		$(".textProjekts", this).animate({	
   			height : "toggle"
  		}, 100, function() {
 	   		// Animation complete.
  		});
	})	
}



