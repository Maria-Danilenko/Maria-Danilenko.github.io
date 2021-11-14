function usname(){
	let name = prompt('Enter your name:', 'User');
	document.getElementById('us_name').innerHTML = name;}

let usscore=0;
let compscore=0;
let attempt=0;

let image = ["6_of_clubs.png", "6_of_diamonds.png", "6_of_hearts.png", "6_of_spades.png",
	"7_of_clubs.png", "7_of_diamonds.png", "7_of_hearts.png", "7_of_spades.png",
	"8_of_clubs.png", "8_of_diamonds.png", "8_of_hearts.png", "8_of_spades.png",
	"9_of_clubs.png", "9_of_diamonds.png", "9_of_hearts.png", "9_of_spades.png",
	"10_of_clubs.png", "10_of_diamonds.png", "10_of_hearts.png", "10_of_spades.png",
	"jack_of_clubs2.png", "jack_of_diamonds2.png", "jack_of_hearts2.png", "jack_of_spades2.png",
	"queen_of_clubs2.png", "queen_of_diamonds2.png", "queen_of_hearts2.png", "queen_of_spades2.png",
	"king_of_clubs2.png", "king_of_diamonds2.png", "king_of_hearts2.png", "king_of_spades2.png",
	"ace_of_clubs.png", "ace_of_diamonds.png", "ace_of_hearts.png", "ace_of_spades.png"];

function generate(){	
	attempt+=1;
	document.getElementById('attempts').innerHTML = "Attempt "+attempt+" of 3";

	let uscard = Math.round(Math.random()*(image.length-1));
	document.getElementById('us_card').innerHTML = "<img src="+image[uscard]+">";
	
	let compcard = Math.round(Math.random()*(image.length-1));
	document.getElementById('comp_card').innerHTML = "<img src="+image[compcard]+">";
	
	if(uscard > -1 && uscard < 4){
		usscore+=6;
		document.getElementById('us_score').innerHTML = usscore;
	}
	else if(uscard > 3 && uscard < 8){
		usscore+=7;
		document.getElementById('us_score').innerHTML = usscore;
	}
	else if(uscard > 7 && uscard < 12){
		usscore+=8;
		document.getElementById('us_score').innerHTML = usscore;
	}
	else if(uscard > 11  && uscard < 16){
		usscore+=9;
		document.getElementById('us_score').innerHTML = usscore;
	}
	else if(uscard > 15 && uscard < 20){
		usscore+=10;
		document.getElementById('us_score').innerHTML = usscore;
	}
	else if(uscard > 19 && uscard < 24){
		usscore+=2;
		document.getElementById('us_score').innerHTML = usscore;
	}
	else if(uscard > 23 && uscard < 28){
		usscore+=3;
		document.getElementById('us_score').innerHTML = usscore;
	}
	else if(uscard > 24 && uscard < 32){
		usscore+=4;
		document.getElementById('us_score').innerHTML = usscore;
	}
	else{
		usscore+=11;
		document.getElementById('us_score').innerHTML = usscore;
	}
	
	if(compcard > -1 && compcard < 4){
		compscore+=6;
		document.getElementById('comp_score').innerHTML = compscore;
	}
	else if(compcard > 3 && compcard < 8){
		compscore+=7;
		document.getElementById('comp_score').innerHTML = compscore;
	}
	else if(compcard > 7 && compcard < 12){
		compscore+=8;
		document.getElementById('comp_score').innerHTML = compscore;
	}
	else if(compcard > 11  && compcard < 16){
		compscore+=9;
		document.getElementById('comp_score').innerHTML = compscore;
	}
	else if(compcard > 15 && compcard < 20){
		compscore+=10;
		document.getElementById('comp_score').innerHTML = compscore;
	}
	else if(compcard > 19 && compcard < 24){
		compscore+=2;
		document.getElementById('comp_score').innerHTML = compscore;
	}
	else if(compcard > 23 && compcard < 28){
		compscore+=3;
		document.getElementById('comp_score').innerHTML = compscore;
	}
	else if(compcard > 24 && compcard < 32){
		compscore+=4;
		document.getElementById('comp_score').innerHTML = compscore;
	}
	else{
		compscore+=11;
		document.getElementById('comp_score').innerHTML = compscore;
	}	
	
	if(attempt == 3){
		if(usscore>compscore){
			setTimeout(() => confirm("U win")?document.location.reload() : undefined, 300);}			  
		else if(usscore<compscore){
			setTimeout(() => confirm("Computer win")?document.location.reload() : undefined, 300);}
		else 
			setTimeout(() => confirm("Friendship win <3")?document.location.reload() : undefined, 300);
	}
}