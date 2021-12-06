$(document).ready(function () {
  $("#butt").on("click", function () {
    $("#card").flip(true);
    setTimeout(function () {
      $("#card").flip(false);
    }, 1000);
  });
  $("#card").flip();
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
});

let T=0;
let F=0;
let ind = 0;
let attempts = 0;
let mode = 0;
let bool = true;


let easy_questions = ['body', 'leg', 'car', 'sky', 'phone', 'anime', 'card', 'game', 'enemy', 'lamp', 'energy', 'cat', 'dog', 'tree', 'flower'];
let easy_answers = ['тіло', 'нога', 'машина', 'небо', 'телефон', 'аніме', 'картка', 'гра', 'ворог', 'лампа', 'енергія', 'кіт', 'собака', 'дерево', 'квітка'];

let medium_questions = ['joke','attempt','citizen','crowd','influence','leak','issue','jungle','arrow','soil', 'knowledge', 'ambitious', 'molecule', 'pocket', 'monster'];
let medium_answers = ['жарт','спроба','громадянин','натовп','вплив','витік','проблема','джунглі','стріла','грунт', 'знання', 'амбіційний', 'молекула', 'кишеньковий', 'монстр'];

let hard_questions = ['courage', 'vampire', 'cartoon', 'distillery', 'housewife', 'pigeon', 'divine', 'impact', 'remuneration', 'prejudice', 'onomatopoeia', 'thunderstorm', 'penitentiary', 'platypus', 'multistory'];
let hard_answers = ['сміливість', 'вампір', 'мультик', 'винокурня', 'домогосподарка', 'голуб', 'божественний', 'імпульс', 'винагорода', 'упередження', 'звукознавство', 'гроза', 'виправний', 'качкодзьоб', 'багатоповерховий'];

let used_idx = [];
while (used_idx.length < 15) {
	let index = Math.floor(Math.random() * (easy_questions.length));
		if (used_idx.indexOf(index) === -1) used_idx.push(index);
}
let questions = [];
let answers = [];

$(document).ready(function () {
	$("#butt1").on("click", function () {
		if ($('input[name="radio"]').is(':checked')){
			mode = $('input[name="radio"]:checked').val();
			$('input[name="radio"]').prop('disabled', true);
		}
		else {
			alert('Будь ласка, оберіть складність');
			return;
		}
		++attempts;
		if(attempts>10){
			if(T<3) {confirm("У вас все ще попереду!")?document.location.reload() : undefined; return;}
			if(T<5) {confirm("Ви вже на половині шляху! Не здавайтесь!")?document.location.reload() : undefined; return;}
			if(T<8){ confirm("Вам залишилось зовсім трошки до ідеалу!")?document.location.reload() : undefined; return;}
			if(T<11) {confirm("О, як я бачу, Ви з Англії?")?document.location.reload() : undefined; return;}
			}
		
		ind = attempts-1;
		document.getElementById('attempts').innerHTML = attempts+'/10';        
		
		if(mode==1){questions.push(easy_questions[used_idx[ind]]);
			answers.push(easy_answers[used_idx[ind]]);
		}
		else if(mode==2) {questions.push(medium_questions[used_idx[ind]]);
			answers.push(medium_answers[used_idx[ind]]);
		}
		else if (mode==3) {questions.push(hard_questions[used_idx[ind]]);
			answers.push(hard_answers[used_idx[ind]]);
		}
		
		document.getElementById('question').innerHTML = questions[ind];
		document.getElementById('answer').innerHTML = answers[ind];	
		
		
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
		
		
	});
});


$(document).ready(function () {
	$("#butt").on("click", function () {
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
	});
});