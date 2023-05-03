//defining variables
let quizContainer1 = document.getElementById("container1");
let quizContainer2 = document.getElementById("container2");
let quizContainer3 = document.getElementById("container3");
let quizContainer4 = document.getElementById("container4");
let quizContainer5 = document.getElementById("container5");
let welcome = document.getElementById("welcome");
let startButton = document.getElementById("startButton");
let quizProgress = document.getElementById("quizProgress");
let resetButton = document.getElementById("resetButton");
let feedback = document.getElementById("feedback");
let q1Button = document.getElementById("Q1button");
let q2Button = document.getElementById("Q2button");
let q3Button = document.getElementById("Q3button");
let q4Button = document.getElementById("Q4button");
let resultsButton = document.getElementById("resultsButton");

//hiding all question containers before starting quiz
quizContainer1.style.display = "none";
quizContainer2.style.display = "none";
quizContainer3.style.display = "none";
quizContainer4.style.display = "none";
quizContainer5.style.display = "none";
resetButton.style.display ="none"
q1Button.style.display = "none";
q2Button.style.display = "none";
q3Button.style.display = "none";
q4Button.style.display = "none";
resultsButton.style.display ="none";


  //function that counts how many questions are answered and tells how many questions there are overall
  function updateProgress(totalQuestions, answeredQuestions) {
	

	var totalQuestions = document.getElementsByClassName("container").length;
  var answeredQuestions = document.querySelectorAll(".container input[type='radio']:checked").length;
	var progressText = "Kysymys " + (answeredQuestions + 1) + "/" + totalQuestions;
	document.getElementById("quizProgress").innerHTML = progressText;



  }

  var totalQuestions = document.getElementsByClassName("container").length;
  var answeredQuestions = document.querySelectorAll(".container input[type='radio']:checked").length;


//displaying the first question and hiding others
function startQuiz() {
	
	welcome.style.display = "none";
	startButton.style.display = "none";
	quizContainer1.style.display = "block";
	quizContainer2.style.display="none";
	quizContainer3.style.display="none";
	quizContainer4.style.display="none";
	quizContainer5.style.display="none";
	resetButton.style.display ="none"
	// Define totalQuestions and answeredQuestions
	var totalQuestions = document.getElementsByClassName("container").length;
	var answeredQuestions = document.querySelectorAll(".container input[type='radio']:checked").length;
	
	// Call updateProgress with the new values
	document.getElementById("quizProgress").style.display = "block";
	updateProgress(totalQuestions, answeredQuestions);

}

//displaying the second question and hiding others
function nextQuestion2() {

	quizContainer1.style.display ="none";
	quizContainer2.style.display="block";
	quizContainer3.style.display="none";
	quizContainer4.style.display="none";
	quizContainer5.style.display="none";
	resetButton.style.display ="none"
	// Define totalQuestions and answeredQuestions
	var totalQuestions = document.getElementsByClassName("container").length;
	var answeredQuestions = document.querySelectorAll(".container input[type='radio']:checked").length;
	
	// Call updateProgress with the new values
	updateProgress(totalQuestions, answeredQuestions);

}

//displaying the third question and hiding others
function nextQuestion3() {

	quizContainer1.style.display ="none";
	quizContainer2.style.display="none";
	quizContainer3.style.display="block";
	quizContainer4.style.display="none";
	quizContainer5.style.display="none";
	resetButton.style.display ="none"
	// Define totalQuestions and answeredQuestions
	var totalQuestions = document.getElementsByClassName("container").length;
	var answeredQuestions = document.querySelectorAll(".container input[type='radio']:checked").length;
	
	// Call updateProgress with the new values
	updateProgress(totalQuestions, answeredQuestions);

}

//displaying the fourth question and hiding others
function nextQuestion4() {

	quizContainer1.style.display ="none";
	quizContainer2.style.display="none";
	quizContainer3.style.display="none";
	quizContainer4.style.display="block";
	quizContainer5.style.display="none";
	resetButton.style.display ="none"
// Define totalQuestions and answeredQuestions
var totalQuestions = document.getElementsByClassName("container").length;
var answeredQuestions = document.querySelectorAll(".container input[type='radio']:checked").length;

// Call updateProgress with the new values
updateProgress(totalQuestions, answeredQuestions);

}

//displaying the fifth question and hiding others

function nextQuestion5() {

	quizContainer1.style.display ="none";
	quizContainer2.style.display="none";
	quizContainer3.style.display="none";
	quizContainer4.style.display="none";
	quizContainer5.style.display="block";
	resetButton.style.display ="none"
	// Define totalQuestions and answeredQuestions
	var totalQuestions = document.getElementsByClassName("container").length;
	var answeredQuestions = document.querySelectorAll(".container input[type='radio']:checked").length;
	
	// Call updateProgress with the new values
	updateProgress(totalQuestions, answeredQuestions);

}

// Checking if the answer is correct
function checkAnswer1() {

	if (document.getElementById('correct1').value == "true" && document.getElementById("correct1").checked) {
		document.getElementById("correctAnswers1").innerHTML = "Oikea vastaus!";
		document.getElementById("correctAnswers1").style.color = "green";

	} else {
		document.getElementById("correctAnswers1").innerHTML = "Väärä vastaus. Oikea vastaus on B. vaihtoehto";
		document.getElementById("correctAnswers1").style.color = "red";

	}

	//disabling the radio buttons after pressing the checkAnswer button
	var answerRadios = document.getElementsByName('answer1');
	for (var i = 0; i < answerRadios.length; i++) {
	  answerRadios[i].disabled = true;
	}

	q1Button.style.display = "block";

  }

  function checkAnswer2() {

	if (document.getElementById('correct2').value == "true" && document.getElementById("correct2").checked) {
		document.getElementById("correctAnswers2").innerHTML = "Oikea vastaus!";
		document.getElementById("correctAnswers2").style.color = "green";
	} else {
		document.getElementById("correctAnswers2").innerHTML = "Väärä vastaus. Oikea vastaus on D. vaihtoehto";
		document.getElementById("correctAnswers2").style.color = "red";
	}
	
	//disabling the radio buttons after pressing the checkAnswer button
	var answerRadios = document.getElementsByName('answer2');
	for (var i = 0; i < answerRadios.length; i++) {
	  answerRadios[i].disabled = true;
	}

	q2Button.style.display = "block";

  }

  function checkAnswer3() {

	if (document.getElementById('correct3').value == "true" && document.getElementById("correct3").checked) {
		document.getElementById("correctAnswers3").innerHTML = "Oikea vastaus!";
		document.getElementById("correctAnswers3").style.color = "green";
	} else {
		document.getElementById("correctAnswers3").innerHTML = "Väärä vastaus. Oikea vastaus on C. vaihtoehto";
		document.getElementById("correctAnswers3").style.color = "red";
	}
	
	//disabling the radio buttons after pressing the checkAnswer button
	var answerRadios = document.getElementsByName('answer3');
	for (var i = 0; i < answerRadios.length; i++) {
	  answerRadios[i].disabled = true;
	}

	q3Button.style.display = "block";

  }

  function checkAnswer4() {

	if (document.getElementById('correct4').value == "true" && document.getElementById("correct4").checked) {
		document.getElementById("correctAnswers4").innerHTML = "Oikea vastaus!";
		document.getElementById("correctAnswers4").style.color = "green";
	} else {
		document.getElementById("correctAnswers4").innerHTML = "Väärä vastaus. Oikea vastaus on B. vaihtoehto";
		document.getElementById("correctAnswers4").style.color = "red";
	}
	
	//disabling the radio buttons after pressing the checkAnswer button
	var answerRadios = document.getElementsByName('answer4');
	for (var i = 0; i < answerRadios.length; i++) {
	  answerRadios[i].disabled = true;
	}

	q4Button.style.display = "block";

  }

  function checkAnswer5() {

	if (document.getElementById('correct5').value == "true" && document.getElementById("correct5").checked) {
		document.getElementById("correctAnswers5").innerHTML = "Oikea vastaus!";
		document.getElementById("correctAnswers5").style.color = "green";
	} else {
		document.getElementById("correctAnswers5").innerHTML = "Väärä vastaus. Oikea vastaus on D. vaihtoehto";
		document.getElementById("correctAnswers5").style.color = "red";
	}
	
	//disabling the radio buttons after pressing the checkAnswer button
	var answerRadios = document.getElementsByName('answer5');
	for (var i = 0; i < answerRadios.length; i++) {
	  answerRadios[i].disabled = true;
	}

	resultsButton.style.display = "block";

  }



//Counts points and hides all elements except results
function results() {

	var score = 0;
	var feedback = ""; // initialize feedback variable
	
	if (document.getElementById('correct1').value == "true" && document.getElementById("correct1").checked) {
	  score += 1;
	} else {
	  feedback += "Väärä vastaus kysymykseen 1. Ruttoepidemia alkoi 1300-luvulla. <br>";
	}
	
	if (document.getElementById('correct2').value == "true" && document.getElementById("correct2").checked) {
	  score += 1;
	} else {
	  feedback += "Väärä vastaus kysymykseen 2. Afrodite on kreikkalaisessa mytologiassa rakkauden, kauneuden, sulouden ja hedelmällisyyden jumala.<br>";
	}
	
	if (document.getElementById('correct3').value == "true" && document.getElementById("correct3").checked) {
	  score += 1;
	} else {
	  feedback += "Väärä vastaus kysymykseen 3. Ennen kristinuskon saapumista Suomeen suomalaiset harjoittivat erilaisia uskonnollisia tapoja ja uskomuksia. Suomalainen muinaisusko oli varhaiskantaista, monijumalaista luonnonuskoa ja vainajien palvontaa. <br>";
	}
	
	if (document.getElementById('correct4').value == "true" && document.getElementById("correct4").checked) {
	  score += 1;
	} else {
	  feedback += "Väärä vastaus kysymykseen 4. Uskonpuhdistus alkoi 1500-luvulla Martti Lutherin toimesta. Sen tarkoituksena oli oikaista katolisen kirkon opissa havaittuja epäkohtia.<br>";
	}
	
	if (document.getElementById('correct5').value == "true" && document.getElementById("correct5").checked) {
	  score += 1;
	} else {
	  feedback += "Väärä vastaus kysymykseen 5. Mikael Agricola loi raamatunsuomennoksellaan suomen kirjakielen pohjan sekä kirjoitti ja käänsi ensimmmäiset suomenkieliset painetut kirjat.<br>";
	}
	
	document.getElementById("results").innerHTML = "Vastasit oikein " + score + "/5";
	
	document.getElementById("feedback").innerHTML = feedback; // display feedback for wrong answers
	quizContainer1.style.display ="none";
	quizContainer2.style.display="none";
	quizContainer3.style.display="none";
	quizContainer4.style.display="none";
	quizContainer5.style.display="none";
	quizProgress.style.display="none";
	resetButton.style.display ="block";
	document.getElementById("feedback").style.display = "block";

	if (score == 5) {
		document.getElementById("feedback").style.display = "none";
	}
  }
  
	
  function resetQuiz() {

	

	let feedback = "";
	document.getElementById("feedback").innerHTML = "";

	document.getElementById("correctAnswers1").innerHTML = "";
	document.getElementById("correctAnswers2").innerHTML = "";
	document.getElementById("correctAnswers3").innerHTML = "";
	document.getElementById("correctAnswers4").innerHTML = "";
	document.getElementById("correctAnswers5").innerHTML = "";

	q1Button.style.display = "none";
	q2Button.style.display = "none";
	q3Button.style.display = "none";
	q4Button.style.display = "none";
	resultsButton.style.display ="none";
  
	// Reset all radio buttons to unchecked state
	var radioButtons = document.querySelectorAll("input[type='radio']");
	radioButtons.forEach(function(button) {
	  button.checked = false;
	});

	// Allow radio buttons to be used again
	var radioButtons = document.querySelectorAll("input[type='radio']");
  radioButtons.forEach(function(button) {
    button.disabled = false;
  });
	
	// Hide results
	document.getElementById("results").innerHTML = "";
  

  
	// Show welcome message and start button
	document.getElementById("welcome").style.display = "block";
	document.getElementById("startButton").style.display = "block";
  
	// Hide all question containers
	var questionContainers = document.querySelectorAll(".container");
	questionContainers.forEach(function(container) {
	  container.style.display = "none";
	});


	 // Reset progress text
	 
	 var totalQuestions = document.getElementsByClassName("container").length;
	 var answeredQuestions = 0;
	 updateProgress(totalQuestions, answeredQuestions);
		
		
	document.getElementById("feedback").style.display = "none";
	resetButton.style.display = "none";
  }
  
  
