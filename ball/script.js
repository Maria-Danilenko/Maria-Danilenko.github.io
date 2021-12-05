document.body.innerHTML=`
	<div class="explain_content">
		<div class="explain"><p>Напишіть своє питання, на яке Ви хочете отримати відповідь, та натисніть на магічний шар</p>
			<input type="text" id="question">
		</div>
	    
	</div>
	
	<div class="ball_content">
		
		<div class="ball">
		    <span id="text" class="text" onclick="answer()"></span>
		    <img src="ball.png" alt="ball">
		</div>
	</div>`;

let answers = [
	'Так','Ні','Можливо','Звісно','Безперечно','Ніяких сумнівів','Безумовно так','Можеш бути впевнений у цьому','Мені здається "так"',
	'Скоріш за все','Хороші перспективи','Знаки кажуть - "так"','Поки не ясно, спробуй знову','Запитай пізніше',
	'Краще не розповідати','Зараз не можна передбачити','Сконцентруйся і спитай знову','Навіть не думай','За моїми даними – "ні"',
	'Перспективи не дуже добрі','Дуже сумнівно'];

function answer(){
	if (question.value.length>0){
		let answer = answers[Math.floor(Math.random() * answers.length)];
		document.getElementById('text').innerHTML = answer;}
	else alert("Будь ласка, введіть питання");}