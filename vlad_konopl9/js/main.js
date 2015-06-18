
igrok = {
	sleva: 500,
	swerhy: 100
}
vrag = {
	sleva: 200,
	swerhy: 200
	
}
pole = {
	lewo: 200,
	prawo: 1100,
	werh: 100,
	niz: 500
}
	

function idi(napravlenie){
	
	if (napravlenie == 'sleva' && igrok.sleva > pole.lewo) {
		igrok.sleva -= 100;
	}
	if (napravlenie == 'vprawo' && igrok.sleva < pole.prawo) {
		igrok.sleva += 100;
	}
	if (napravlenie == 'top' && igrok.swerhy > pole.werh) {
		igrok.swerhy -= 100;
	}
	if (napravlenie == 'bottom' && igrok.swerhy < pole.niz) {
		igrok.swerhy += 100;
	}
	 document.getElementsByClassName('igrok')[0].style.left = igrok.sleva+'px';
	 document.getElementsByClassName('igrok')[0].style.top = igrok.swerhy+'px';

	 proverka();
}

function vragPodhodit(){
    if(igrok.swerhy < vrag.swerhy){
        vrag.swerhy -= 100;
    }    
    if(igrok.swerhy > vrag.swerhy){
        vrag.swerhy += 100;
    }
    if(igrok.sleva > vrag.sleva){
        vrag.sleva += 100;
    }   
    if(igrok.sleva < vrag.sleva){
        vrag.sleva -= 100;
    }

    document.getElementsByClassName('vrag')[0].style.top = vrag.swerhy +'px';
    document.getElementsByClassName('vrag')[0].style.left = vrag.sleva +'px';

    proverka();

} 
function proverka(){
	if (igrok.sleva == vrag.sleva) {
		if (igrok.swerhy == vrag.swerhy) {
			document.getElementsByClassName('igrok')[0].style.display ="none";
			document.getElementsByClassName('finish')[0].style.display="block";
		};
	};
}

var spped = 2100;

function faster(){
	spped -= 100;
	setInterval(vragPodhodit, spped);
	console.log(spped);
}
faster();

function again(){
	document.getElementsByClassName('igrok')[0].style.display ="block";
	document.getElementsByClassName('finish')[0].style.display="none";
	vrag.sleva = 200;
	vrag.swerhy = 200;
}



