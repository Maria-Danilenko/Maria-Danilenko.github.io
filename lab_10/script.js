let attempt=0;
function usname(){
	let name = prompt('Enter your name:', 'User');
	document.getElementById('us_name').innerHTML = name;
	document.getElementById('attempts').innerHTML = "Attempt "+attempt+" of 3";}

let image = ["pyro.png", "hydro.png", "anemo.png", "electro.png", "cryo.png", "geo.png", "dendro.png"]

function spin2(a, b){
	if(a==6) return b=0;
	else return b=a+1;	
}
function spin1(a, b){
	if(a==0) return b=6;
	else return b=a-1;	
}
function index(){
	return Math.round(Math.random()*(image.length-1))
}

function generate(){	
	attempt+=1;
	document.getElementById('attempts').innerHTML = "Attempt "+attempt+" of 3";
	
	let col1=index();
	let col2=index();
	let col3=index();
	
	let col11, col12, col21, col22, col31, col32;
	
	document.getElementById('img1-1').innerHTML = "<img src="+image[spin1(col1, col11)]+">";
	document.getElementById('img1-2').innerHTML = "<img src="+image[col1]+">";
	document.getElementById('img1-3').innerHTML = "<img src="+image[spin2(col1, col12)]+">";
	
    document.getElementById('img2-1').innerHTML = "<img src="+image[spin1(col2, col21)]+">";
	document.getElementById('img2-2').innerHTML = "<img src="+image[col2]+">";
	document.getElementById('img2-3').innerHTML = "<img src="+image[spin2(col2, col22)]+">";
	
	document.getElementById('img3-1').innerHTML = "<img src="+image[spin1(col3, col31)]+">";
	document.getElementById('img3-2').innerHTML = "<img src="+image[col3]+">";
	document.getElementById('img3-3').innerHTML = "<img src="+image[spin2(col3, col32)]+">";
	
	if(attempt == 3){
		if(col1==col2 && col2==col3){setTimeout(() => confirm("U win")?document.location.reload() : undefined, 500);}
		else setTimeout(() => confirm("Try again")?document.location.reload() : undefined, 400);}
}


