function usname(){
	let name = prompt('Enter your name', 'User');
	document.getElementById('us_name').innerHTML = name;}
	
let usscore=0;
let compscore=0;

function generate(){	
	let uspoint = Math.floor(Math.random()*11);
	document.getElementById('us_point').innerHTML = uspoint;
	
	let comppoint = Math.floor(Math.random()*11);
	document.getElementById('comp_point').innerHTML = comppoint;
	
	if (uspoint==comppoint){
		document.getElementById('us_score').innerHTML = ++usscore;
		document.getElementById('comp_score').innerHTML = ++compscore;}
		
	if (uspoint>comppoint){
		document.getElementById('us_score').innerHTML = ++usscore;}
	else {
		document.getElementById('comp_score').innerHTML = ++compscore;}
			
	if(usscore==3 || compscore==3){
		if(usscore>compscore){
			setTimeout(() => confirm("U win")?document.location.reload() : undefined, 300);}			  
		else{
			setTimeout(() => confirm("Computer win")?document.location.reload() : undefined, 300);}
}}
			
	

