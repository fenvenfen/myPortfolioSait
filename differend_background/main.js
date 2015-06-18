function time() {
   var secynda,b,c,a;
   var x = document.getElementsByClassName("example");
			a = Math.floor(Math.random()*255).toString(16).toUpperCase();
			b = Math.floor(Math.random()*255).toString(16).toUpperCase();
			c = Math.floor(Math.random()*255).toString(16).toUpperCase();
			var sum = a + b + c;
			if(sum.length == 6){
				console.log(" 1-parameter: " + a + " 2-parameter: " + b + " 3-parameter: " + c);
	 			document.body.style.backgroundColor='#' + a + b  + c ;		
   			    
   				x[0].innerHTML = '<span>Цвет фона: #</span>' + a +  b  + c;    
   			    
   			}else{
   				document.body.style.backgroundColor='#C18BB6';
   				x[0].innerHTML = '<span>Цвет фона: #C18BB6</span>';    		 
   			}
   			console.log(sum);
	 	}
function start() {
   id = setInterval('time()', 1000);
}
function stopS(){
	clearTimeout(id);
}


