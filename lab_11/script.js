$(document).ready(function () {
  $("#butt").on("click", function () {
    $("#card").flip(true);
    setTimeout(function () {
      $("#card").flip(false);
    }, 1000);
  });
  $("#card").flip();
});

let T=0;
let F=0;
let ind = 0;
attempts = 0;
let questions = ['body', 'leg', 'car', 'sky', 'phone', 'anime', 'card', 'game', 'enemy', 'lamp', 'energy', 'cat', 'dog', 'tree', 'flower', 'green', 'red', 'word', 'world', 'magazine', 'shop'];
let answers = ['тіло', 'нога', 'машина', 'небо', 'телефон', 'аніме', 'картка', 'гра', 'ворог', 'лампа', 'енергія', 'кіт', 'собака', 'дерево', 'квітка', 'зелений', 'червоний', 'слово', 'світ', 'журнал', 'магазин'];

function pressF(){
	attempts++;
	document.getElementById('attempts').innerHTML = attempts+'/10';
	let index = Math.floor(Math.random() * (questions.length));
    document.getElementById('question').innerHTML = questions[index];
	document.getElementById('answer').innerHTML = answers[index];	
	ind = index;
	
	$("#question").css({"display":"flex",
	"justify-content":"center",
    "align-items":"center",
    "align-content":"center",
	"font-size":"50px",
	"text-align":"center"});
	$("#answer").css({"display":"flex",
	"justify-content":"center",
    "align-items":"center",
    "align-content":"center",
	"font-size":"50px",
	"text-align":"center"});
	
	if(attempts==10){setTimeout(() => confirm("Яким би не був результат - Ви молодець!")?document.location.reload() : undefined, 1000);}
}

function check(){
	let us_answer = document.getElementById("input").value;
	if(us_answer!=answers[ind]){document.getElementById('false').innerHTML = ++F;}
	else {document.getElementById('true').innerHTML = ++T;}
	
	$("#question").css({"display":"flex",
	"justify-content":"center",
    "align-items":"center",
    "align-content":"center",
	"font-size":"50px",
	"text-align":"center"});
	$("#answer").css({"display":"flex",
	"justify-content":"center",
    "align-items":"center",
    "align-content":"center",
	"font-size":"50px",
	"text-align":"center"});
	
}

function screen(){
	$("#question").css({"display":"flex",
	"justify-content":"center",
    "align-items":"center",
    "align-content":"center",
	"font-size":"20px",
	"text-align":"center"});
	$("#answer").css({"display":"flex",
	"justify-content":"center",
    "align-items":"center",
    "align-content":"center",
	"font-size":"20px",
	"text-align":"center"});
	document.getElementById('question').innerHTML = 'Для початку тестування натисніть "Наступна картка"';
	document.getElementById('answer').innerHTML = 'Для початку тестування натисніть "Наступна картка"';
	document.getElementById('attempts').innerHTML = attempts+'/10';
}